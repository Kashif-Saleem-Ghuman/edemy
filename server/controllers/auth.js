export const register = async (req, res) => {
  console.log(req.body); // this will print the data that we send from the client to the server
  res.json("register user response from controller"); // using send function to send response back to the client available with express
};
