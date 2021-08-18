import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="app-wrapper ">
          <div>
            <h className="title">SignIn | SignUp</h>
          </div>
          <form className="form-wrapper">
            <div className="name">
              <label className="label">Full Name</label>
            </div>
            <div>
              <input className="input" type="text" />
            </div>
            <div className="email">
              <label className="label">Email</label>
              <input className="input" type="email" />
            </div>
            <div className="password">
              <label className="label">Password</label>
              <input className="input" type="password" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
