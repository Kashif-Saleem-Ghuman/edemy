import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();

// create express app
const app = express();

// ****apply middlewares****

app.use(cors()); // this use function that is available with express
app.use(express.json()); // this use function that is available with express to parse json data. when we send data from client to server, we send data in json format so we need to parse it.
app.use(morgan("dev")); // this use function that is available with express to log the request in the console.

// custom middle simple console log
app.use((req, res, next) => {
  console.log("This is my own middleware");
  next();
});

// ****Setting up routes****

// first argument is the route and second argument is the callback function

// think of express as a request response handler, so we receive a request and we send a response back after processing the request with the help of callback function.

app.get("/", (req, res) => {
  res.send("you hit the server endpoint"); // using send function to send response back to the client available with express
});

// ****Setting up port****
const port = process.env.PORT || 8000; // if we have a port in the environment variable then use that port otherwise use 8000

// ****Listening to the server****
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
