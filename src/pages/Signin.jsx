import React, { useState } from "react";

const Signin = (props) => {
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
    props.onSignin(inputValues);
  };
  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="password" onInput={onHandleChange} />
        </div>

        <button>Đăng nhập</button>
      </form>
    </div>
  );
};

export default Signin;
