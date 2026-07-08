# Security Review

## Checks Performed

- Reviewed the project for secrets or `.env` usage
- Checked for unsafe HTML injection patterns
- Reviewed internal and external links for obvious issues
- Ensured the contact page does not fake a backend submission
- Kept the project static and frontend-focused

## Risks Reviewed

- No secrets are committed in the repository
- No environment variables are required for this assignment
- No `dangerouslySetInnerHTML` usage exists
- No user-provided HTML is rendered
- No backend endpoints are exposed

## Fixes Applied

- Replaced the starter scaffold with typed, reusable components
- Added a custom `404` page and loading states
- Kept navigation and layout logic centralized
- Used static content for contact UI instead of fake submission logic

## Remaining Limitations

- The contact form is visual only and does not submit anywhere
- Social or external deployment URLs are placeholders until the project is deployed

## Environment Note

This assignment does not require sensitive environment variables.

