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
