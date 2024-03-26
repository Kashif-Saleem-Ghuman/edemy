import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table({ name, email, password });
    try {
      const { data } = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="jumbotron container-fluid bg-primary text-center p-5">
        Register
      </h1>
      <div className="container col-md-6 offset-md-3 py-5">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            className="form-control mb-4 p-4"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="Email">Email address</label>
          <input
            type="email"
            id="Email"
            className="form-control mb-4 p-4"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="Password">Email address</label>
          <input
            type="password"
            id="Password"
            className="form-control mb-4 p-4"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary col-md-12 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
