// Dữ liệu hóa đơn quá hạn
const danhSachQuaHan = [
  {
    ma: "INV-002",
    khachHang: "Công ty TNHH B",
    soTien: 1500000,
    ngayQuaHan: 5
  },
  {
    ma: "INV-007",
    khachHang: "Công ty Cổ phần X",
    soTien: 8000000,
    ngayQuaHan: 12
  },
  {
    ma: "INV-012",
    khachHang: "Nguyễn Thị Mai",
    soTien: 500000,
    ngayQuaHan: 3
  }
];
function hienThiBangQuaHan() {
  const tbody = document.getElementById('danh-sach-qua-han');
  
  danhSachQuaHan.forEach(hoaDon => {
    const dongMoi = document.createElement('tr');
    dongMoi.innerHTML = `
      <td><strong>${hoaDon.ma}</strong></td>
      <td>${hoaDon.khachHang}</td>
      <td>${hoaDon.soTien.toLocaleString('vi-VN')} đ</td>
      <td>${hoaDon.ngayQuaHan} ngày</td>
      <td><button>Nhắc nợ</button></td>
    `;
    tbody.appendChild(dongMoi);
  });
}
function taoDuBao() {
  const ketQua = document.getElementById('ket-qua-du-bao');
  
  ketQua.innerHTML = `<p>⏳ AI đang phân tích dữ liệu...</p>`;
  
  setTimeout(() => {
    ketQua.innerHTML = `
      <div style="color: #166534; line-height: 1.8;">
        <p><strong>📊 Dự kiến thu trong 30 ngày tới:</strong> +35.000.000 đ</p>
        <p><strong>⚠️ Rủi ro:</strong> Công ty TNHH B (15trđ, quá hạn 5 ngày)</p>
        <p><strong>✅ Khuyến nghị:</strong> Ưu tiên liên hệ Công ty TNHH B ngay hôm nay.</p>
      </div>
    `;
  }, 1200);
}
document.addEventListener('DOMContentLoaded', function() {
  hienThiBangQuaHan();
  
  const nut = document.getElementById('nut-du-bao');
  nut.addEventListener('click', taoDuBao);
});