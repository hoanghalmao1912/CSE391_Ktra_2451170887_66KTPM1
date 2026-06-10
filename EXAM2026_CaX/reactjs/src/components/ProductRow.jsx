import React from "react";

function ProductRow() {
  return (
    <>
      <tr>
        <td>1</td>
        <td className="fw-semibold text-secondary">Điện thoại iPhone 15</td>
        <td>Điện thoại</td>
        <td>24.990.000 đ</td>
        <td className="text-center">
          <span className="badge badge-instock px-2 py-1 rounded-2">
            Còn hàng
          </span>
        </td>
      </tr>

      <tr>
        <td>2</td>
        <td className="fw-semibold text-secondary">
          Máy tính bảng Samsung Galaxy Tab S9
        </td>
        <td>Máy tính bảng</td>
        <td>18.500.000 đ</td>
        <td className="text-center">
          <span className="badge badge-instock px-2 py-1 rounded-2">
            Còn hàng
          </span>
        </td>
      </tr>

      <tr>
        <td>3</td>
        <td className="fw-semibold text-secondary">
          Chuột Logitech MX Master 3S
        </td>
        <td>Phụ kiện</td>
        <td>2.490.000 đ</td>
        <td className="text-center">
          <span className="badge badge-outstock px-2 py-1 rounded-2">
            Hết hàng
          </span>
        </td>
      </tr>

      <tr>
        <td>4</td>
        <td className="fw-semibold text-secondary">
          Máy tính xách tay MacBook Air M3
        </td>
        <td>Laptop</td>
        <td>31.990.000 đ</td>
        <td className="text-center">
          <span className="badge badge-instock px-2 py-1 rounded-2">
            Còn hàng
          </span>
        </td>
      </tr>

      <tr>
        <td>5</td>
        <td className="fw-semibold text-secondary">Tai nghe Sony WH-1000XM5</td>
        <td>Tai nghe</td>
        <td>7.990.000 đ</td>
        <td className="text-center">
          <span className="badge badge-instock px-2 py-1 rounded-2">
            Còn hàng
          </span>
        </td>
      </tr>
    </>
  );
}

export default ProductRow;
