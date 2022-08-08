# Calorie Meter

Simple calorie tracking app.

Users should be able to enter their food entries along with the number of calories for each
food entry.

## Task functionalities
  
### Users should be able to manage food entries
    ● A user should be able to add a new food entry
    ● Food entry should contain the following information:
        ○ Date/time when the food was taken
        ○ Food/product name (i.e. Milk, banana, hamburger)
        ○ Calorie value (numeric value)
    ● The first screen a user should see is the list of existing food entries
### Calorie limit warning per day
    ● The daily threshold limit of calories should be 2.100.
        ○ Ensure the users can see for which day they reached that limit. Also, ensure it
          is easy to change that limit in the code, per user. You don’t have to create an
          interface for this purpose. Admin role with a simple reporting
### Implement an admin role
    ● Admin can see a screen with all added food entries of all users and manage existing
    food entries (read, update, create, delete)
    ● Admin should also see the report screen with the following information
        ○ Number of added entries in the last 7 days vs. added entries the week before
          that. Please Include the current day in those stats
        ○ The average number of calories added per user for the last 7 days
        ○ A regular user should not be able to access this reporting screen or access its
          data.
### User authentication/authorization
    ● Please use a token authentication method. You don’t have to implement a signup
    and login process. You can manage everything using a predefined user-specific token
    in the backend, however, ensure the token can be changed easily during your next
    interview
### Filtering by dates
    ● Users should be able to filter food entries by entry date (date from / date to)
    ● Place filter fields on the same screen where the list of previously added food entries is
### Diet-cheating feature
    ● We would like to allow the user to pick which food entry they don’t want to include in
    the calculation of consumed calories. So, please allow the user to select a
    checkbox/switch control so this food entry is not used in a daily limit calculation :)

## Project Info
* The project contains client (React) and server (Node.js) with PostgresQL as database.
* The React project is created through create-react-app boilerplate.
* This project requires Node v14.
* To run the client, 

```bash
npm install
```

```bash
npm run start
```

* To run the server, 

```bash
npm install
```

```bash
npm run start
```

* Please make sure that the postgres database is running locally on 5432 Port
* To import test user data, uncomment the code in server/index.js and run the server.

