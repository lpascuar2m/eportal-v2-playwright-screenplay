Defect: 1958 - Sign In with Enter Key
Tags: @sanity @ProdIssues @defect#1958 @keyboard-accessibility @authentication

Background: Defect reported that pressing Enter key after entering credentials did not trigger authentication. Fix implemented to enable keyboard submission via Enter key, restoring standard web form behavior and improving accessibility for keyboard-only users.

Scenario: should sign in successfully when pressing Enter key
  Actor: "Admin"
  Action: Signs in to the portal using Enter key
    Interaction: Enters valid admin email address
    Interaction: Enters valid admin password
    Interaction: Presses Enter key on keyboard
  Question: Is authentication successful?
  Answer: Yes, user is signed in successfully
