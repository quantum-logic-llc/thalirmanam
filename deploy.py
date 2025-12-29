#!/usr/bin/env python3
"""
Thalir Manam - FTP Deployment Script
Deploys the built static site to the FTP server
"""

import ftplib
import os
import sys
from pathlib import Path

# FTP Configuration
FTP_HOST = "ftp.thalirmanam.in"
FTP_USER = "thalirmanam@thalirmanam.in"
FTP_PASS = "LV^+itFn9EG0"
FTP_PORT = 21

# Local and Remote paths
PROJECT_DIR = "/var/www/thalirmanam_code"
LOCAL_BUILD_DIR = "/var/www/thalirmanam_code/out"
REMOTE_BASE_DIR = "/public_html"  # Common FTP directory for web files (change if needed)

# Files to exclude from upload
EXCLUDE_FILES = {
    '.git',
    '.gitignore',
    'node_modules',
    '.DS_Store',
    'Thumbs.db',
    '*.log',
}

# File extensions to upload in ASCII mode
ASCII_EXTENSIONS = {
    '.html', '.htm', '.css', '.js', '.json', '.xml', '.svg',
    '.txt', '.md', '.yml', '.yaml'
}


def should_exclude(filepath):
    """Check if file should be excluded from upload"""
    for exclude in EXCLUDE_FILES:
        if filepath.endswith(exclude) or exclude in filepath.split('/'):
            return True
    return False


def get_transfer_mode(filename):
    """Determine if file should be uploaded in ASCII or binary mode"""
    ext = os.path.splitext(filename)[1].lower()
    if ext in ASCII_EXTENSIONS:
        return 'A'
    return 'I'


def upload_file(ftp, local_path, remote_path):
    """Upload a single file to FTP server"""
    try:
        mode = get_transfer_mode(local_path)

        with open(local_path, 'rb' if mode == 'I' else 'r') as f:
            ftp.storbinary(f'STOR {remote_path}', f) if mode == 'I' else ftp.storlines(f'STOR {remote_path}', f)

        print(f"  ✓ Uploaded: {remote_path}")
        return True
    except Exception as e:
        print(f"  ✗ Failed: {remote_path} - {str(e)}")
        return False


def ensure_remote_dir(ftp, remote_dir):
    """Create remote directory if it doesn't exist"""
    if remote_dir == '/' or remote_dir == '.':
        return

    parts = remote_dir.strip('/').split('/')
    current_path = ''

    for part in parts:
        current_path = f"{current_path}/{part}" if current_path else f"/{part}"

        try:
            # Try to change to directory
            ftp.cwd(current_path)
        except ftplib.error_perm:
            # Directory doesn't exist, create it
            try:
                ftp.mkd(current_path)
                print(f"  + Created directory: {current_path}")
            except ftplib.error_perm as e:
                if '550' not in str(e):
                    print(f"  ! Warning: Could not create directory {current_path}: {e}")
                # Try to navigate anyway
                try:
                    ftp.cwd(current_path)
                except:
                    pass


def upload_directory(ftp, local_dir, remote_dir=''):
    """Recursively upload directory contents to FTP server"""
    local_path = Path(local_dir)

    if not local_path.exists():
        print(f"✗ Local directory does not exist: {local_dir}")
        return

    # Ensure remote directory exists
    ensure_remote_dir(ftp, remote_dir)

    print(f"\n📁 Uploading: {local_dir} -> {remote_dir}")

    success_count = 0
    fail_count = 0

    for item in local_path.iterdir():
        if should_exclude(item.name):
            continue

        remote_path = f"{remote_dir}/{item.name}" if remote_dir else f"/{item.name}"

        if item.is_file():
            if upload_file(ftp, str(item), remote_path):
                success_count += 1
            else:
                fail_count += 1

        elif item.is_dir():
            sub_success, sub_fail = upload_directory(ftp, str(item), remote_path)
            success_count += sub_success
            fail_count += sub_fail

    return success_count, fail_count


def build_project():
    """Build the Next.js project"""
    print("\n🔨 Building the project...")
    import subprocess

    try:
        # Change to project directory
        os.chdir(PROJECT_DIR)

        # Run npm run build
        result = subprocess.run(
            ['npm', 'run', 'build'],
            capture_output=True,
            text=True,
            timeout=300  # 5 minutes timeout
        )

        if result.returncode == 0:
            print("✓ Build completed successfully")
            return True
        else:
            print(f"✗ Build failed:\n{result.stderr}")
            return False

    except subprocess.TimeoutExpired:
        print("✗ Build timed out after 5 minutes")
        return False
    except Exception as e:
        print(f"✗ Build error: {e}")
        return False


def deploy():
    """Main deployment function"""
    print("=" * 60)
    print("Thalir Manam - FTP Deployment Script")
    print("=" * 60)

    # Check if build directory exists, if not - build the project
    if not os.path.exists(LOCAL_BUILD_DIR):
        print(f"\n⚠️  Build directory not found: {LOCAL_BUILD_DIR}")
        if not build_project():
            print("\n✗ Cannot proceed without a successful build")
            sys.exit(1)

    print(f"\n📂 Local build directory: {LOCAL_BUILD_DIR}")
    print(f"🌐 FTP server: {FTP_HOST}:{FTP_PORT}")

    try:
        # Connect to FTP server
        print(f"\n🔌 Connecting to FTP server...")
        ftp = ftplib.FTP()
        ftp.connect(FTP_HOST, FTP_PORT, timeout=30)
        ftp.login(FTP_USER, FTP_PASS)
        ftp.set_pasv(True)

        print(f"✓ Connected to {FTP_HOST}")

        # Get current FTP directory
        print(f"📂 Current remote directory: {ftp.pwd()}")

        # Start upload
        print(f"\n🚀 Starting upload...")
        success, fail = upload_directory(ftp, LOCAL_BUILD_DIR, REMOTE_BASE_DIR)

        # Close connection
        ftp.quit()
        print(f"\n✓ FTP connection closed")

        # Summary
        print("\n" + "=" * 60)
        print("Deployment Summary")
        print("=" * 60)
        print(f"✓ Successfully uploaded: {success} files")
        if fail > 0:
            print(f"✗ Failed uploads: {fail} files")
        print("=" * 60)

        if fail > 0:
            print("\n⚠️  Deployment completed with errors!")
            sys.exit(1)
        else:
            print("\n✅ Deployment completed successfully!")

    except ftplib.error_perm as e:
        print(f"\n✗ FTP permission error: {e}")
        print("Please check your FTP credentials and permissions")
        sys.exit(1)

    except ftplib.error_temp as e:
        print(f"\n✗ FTP temporary error: {e}")
        print("Please try again later")
        sys.exit(1)

    except OSError as e:
        print(f"\n✗ Connection error: {e}")
        print("Please check your network connection")
        sys.exit(1)

    except Exception as e:
        print(f"\n✗ Unexpected error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    deploy()
