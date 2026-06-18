import React from "react";

const ProductRow = ({ index, product }) => {
  // Logic chọn class màu sắc dựa trên trạng thái
  const badgeClass =
    product.status === "Còn hàng"
      ? "bg-success-subtle text-success"
      : "bg-danger-subtle text-danger";

  return (
    <tr>
      <td className="text-muted">{index + 1}</td>
      <td className="fw-medium">{product.name}</td>
      <td className="text-muted">{product.category}</td>
      {/* Định dạng tiền tệ kiểu Việt Nam */}
      <td>{product.price.toLocaleString("vi-VN")} ₫</td>
      <td>
        <span className={`badge px-2 py-1 rounded-pill ${badgeClass}`}>
          {product.status}
        </span>
      </td>
    </tr>
  );
};

export default ProductRow;
