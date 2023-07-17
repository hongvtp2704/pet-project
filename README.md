# Noname project
A few things to note:
- This project uses `yarn` instead `npm` for CLI commands. `npx` is fine, but don't run `npm` directly. 
- For convenience, simply use `yarn dev` to start both server and client for development.
- Please run `yarn lint` before pushing code

## Set up at local
- Create an .env file under /server by .env.example

## The server
To start the server and auto-reload when you make changes to server-side code:
```shell
# Under project root
yarn dev:server
```

## The client
````shell
# Under project root
yarn dev:client
````

### Database Configuration
Module used: 'mysql2'
````shell
yarn add mysql2
````
Database information:
 - Update the data in .env file under ./server
````shell
DATABASE_HOST=34.142.224.124
DATABASE_NAME=pet_project
DATABASE_USER=root
DATABASE_PASSWORD=312002
ACCESS_TOKEN_SERECT=bb4cfa552257e0c108473d0716b9fd1b8b828d7bb87584c631873ea0221937f0
ACCESS_TOKEN_LIVE=120
REFRESH_TOKEN_SERECT=efb526d5326423f26274f9abc04ae61619e574b57addace4d2d1938d447bc6b5
REFRESH_TOKEN_LIVE=36000
````
