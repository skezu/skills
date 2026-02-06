# EARS Syntax Reference

EARS (Easy Approach to Requirements Syntax) provides structured patterns for writing unambiguous acceptance criteria.

## Core Patterns

### 1. Ubiquitous Requirements (Always active)
```
The [system] SHALL [action]
```
Example: The system SHALL encrypt all user passwords using bcrypt.

### 2. Event-Driven Requirements
```
WHEN [trigger] THE [system] SHALL [response]
```
Example: WHEN the user clicks "Submit" THE system SHALL validate all form fields.

### 3. State-Driven Requirements  
```
WHILE [state] THE [system] SHALL [response]
```
Example: WHILE the user is logged in THE system SHALL display their username in the header.

### 4. Conditional Requirements
```
IF [condition] THEN THE [system] SHALL [response]
```
Example: IF the cart total exceeds $100 THEN THE system SHALL apply free shipping.

### 5. Complex Event-Conditional
```
WHEN [trigger] AND [condition] THE [system] SHALL [response]
```
Example: WHEN the user submits the form AND all fields are valid THE system SHALL save the data.

### 6. Optional Features
```
WHERE [feature] IS SUPPORTED THE [system] SHALL [response]
```
Example: WHERE biometric authentication IS SUPPORTED THE system SHALL offer fingerprint login.

## Keywords

| Keyword | Meaning |
|---------|---------|
| SHALL | Mandatory requirement |
| SHOULD | Recommended but not mandatory |
| MAY | Optional feature |
| WHEN | Event trigger |
| WHILE | Ongoing state |
| IF/THEN | Conditional logic |
| WHERE | Feature availability |

## Good vs Bad Examples

**Bad (vague):**
- The system should be fast
- Users can log in easily
- The app handles errors

**Good (EARS format):**
- WHEN the user submits a search query THE system SHALL return results within 2 seconds
- WHEN the user enters valid credentials THE system SHALL redirect to the dashboard
- IF an API call fails THEN THE system SHALL display an error message with retry option

## Writing Tips

1. One requirement per criterion - avoid "and" combining multiple behaviors
2. Use measurable terms - "within 2 seconds" not "quickly"
3. Specify the actor - "the system", "the user", "the API"
4. Include edge cases - what happens when things fail?
5. Be testable - can you write a test for this requirement?
