// Bài 3.2.1: Truy xuất DOM — Hiệu chỉnh theo sự kiện chuột

function onDivMouseOver(el) {
  el.textContent = "Mouse Event";
}

function onDivMouseOut(el) {
  el.textContent = "Hover Me";
}

function onImgMouseOver(img) {
  img.style.transform = "scale(1.1)";
}

function onImgMouseOut(img) {
  img.style.transform = "scale(1)";
}

function showDateTime() {
  const now = new Date();
  document.getElementById("dateOutput").textContent = now.toLocaleString("vi-VN");
}

function toUpperCaseText() {
  const input = document.getElementById("textInput");
  input.value = input.value.toUpperCase();
}