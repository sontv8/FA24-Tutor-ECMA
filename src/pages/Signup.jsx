import React, { useState } from "react";

const Signup = (props) => {
  const [inputValues, setInputValues] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onSignup(inputValues);
  };
  return (
    <div>
      <h1>Đăng ký</h1>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" name="username" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="password" onInput={onHandleChange} />
        </div>

        <button>Đăng ký</button>
      </form>
    </div>
  );
};

export default Signup;
