import React, { useState } from "react";

const StateFulForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  // email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //   password
  const handleChangePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>State ful Form</h2>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Name" /> <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          onChange={handleChangePassword}
          type="password"
          placeholder="Password"
          name="password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StateFulForm;
