import React, { useState } from "react";
import axios from "axios";

import "./Form.css";

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    birthDate: "",
  });
  const [emailConsent, setEmailConsent] = useState(false);
  console.log("consent", emailConsent);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setUserInfo({ name: "", email: "", birthDate: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users",
        { ...userInfo, emailConsent }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    clear();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          id="birthDate"
          name="birthDate"
          type="text"
          placeholder="00/00/0000"
          value={userInfo.birthDate}
          onChange={handleChange}
        />

        <div className="terms">
          <input
            id="terms"
            type="checkbox"
            onChange={() => setEmailConsent(!emailConsent)}
            checked={emailConsent}
          />
          <label>I agree to be contacted via email</label>
        </div>

        <button onClick={clear}>Clear</button>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
