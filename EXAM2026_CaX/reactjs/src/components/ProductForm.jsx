import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  // State quản lý giá trị của các input
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Còn hàng");

  const handleSubmit = () => {
    // Validate cơ bản
    if (!name || !category || !price) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Gửi object sản phẩm mới lên component App
    onAddProduct({
      name: name,
      category: category,
      price: Number(price), // Ép kiểu về số
      status: status,
    });

    // Reset form sau khi thêm
    handleReset();
  };

  const handleReset = () => {
    setName("");
    setCategory("");
    setPrice("");
    setStatus("Còn hàng");
  };

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-1">Thêm sản phẩm mới</h5>
        <p className="text-muted small mb-4">
          Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên sản phẩm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold small">Danh mục</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                -- Chọn danh mục --
              </option>
              <option value="Điện thoại">Điện thoại</option>
              <option value="Máy tính bảng">Máy tính bảng</option>
              <option value="Laptop">Laptop</option>
              <option value="Phụ kiện">Phụ kiện</option>
              <option value="Tai nghe">Tai nghe</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold small">Giá</label>
            <input
              type="number"
              className="form-control"
              placeholder="Nhập giá"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold small">
              Trạng thái còn hàng
            </label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Còn hàng">Còn hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
          </div>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary flex-grow-1 fw-semibold"
              onClick={handleSubmit}
            >
              Thêm sản phẩm
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary fw-semibold"
              onClick={handleReset}
            >
              Làm mới form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
