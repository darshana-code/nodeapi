# nodeapi
CRUD API using Node, express and mongodb

This is a Restful CRUD API server with Node.js, Express and MongoDB.

### API Features

The application can create, read, update and delete data in a database. 

How to start:
1) copy project files on local 
2) Then run "npm install" to install all dependencies
3) Need to create a db in MongoDB. I have used compass GUI to create DB
3) once have all dependencies run "npm run dev" to start the server

The API Endpoints are :
1) http://localhost:3000/data :
    Use Get request to fetch all the available data record in db
2) http://localhost:3000/data/[id]
    Use Get request to fetch sepecific data by id from db
3) http://localhost:3000/data
    Use Post request with id, name and title in JSON format to create new data record in db
4) http://localhost:3000/data/[id]
    Use Put request to update a single data record in db
5) http://localhost:3000/data/[id]
    Use Delete request to update a single data record in db    


Note: Used nodemon to make the local develop easy

