# CookBook

## Description
[**CookBook**](https://github.com/sofiia-chorna/cookbook)

A simple CookBook JS application. The app is basically a list of recipes that are sorted by date of their creation.
Required features:
* display list of recipes (name, description, date of creation);
* adding new recipe;
* modifying existing recipe;
* possibility to view all previous versions of recipe;
* layout should be nice-styled and mobile-friendly;
* client-side must be written with React + Redux, server-side with Node.js.

## Technologies

The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the ```package.json``` files in the ```client``` and ```server``` folders.

### Common
1. [Git](https://git-scm.com/doc)
2. [REST API](https://www.restapitutorial.com/lessons/restquicktips.html)
3. [npm](https://en.wikipedia.org/wiki/Npm_(software))
4. [ESLint](https://eslint.org/docs/user-guide/getting-started)
5. [joi](https://www.npmjs.com/package/joi)
6. [dayjs](https://day.js.org/)

### Frontend
1. [React](https://reactjs.org/docs/getting-started.html)
2. [React Redux](https://redux.js.org/introduction/getting-started)
3. [React Hook Form](https://react-hook-form.com/get-started)
4. [Bootstrap](https://react-bootstrap.github.io/)

### Backend
1. [Node.js](https://nodejs.org/en/)
2. [Fastify](https://www.fastify.io/docs/v3.24.x/)
3. [Knex](https://knexjs.org/)
4. [Objection](https://vincit.github.io/objection.js/)
5. [axios](https://www.npmjs.com/package/axios)
8. [dotenv](https://www.npmjs.com/package/dotenv)

### Database
1. [PostgreSQL](https://www.postgresql.org/download/ "PostgreSQL")

## Installation

1. Get the latest stable version [PostgreSQL](https://www.postgresql.org/download/ "PostgreSQL") for your OS.

2. Create in PostgreSQL **empty** database for the project. For example, *cookbook*.

3. Clone project`s [repo](https://github.com/sofiia-chorna/cookbook):

    ```
    git clone https://github.com/sofiia-chorna/cookbook.git
    ```

### Root of project

1. In the root of the project, you can install all the dependencies with one command:

    ```
      npm run install:all
    ```

   This will install the dependencies for the root directory, frontend and backend.

### Shared

Shared package contains code that is used for both frontend and backend.

1. In the command line (terminal) go to the ```shared``` folder:

    ```
    cd /* path to shared folder */
    ```

2. Install all required packages from package.json with the command:

    ```
    npm install
    ```

### Backend

1. In the command line (terminal) go to the folder server:

    ```
    cd /* path to server folder */
    ```

2. Install all required packages from ```package.json``` with the command:

    ```
    npm install
    ```

3.  In the server folder create a file **.env** and copy the contents of the file **.env.example** into it.

    Replace in file **.env** key values to real.


4. Run [migrations](https://knexjs.org/#Migrations) and seeds to populate the database with demo data. To do this, in the command line (terminal) in the server folder, run:

    ```
    npm run migrate:run
    npm run seed:run
    ```

   Check the database for demo data.

5. To start the server in the command line (terminal) in the server folder, run:

    ```
    npm start
    ```

### Frontend

1. In the command line (terminal) go to the ```client``` folder:

    ```
    cd /* path to client folder */
    ```

2. Install all required packages from package.json with the command:

    ```
    npm install
    ```

3.  In the ```client``` folder create a file **.env** and copy the contents of the file into it **.env.example**.

    Replace in file **.env** key values to real.

4. To run the client from the command line (terminal) in the client folder, run:

    ```
    npm start
    ```

   The app should automatically open in your default browser.
