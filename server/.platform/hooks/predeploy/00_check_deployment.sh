#!/bin/bash
echo "=== Deployment Verification ==="
echo "Current directory: $(pwd)"
echo "Package.json contents:"
cat /var/app/staging/package.json
echo "=== End Verification ===" 