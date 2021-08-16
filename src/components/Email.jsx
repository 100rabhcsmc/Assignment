import React, { useState } from "react";
import axios from "axios";
import "./Component.css";
import { useHistory } from "react-router-dom";

const Email = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('')

  const history = useHistory();


  const btnhandler = async () => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      console.log("valid email")
      await axios({
        method: "GET",
        url: `https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2?Email=${email}`,
      })
        .then((res) => {
          console.log('CL ~ file: Email.js ~ line 17 ~ .then ~ res', res);
          console.log(email);

          history.push(`/password`);
        })
        .catch((err) => {
          
          console.log(err);
        });
    } else {
      console.log("invalid email")
      setEmailError("Please Enter a valid Email")
    }

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
        <h4 style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</h4>
        <button type="button" className="form__button" onClick={btnhandler}>
          Next
        </button>
        {/* <Link to="./password" >
          
        </Link> */}
      </form>

    </div>
  );
};

export default Email;
