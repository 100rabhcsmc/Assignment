import React, { useState } from "react";
import axios from "axios";
import "./Component.css";
import { Link } from "react-router-dom";

const Email = (props) => {
  const [email, setEmail] = useState("");

  const btnhandler = async () => {
    await axios({
      method: "GET",
      url: `https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2?Email=${email}`,
    })
      .then((res) => {
        console.log(res.user.email);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="" className="form__label">
            Email
          </label>
        </div>

        <Link to="./password" >
          <button type="button" className="form__button" onClick={btnhandler}>
            Next
          </button>
        </Link>
      </form>
      
    </div>
  );
};

export default Email;
