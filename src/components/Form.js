import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Name ${name}`);
    console.log(`Submitting Emil ${email}`);
    console.log(`Submitting Date of Birth ${dob}`);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="dob"
          type="text"
          placeholder="00/00/0000"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <div className="terms">
          <input id="terms" type="checkbox" />
          <label>I agree to be contacted via email</label>
        </div>

        <button>Clear</button>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
