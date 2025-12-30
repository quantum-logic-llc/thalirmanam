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
FTP_HOST = "thalirmanam.in"
FTP_USER = "thalirmanam@thalirmanam.in"
FTP_PASS = "LV^+itFn9EG0"
FTP_PORT = 21

# Local and Remote paths
PROJECT_DIR = "/var/www/thalirmanam_code"
LOCAL_BUILD_DIR = "/var/www/html/thalirmanam_prod"
REMOTE_BASE_DIR = "/"  # Common FTP directory for web files (change if needed)

# Files to exclude from upload
EXCLUDE_FILES = {
    '.git',
    '.gitignore',
    'node_modules',
    '.DS_Store',
    'Thumbs.db',
    '*.log',
}


def should_exclude(filepath):
    """Check if file should be excluded from upload"""
    for exclude in EXCLUDE_FILES:
        if filepath.endswith(exclude) or exclude in filepath.split('/'):
            return True
    return False


def ensure_remote_dir(ftp, remote_dir):
    """Create remote directory if it doesn't exist"""
    if not remote_dir or remote_dir == '.' or remote_dir == '/':
        return

    parts = remote_dir.strip('/').split('/')

    for part in parts:
        if not part:
            continue

        # Try to change to the part first
        try:
            ftp.cwd(part)
        except ftplib.error_perm:
            # Directory doesn't exist, try to create it
            try:
                ftp.mkd(part)
                print(f"  + Created directory: {part}")
                # Now change into it
                ftp.cwd(part)
            except ftplib.error_perm as e:
                print(f"  ✗ Failed to create directory '{part}': {e}")
                raise


def upload_directory(ftp, local_dir, remote_dir=''):
    """Recursively upload directory contents to FTP server"""
    local_path = Path(local_dir)

    if not local_path.exists():
        print(f"✗ Local directory does not exist: {local_dir}")
        return 0, 0

    # Normalize remote directory
    remote_dir = remote_dir.rstrip('/') if remote_dir else ''

    print(f"\n📁 Uploading: {local_dir} -> /{remote_dir if remote_dir else ''}")

    # Create the remote directory and change into it
    try:
        ensure_remote_dir(ftp, remote_dir)
    except Exception as e:
        print(f"  ✗ Failed to create directory structure: {e}")
        return 0, 0

    success_count = 0
    fail_count = 0

    for item in local_path.iterdir():
        if should_exclude(item.name):
            continue

        if item.is_file():
            # Upload file (relative to current directory)
            try:
                file_size = os.path.getsize(item)
                with open(item, 'rb') as f:
                    ftp.storbinary(f'STOR {item.name}', f, blocksize=8192)
                current = ftp.pwd()
                print(f"  ✓ Uploaded: /{current}/{item.name} ({file_size:,} bytes)")
                success_count += 1
            except Exception as e:
                print(f"  ✗ Failed: {item.name} - {e}")
                fail_count += 1

        elif item.is_dir():
            # Save current directory
            current_dir = ftp.pwd()

            # Process subdirectory
            sub_success, sub_fail = upload_directory(ftp, str(item), item.name)
            success_count += sub_success
            fail_count += sub_fail

            # Return to parent directory
            try:
                ftp.cwd(current_dir)
            except:
                pass

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
