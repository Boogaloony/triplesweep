# Changelog

## [2024-02-08]
### Changed
- Updated `.ebextensions/nodejs.config` to remove build step from deployment
- Moved TypeScript to devDependencies in `package.json`
- Fixed `tsconfig.json` configuration for production builds
- Added production deployment files:
  - `.npmrc` for production dependencies
  - `Procfile` for EB process management
  - `buildspec.yml` for AWS CodeBuild configuration
- Moved buildspec.yml to root directory for proper pipeline configuration
- Confirmed .npmrc and Procfile location in server directory for EB deployment

### Fixed
- Resolved ts-node command not found error in EB deployment
- Improved dependency management for production builds

## [Previous Changes]
// Add previous significant changes here 