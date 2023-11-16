import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AssignmentLogin = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
    if (
      inputField.email == "admin@gmail.com" &&
      inputField.password == "12345"
    ) {
      navigate("/add");
    } else {
      alert("invalid credentials");
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <div className="row g-3 card">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={inputField.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={inputField.password}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readVal} className="btn btn-warning">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentLogin;
