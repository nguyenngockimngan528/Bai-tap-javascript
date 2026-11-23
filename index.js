// Bài 3.1.2: Kiểm tra năm nhuận và số ngày trong tháng

function kiemTraNamNhuan(year) {
  let isLeapYear = false;
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    isLeapYear = true;
  }
  return isLeapYear;
}

function tinhSoNgayTrongThang(month, isLeapYear) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return isLeapYear ? 29 : 28;
    default:
      return null;
  }
}

function kiemTra() {
  const year = parseInt(document.getElementById("year").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const ketQua = document.getElementById("ketQua");

  if (isNaN(year) || year <= 0) {
    ketQua.textContent = "Vui lòng nhập năm hợp lệ.";
    return;
  }

  const isLeap = kiemTraNamNhuan(year);
  const days = tinhSoNgayTrongThang(month, isLeap);

  const leapMsg = isLeap ? year + ": năm nhuận" : year + ": năm không nhuận";
  const dayMsg = days
    ? " — Tháng " + month + " có " + days + " ngày."
    : " — Tháng không hợp lệ (1–12).";

  ketQua.textContent = leapMsg + dayMsg;
}