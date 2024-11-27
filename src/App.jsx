import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const onRemove = (id) => {
    if (confirm("Bạn có muốn xoá sản phẩm không?")) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      }).then(() => {
        const newProducts = products.filter((item) => item.id != id);
        setProducts(newProducts);
        alert("Xoá sản phẩm thành công");
      });
    }
  };

  const onAdd = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Thêm sản phẩm thành công");
        setProducts([...products, data]);
        navigate("/admin/products");
      });
  };

  const onUpdate = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        const newProducts = products.map((item) =>
          item.id == data.id ? data : item
        );
        setProducts(newProducts);
        alert("Cập nhật sản phẩm thành công");
        navigate("/admin/products");
      });
  };

  const onSignup = (user) => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  const onSignin = (user) => {
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status == "400") return;
      navigate("/admin/products");
    });
  };
  return (
    <>
      <Routes>
        <Route
          path="/admin/products"
          element={<ProductList products={products} onRemove={onRemove} />}
        />
        <Route
          path="/admin/products/add"
          element={<AddProduct onAdd={onAdd} />}
        />
        <Route
          path="/admin/products/:id/edit"
          element={<UpdateProduct onUpdate={onUpdate} />}
        />
        <Route path="/signup" element={<Signup onSignup={onSignup} />} />
        <Route path="/signin" element={<Signin onSignin={onSignin} />} />
      </Routes>
    </>
  );
}

export default App;
