import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };
  return (
    <>
      <h1 className="jumbotron container-fluid bg-primary text-center p-5">
        Register
      </h1>
      <div className="container col-md-6 offset-md-3 py-5">
        <form onSubmit={handleSubmit}>
          <label for="Name">Name</label>
          <input
            type="text"
            id="Name"
            className="form-control mb-4 p-4"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label for="Email">Email address</label>
          <input
            type="email"
            id="Email"
            className="form-control mb-4 p-4"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label for="Password">Email address</label>
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
