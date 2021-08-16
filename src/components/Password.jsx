import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./Component.css";

const Password = (props) => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState('')
  const [email] = useState("code@nexotto.com");
  const history = useHistory();

  const btnhandler = async (e) => {
   

    e.preventDefault();
    console.log(password);
    if(password.length > 8) {
      await axios
      .post(`https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119`, {
        Email: email,
        Password: password,
      })
      .then((res) => {
        console.log(res);
        history.push("/nexotto");
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      console.log("enter valid password");
      setPasswordError("Please Enter valid password (min 8 char)")
    }
  };

  return (
    <div className="l-form">
      <form action="" className="form" onSubmit={btnhandler}>
        <h1 className="form__title">Sign In</h1>
        <h6 style={{
          fontWeight: 'bold',
          color: 'blue',
        }}>{email}</h6>
        <div className="form__div">
          <input
            type="text"
            className="form__input"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="" className="form__label">
            Password
          </label>
        </div>
        <h4 style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{passwordError}</h4>
        <button type="button" className="form__button" onClick={btnhandler}>
        Sign In
        </button>
      </form>
    </div>
  );
};

export default Password;
