import React, { useEffect, useRef, useState } from "react";

const RefForm = () => {
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <h2>UseRef Form</h2>
      <form onSubmit={handleForm}>
        <input
          defaultValue={"Ahmed"}
          ref={nameRef}
          type="text"
          placeholder="name"
          name="name"
        />
        <br />

        <input ref={emailRef} type="email" name="email" placeholder="email" />
        <br />

        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RefForm;
