import React, { useState } from "react";
import { products } from "../../html/data/data"; // Nạp file giả lập CSDL
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductTable";

const App = () => {
  // Khởi tạo state với dữ liệu từ file data.js
  const [productList, setProductList] = useState(products);

  // Hàm xử lý thêm sản phẩm
  const addProduct = (newProduct) => {
    // Tạo id tự động
    const productWithId = {
      ...newProduct,
      id: Date.now(),
    };

    // Cập nhật mảng (giữ nguyên mảng cũ, thêm phần tử mới vào cuối)
    setProductList([...productList, productWithId]);
  };

  return (
    <div
      className="container my-5"
      style={{
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Header />

      <div className="row g-4">
        {/* Cột Form (chiếm 4 phần) */}
        <div className="col-lg-4">
          <ProductForm onAddProduct={addProduct} />
        </div>

        {/* Cột Danh sách (chiếm 8 phần) */}
        <div className="col-lg-8">
          <ProductList productList={productList} />
        </div>
      </div>
    </div>
  );
};

export default App;
