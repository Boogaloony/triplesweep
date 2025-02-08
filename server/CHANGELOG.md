# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Centralized configuration management
- Environment-specific port settings
- Production environment variables in .ebextensions
- Added .platform/hooks/predeploy/00_check_deployment.sh for deployment verification
- Set executable permissions for deployment script

## [1.0.0] - 2024-02-08
### Added
- Initial deployment setup
- Basic Express server configuration
- AWS S3 integration
- PostgreSQL database connection
- Multer for file uploads

### Changed
- Updated start script to use compiled JavaScript instead of ts-node
- Removed dist/ from .gitignore for deployment
- Added deployment verification script
- Moved hardcoded values to configuration files
- Standardized environment variable handling

### Fixed
- Production deployment issues with TypeScript compilation
- Package.json start script configuration

### Security
- Properly configured CORS
- Environment variable management

## [2024-02-08]
### Changed
- Simplified EB configuration to minimal required settings
- Removed problematic nodejs container settings
- Relying on default EB Node.js platform configuration

### Fixed
- Changed tsconfig.json "noEmit" setting from true to false to allow JavaScript file generation
- Fixed TypeScript compilation for production deployment
- Updated .ebextensions/nodejs.config to use correct YAML map format
- Resolved Elastic Beanstalk configuration validation errors

### Removed
- Removed testDb.ts and its associated test script

## [Previous Changes]
// Add previous significant changes here 