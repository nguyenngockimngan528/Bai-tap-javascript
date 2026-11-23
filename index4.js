// Bài 3.3: Ứng dụng Quản lý sản phẩm (Mảng & DOM)

const products = [
  "Sony Xperia",
  "Samsung Galaxy",
  "Nokia 6",
  "Xiaomi Redmi Note 4",
  "Apple iPhone 6S",
  "Xiaomi Mi 5s Plus",
  "Apple iPhone 8 Plus",
  "Fujitsu F-04E",
  "Oppo A71",
];

let editingIndex = -1;

function displayAll() {
  document.getElementById("count").textContent = products.length + " products";
  const tbody = document.getElementById("productList");
  tbody.innerHTML = products
    .map(function (name, idx) {
      return (
        "<tr>" +
        "<td>" + (idx + 1) + "</td>" +
        '<td onclick="selectForEdit(' + idx + ')" style="cursor:pointer">' + name + "</td>" +
        '<td><button onclick="selectForEdit(' + idx + ')">Edit</button></td>' +
        '<td><button onclick="deleteProduct(' + idx + ')">Delete</button></td>' +
        "</tr>"
      );
    })
    .join("");
}

function addProduct() {
  const input = document.getElementById("newProduct");
  const name = input.value.trim();
  if (!name) {
    document.getElementById("statusMsg").textContent = "Vui lòng nhập tên sản phẩm!";
    return;
  }
  products.push(name);
  input.value = "";
  document.getElementById("statusMsg").textContent = 'Đã thêm "' + name + '" vào danh sách.';
  displayAll();
}

function selectForEdit(index) {
  editingIndex = index;
  document.getElementById("editProductInput").value = products[index];
  document.getElementById("editBox").style.display = "block";
}

function updateProduct() {
  if (editingIndex < 0) return;
  const newName = document.getElementById("editProductInput").value.trim();
  if (!newName) return;
  products[editingIndex] = newName;
  editingIndex = -1;
  document.getElementById("editBox").style.display = "none";
  document.getElementById("statusMsg").textContent = 'Đã cập nhật tên sản phẩm thành "' + newName + '".';
  displayAll();
}

function deleteProduct(index) {
  const removed = products.splice(index, 1);
  document.getElementById("statusMsg").textContent = 'Đã xóa "' + removed[0] + '".';
  displayAll();
}

window.onload = displayAll;