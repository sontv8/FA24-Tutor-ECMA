import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <Link to={"/admin/products/add"}>
        <button>Thêm mới</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh SP</th>
            <th>Tên SP</th>
            <th>Giá SP</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} alt="" style={{ width: 500 }} />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <Link to={`/admin/products/${item.id}/edit`}>
                    <button>Cập nhật</button>
                  </Link>
                  <button onClick={() => props.onRemove(item.id)}>Xoá</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
