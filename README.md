# How to Use

Ensure you have installed all necessary Node modules by running 
```npm install```
wthin folders /superheroRestServer
and /superheroSPA

## 1. Creating the Database Connection and readying the database

From project root directory:
```shell
cd ./superheroRestServer/storage &&
node createDatabase <adminpassword>
```

## 2. Starting the REST Server

From project root directory:
```shell
cd ./superheroRestServer && node indexRest
```
The REST server will be created on port 4000.

## 3. Viewing the App

From project root directory:
```shell
cd ./superheroSPA && node indexSPA
```
The app will run on localhost:3000.
