import React from "react";

function ProductForm() {
  return (
    <div className="row g-4">
      <div className="col-xl-4 col-lg-5">
        <div className="card border-0 shadow-sm p-4 rounded-3 h-100">
          <h5 className="fw-bold mb-1">Thêm sản phẩm mới</h5>
          <p className="text-muted small mb-4">
            Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.
          </p>

          <form>
            <div className="mb-3">
              <label
                htmlFor="productName"
                className="form-label small fw-semibold text-secondary"
              >
                Tên sản phẩm
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Nhập tên sản phẩm"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="productCategory"
                className="form-label small fw-semibold text-secondary"
              >
                Danh mục
              </label>
              <select
                className="form-select"
                id="productCategory"
                defaultValue=""
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
              <label
                htmlFor="productPrice"
                className="form-label small fw-semibold text-secondary"
              >
                Giá
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                placeholder="Nhập giá"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productStatus"
                className="form-label small fw-semibold text-secondary"
              >
                Trạng thái còn hàng
              </label>
              <select
                className="form-select"
                id="productStatus"
                defaultValue="true"
              >
                <option value="true">Còn hàng</option>
                <option value="false">Hết hàng</option>
              </select>
            </div>

            <div className="d-flex gap-2">
              <button
                type="submit"
                className="btn btn-primary px-4 flex-grow-1"
              >
                Thêm sản phẩm
              </button>
              <button type="reset" className="btn btn-outline-secondary px-3">
                Làm mới form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
