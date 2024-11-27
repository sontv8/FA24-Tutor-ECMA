import React, { useState } from "react";

const AddProduct = (props) => {
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
    props.onAdd(inputValues);
  };
  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" name="name" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Ảnh sản phẩm</label>
          <input type="text" name="image" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Giá sản phẩm</label>
          <input type="text" name="price" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Mô tả sản phẩm</label>
          <input type="text" name="description" onInput={onHandleChange} />
        </div>
        <button>Thêm mới</button>
      </form>
    </div>
  );
};

export default AddProduct;
