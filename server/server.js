import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();
// To auto load all the routes in the routes folder, we need to use the file system module that comes with nodejs.
import { readdirSync } from "fs";
import mongoose from "mongoose";

// create express app
const app = express();

// ****Database Connection****
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));
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

// readdirSync function will read all the files in the routes folder and then we will loop through all the files and then we will require each file and then we will use the middleware function that is available with express to use the route.

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// ****Setting up port****
const port = process.env.PORT || 8000; // if we have a port in the environment variable then use that port otherwise use 8000

// ****Listening to the server****
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
