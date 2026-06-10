import React from "react";

function ProductTable() {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-light text-secondary small">
          <tr>
            <th scope="col" className="text-muted">
              STT
            </th>
            <th scope="col" className="text-muted">
              TÊN SẢN PHẨM
            </th>
            <th scope="col" className="text-muted">
              DANH MỤC
            </th>
            <th scope="col" className="text-muted">
              GIÁ
            </th>
            <th scope="col" className="text-muted text-center">
              TRẠNG THÁI
            </th>
          </tr>
        </thead>
        <tbody className="small">
          {/* Bạn sẽ map dữ liệu hoặc chèn component <ProductRow /> vào đây */}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
