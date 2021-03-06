# The phones gallery

### About the project

This a simple example of showing a list of phones, with the information taken from the server. Also, some basic CRUD functionality implemented.

The app main view show a card list of mobile phones that are stored into the db. It's possible to add a new phone clicking in the ADD button.
Clicking on each card, navigates to the details view where you can edit or delete the current selected phone.

### Libraries used

This has been created using Angular for the frontend and NodeJS for the bakend, using Express for the server and the REST api.
For the tests, ng-mocks and testdouble have been used for mocking.

### Features

-   List of phones getting the data from a REST api
-   Somewhat responsive
-   CRUD
-   Data persistence using diskdb

### Getting startend

1. Clone the repo

-   `git clone https://github.com/trno3/phones.git`

2. Install the dependency packages and then compile the Angular app using in the root of the project:

-   `npm run install:packages`
-   `npm run build`

3. Run the application using

-   `npm start`

4. Open the localhost using the port 3001

-   `http://localhost:3001`

5. To execute the tests, use

-   `npm test`
