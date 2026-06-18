import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ productList }) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-1">Danh sách sản phẩm</h5>
        <p className="text-muted small mb-4">
          Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống.
        </p>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr className="text-secondary small">
                <th scope="col" className="fw-semibold">
                  STT
                </th>
                <th scope="col" className="fw-semibold">
                  TÊN SẢN PHẨM
                </th>
                <th scope="col" className="fw-semibold">
                  DANH MỤC
                </th>
                <th scope="col" className="fw-semibold">
                  GIÁ
                </th>
                <th scope="col" className="fw-semibold">
                  TRẠNG THÁI
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Lặp qua mảng truyền từ App xuống để render các dòng */}
              {productList.map((item, index) => (
                <ProductRow key={item.id} index={index} product={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
