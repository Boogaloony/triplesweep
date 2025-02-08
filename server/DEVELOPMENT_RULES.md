# Development Rules & Best Practices

## AWS Elastic Beanstalk Deployment
1. Never run TypeScript compilation on production servers
2. Always build JavaScript files before deployment
3. Keep only production dependencies in deployed packages
4. Use proper process management through Procfile
5. Configure proper build pipeline steps

## Environment & Security
1. Always use .env for environment variables
2. Never commit sensitive information
3. Keep production credentials separate from development

## Code Organization
1. Keep source files in src/ directory
2. Maintain clean separation of dev and production dependencies
3. Use TypeScript strict mode
4. Maintain proper type definitions

## Pipeline Rules
1. Build process must compile TypeScript to JavaScript
2. Run tests before deployment
3. Clean development dependencies before production deploy
4. Maintain proper artifact structure

## Monitoring & Logging
1. Implement proper error handling
2. Use structured logging
3. Monitor application health metrics

## To-Do / Improvements
- [ ] Add proper error handling middleware
- [ ] Implement structured logging
- [ ] Set up monitoring alerts
- [ ] Add automated tests
// Add more items as needed 

// ... existing rules ...

## Pipeline Rules
1. Build process must compile TypeScript to JavaScript
2. Run tests before deployment
3. Clean development dependencies before production deploy
4. Maintain proper artifact structure
5. Keep buildspec.yml in root directory for pipeline access