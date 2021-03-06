# cook-book

## Step by step guide on how to run project in development environment

### The mock server is built with [json-server](https://github.com/typicode/json-server) and as such it's important to install it before running the development environment.

0. Clone the repo locally

   `git clone https://github.com/IvanBoban/cook-book`

#### Running the mock server

1. Once cloned via the terminal position yourself inside the server directory

   `cd server`

2. Start the json-server

   `json-server db.json`

Note: The server is configured to run on `localhost:3001` if you wish to change which port the server is running on you can change it in `json-server.json`

#### Running the client

1. Open a new terminal inside the cloned directory

2. Position yourself inside the client directory

   `cd client`

3. Install the needed dependencies with yarn

   `yarn install`

4. Create a `.env` file inside the client directory following the template inside the `.env.dist`

5. Run the client

   `yarn start`
