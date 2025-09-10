import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" /> <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
