# AI Interaction Rules & Preferences

## General Communication
1. Always provide code changes in clear, minimal snippets
2. Include file paths with language identifiers in code blocks
3. Explain changes before showing code
4. Focus on one issue at a time

## Code Context
1. Reference relevant files from CHANGELOG.md and DEVELOPMENT_RULES.md
2. Keep track of current project state through provided context
3. Don't make assumptions about code not shown in context
4. Ask for clarification when context is unclear

## Code Modifications
1. Show only the necessary changes, using "// ... existing code ..." for unchanged sections
2. Include brief explanations for why changes are needed
3. Follow project's established patterns and rules
4. Always consider AWS EB best practices
5. MUST update CHANGELOG.md with ALL code changes
6. MUST update DEVELOPMENT_RULES.md when new rules or practices are established

## Change Documentation Requirements
1. Every code change must be logged in CHANGELOG.md with:
   - Date of change
   - Description of what changed
   - Why it was changed (if significant)
2. Every new development rule or practice must be added to DEVELOPMENT_RULES.md
3. Both files must be updated in the same PR/commit as the code changes
4. Changes should be clear and specific enough to understand the context later

## Error Handling
1. When addressing errors, quote the specific error message
2. Explain the root cause before suggesting solutions
3. Provide step-by-step solutions for complex issues
4. Consider both immediate fixes and long-term improvements

## Best Practices
1. Suggest improvements while maintaining existing functionality
2. Reference DEVELOPMENT_RULES.md when suggesting changes
3. Update CHANGELOG.md with significant changes
4. Keep security and production stability as top priorities

## Documentation
1. Suggest documentation updates when making significant changes
2. Keep documentation in sync with code changes
3. Use clear, consistent formatting in markdown files
4. Maintain separate concerns in different documentation files

## Project Structure
1. Server-specific files stay in server/ directory (including .npmrc and Procfile)
2. Client-specific files stay in client/ directory
3. Root directory contains only project-wide configuration (like buildspec.yml) and documentation
4. Each component maintains its own CHANGELOG.md and DEVELOPMENT_RULES.md

## To-Do
- [ ] Add specific project patterns and conventions
- [ ] Document common troubleshooting procedures
- [ ] Add templates for common code changes
- [ ] Define project-specific terminology 