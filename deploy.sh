#!/bin/bash
# Deployment script for Thalir Manam website
# Copies built files from out/ to nginx web root

set -e

PROJECT_DIR="/var/www/thalirmanam_code"
WEB_ROOT="/var/www/html"
BUILD_DIR="$PROJECT_DIR/out"

echo "🚀 Starting deployment..."
echo "================================"

# Check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Error: Build directory not found at $BUILD_DIR"
    echo "Please run 'npm run build' first"
    exit 1
fi

# Backup existing files (optional)
BACKUP_DIR="/var/www/html.backup.$(date +%Y%m%d_%H%M%S)"
echo "📦 Backing up current web root to $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
cp -r /var/www/html/* "$BACKUP_DIR/" 2>/dev/null || true

# Remove old files from web root (except specific directories)
echo "🧹 Cleaning web root..."
cd "$WEB_ROOT"
# Keep these directories intact
for dir in api img_upload insta-approval insta-assist; do
    [ -d "$dir" ] && mv "$dir" /tmp/backup_deploy_$dir
done

# Remove everything else
rm -rf * .* 2>/dev/null || true

# Restore preserved directories
for dir in api img_upload insta-approval insta-assist; do
    [ -d "/tmp/backup_deploy_$dir" ] && mv "/tmp/backup_deploy_$dir" "$dir"
done

# Copy new files
echo "📋 Copying built files to web root..."
cp -r "$BUILD_DIR"/* "$WEB_ROOT/"

# Set permissions
echo "🔒 Setting permissions..."
chown -R www-data:www-data "$WEB_ROOT"
chmod -R 755 "$WEB_ROOT"

# Clear nginx cache (if using fastcgi_cache)
sudo rm -rf /var/cache/nginx/fastcgi 2>/dev/null || true

echo "================================"
echo "✅ Deployment completed successfully!"
echo ""
echo "📝 Deployment summary:"
echo "   - Source: $BUILD_DIR"
echo "   - Target: $WEB_ROOT"
echo "   - Backup: $BACKUP_DIR"
echo ""
