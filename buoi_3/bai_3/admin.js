function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Function to add a new student to the table
function addStudent() {
    // Get input values
    var msv = document.getElementById("msv").value;
    var ten = document.getElementById("ten").value;
    var lop = document.getElementById("lop").value;
    var sdt = document.getElementById("sdt").value;
    var ngaysinh = document.getElementById("ngaysinh").value;
    var noisinh = document.getElementById("noisinh").value;
    var thanhtich = document.getElementById("thanhtich").value;

    // Add the new student to the table
    var table = document.getElementById("student-list");
    var newRow = table.insertRow(-1);
    var cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6),
        newRow.insertCell(7),
        newRow.insertCell(8)
    ];
    cells[0].innerHTML = table.rows.length - 1;
    cells[1].innerHTML = msv;
    cells[2].innerHTML = ten;
    cells[3].innerHTML = lop;
    cells[4].innerHTML = sdt;
    cells[5].innerHTML = ngaysinh;
    cells[6].innerHTML = noisinh;
    cells[7].innerHTML = thanhtich;
    cells[8].innerHTML = '<button onclick="editStudent(this)">Sửa</button> <button onclick="deleteStudent(this)">Xóa</button>';

    // Close the form
    closeForm();
}

// Function to edit a student's information
function editStudent(button) {
    var row = button.parentNode.parentNode;
    var cells = row.cells;

    // Populate the form with the current student's information
    document.getElementById("msv").value = cells[1].innerHTML;
    document.getElementById("ten").value = cells[2].innerHTML;
    document.getElementById("lop").value = cells[3].innerHTML;
    document.getElementById("sdt").value = cells[4].innerHTML;
    document.getElementById("ngaysinh").value = cells[5].innerHTML;
    document.getElementById("noisinh").value = cells[6].innerHTML;
    document.getElementById("thanhtich").value = cells[7].innerHTML;

    // Delete the current row from the table
    row.parentNode.removeChild(row);

    // Open the form for editing
    openForm();
}

// Function to delete a student
function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
