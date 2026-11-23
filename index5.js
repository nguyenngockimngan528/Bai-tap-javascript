// Bài 3.4: Ứng dụng Tính tiền bán hàng

function toggleRow(checkbox) {
  const row = checkbox.closest("tr");
  const qtyInput = row.querySelector(".qty");
  qtyInput.disabled = !checkbox.checked;
  qtyInput.value = checkbox.checked ? 1 : 0;
}

function tinhTien() {
  const rows = document.querySelectorAll("#salesTable tbody tr");
  let total = 0;
  let selectedCount = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cb = row.querySelector(".buy");
    if (!cb.checked) continue;

    selectedCount++;
    const stock = parseInt(row.querySelector(".stock").textContent, 10);
    const qty = Number(row.querySelector(".qty").value);
    const price = parseFloat(row.querySelector(".price").dataset.price);

    if (!Number.isInteger(qty) || qty < 1 || qty > stock) {
      document.getElementById("errorMsg").textContent =
        "Số lượng mua tại dòng " + (i + 1) + " phải là số nguyên từ 1 đến " + stock + ".";
      return;
    }
    total += qty * price;
  }

  if (selectedCount === 0) {
    document.getElementById("errorMsg").textContent = "Vui lòng chọn ít nhất 1 sản phẩm.";
    return;
  }

  document.getElementById("errorMsg").textContent = "";
  if (document.getElementById("vat").checked) {
    total *= 1.1;
  }
  document.getElementById("tongCong").textContent = total.toFixed(2) + " $";
}

function nhapLai() {
  const checkboxes = document.querySelectorAll("#salesTable .buy");
  checkboxes.forEach(function (cb) {
    cb.checked = false;
    toggleRow(cb);
  });
  document.getElementById("vat").checked = false;
  document.getElementById("errorMsg").textContent = "";
  document.getElementById("tongCong").textContent = "0 $";
}

function inHoaDon() {
  window.print();
}