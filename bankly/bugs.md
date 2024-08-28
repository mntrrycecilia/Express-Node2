** Document your bugs here **

### Description: BUG#1
The 'authUser' function in the 'auth.js" file uses 'jwt.decode' to decode the token but jwt.decode does not verify the token's validity, which is a security risk. This could lead a bad actor to send a tampered token that is accepted as valid.

## Affected Code:
-File: 'auth.js'
-Function: 'authUser'

### Steps to Reproduce:
1. Provide an invalid JWT token to the 'authUser' function.
2. The function incorrectly accepts the token without verification.

### Fix:
Use Use 'jwt.verify' insted of jwt.decode to decode and verify the token.


### Description: BUG#2
the 'get' method in the "User" class try to create an error when a user is not found, however it does not actually throw an error.
## Affected Code:
-File: 'user.js'
- Method: 'get'

### Steps to Reproduce:
1. use 'user.get' with a username that does not exist in the database.
2. Make sure the method returns 'undefined' insted of throwing a '404' error.

### Fix:
Add a 'trhow" keyword before 'ExpressError' to make sure the error is thrown.


### Description: BUG#3
The 'getAll' method in the 'User' class accepts 'username' and 'password' as parameters, but tese ar enot used in the SQL query or anywhere in the function. This can cause confusion by mislead other developers or users.

## Affected Code:
-File:'user.js'
-Function: 'getAll'

### Steps to Reproduce:
A test has been added to 'users.test.js' to check that the 'getAll' methd resturns all users regardless of the passed parameters.

### Fix:
Remove the unused username and password.

### Description: BUG#4
The 'update' method in the 'User' class uses 'sqlForPartialUpdate' to generate an SQL for generating the user, but if the 'data' object provided is empt, the method might generate an invalid SQL query or do an update without any actual changes.

## Affected Code:
-File: 'users.js'
-Function: 'update'

### Steps to Reproduce:
A test has been added to 'users.test.js' to ensure the 'update' method throws an error if no update data is provided.

### Fix:
Add a check to ensure that the data object is not empty before proceeding with the update. It it is empty, throw an error indicating that no data was provided.

### Description: BUG#5
The requireLogin and requireAdmin middleware functions directly pass an error when authorization fails.

## Affected Code:
-File: 'auth.js'
-Function: 'requireLogin' and requireAdmin

### Steps to Reproduce:
Test have been added to both to ensure that the middleware functions throw a 401 error when the authorization checks fails.

### Fix:
Use ExpressError for consistent error handling.

### Description: BUG#6
Duplicate 'module.exports = app'

### Affected Code:
-File: app.js

### Fix:
Removed the duplicated expression.

### Description: BUG#7
Missing 'dotevn.config()'. This is required but not called to load enviroment from a .env file.

### Affected Code:
-File: 'config.js

### Fix
Add 'dotenv.config()

### Description: BUG#8




