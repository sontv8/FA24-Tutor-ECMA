import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = (props) => {
  const [inputValues, setInputValues] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setInputValues(data));
  }, []);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onUpdate(inputValues);
  };
  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            onInput={onHandleChange}
            defaultValue={inputValues.name}
          />
        </div>
        <div>
          <label htmlFor="">Ảnh sản phẩm</label>
          <input
            type="text"
            name="image"
            onInput={onHandleChange}
            defaultValue={inputValues.image}
          />
        </div>
        <div>
          <label htmlFor="">Giá sản phẩm</label>
          <input
            type="text"
            name="price"
            onInput={onHandleChange}
            defaultValue={inputValues.price}
          />
        </div>
        <div>
          <label htmlFor="">Mô tả sản phẩm</label>
          <input
            type="text"
            name="description"
            onInput={onHandleChange}
            defaultValue={inputValues.description}
          />
        </div>
        <button>Cập nhật</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
