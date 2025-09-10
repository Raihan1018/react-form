import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <h1>React Form </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" name="email" />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
