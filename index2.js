// Bài 3.1.3: Đổi năm dương lịch sang năm âm lịch (Can + Chi)

function timCan(nam_duong_lich) {
  const du = ((nam_duong_lich % 10) + 10) % 10;
  let can = "";
  switch (du) {
    case 0: can = "Canh"; break;
    case 1: can = "Tân"; break;
    case 2: can = "Nhâm"; break;
    case 3: can = "Quý"; break;
    case 4: can = "Giáp"; break;
    case 5: can = "Ất"; break;
    case 6: can = "Bính"; break;
    case 7: can = "Đinh"; break;
    case 8: can = "Mậu"; break;
    case 9: can = "Kỷ"; break;
  }
  return can;
}

function timChi(nam_duong_lich) {
  const du = ((nam_duong_lich % 12) + 12) % 12;
  let chi = "";
  switch (du) {
    case 0: chi = "Thân"; break;
    case 1: chi = "Dậu"; break;
    case 2: chi = "Tuất"; break;
    case 3: chi = "Hợi"; break;
    case 4: chi = "Tý"; break;
    case 5: chi = "Sửu"; break;
    case 6: chi = "Dần"; break;
    case 7: chi = "Mẹo"; break;
    case 8: chi = "Thìn"; break;
    case 9: chi = "Tỵ"; break;
    case 10: chi = "Ngọ"; break;
    case 11: chi = "Mùi"; break;
  }
  return chi;
}

function doiAmLich() {
  const nam_duong_lich = parseInt(document.getElementById("namDuong").value, 10);
  const ketQua = document.getElementById("ketQua");

  if (isNaN(nam_duong_lich) || nam_duong_lich <= 0) {
    ketQua.textContent = "Vui lòng nhập năm dương lịch hợp lệ.";
    return;
  }

  const can = timCan(nam_duong_lich);
  const chi = timChi(nam_duong_lich);
  ketQua.textContent = "Năm " + nam_duong_lich + " là năm âm lịch: " + can + " " + chi;
}