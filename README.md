# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Completed by: Simar Gowda

## Check Your Understanding

1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not?

No, not by itself. Sending a message usually involves multiple components (UI input, validation, API calls), so this is better suited for integration or end-to-end testing. Unit tests can still be used for small helper logic within that feature.

2. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?

Yes, because this is a focused rule (for example, blocking input beyond 80 characters), which is good for unit testing because it is isolated and quick to verify with true/false cases.


## Links
- https://simgowda.github.io/Lab5_Starter/expose.html
- https://simgowda.github.io/Lab5_Starter/explore.html
