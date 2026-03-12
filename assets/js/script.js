var students = [];
var editIndex = -1;

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var gridInput = document.getElementById("grid");
var courseInput = document.getElementById("course");
var tbody = document.getElementById("tbody");
var total = document.getElementById("total");
var emptyMsg = document.getElementById("emptyMsg");

document.getElementById("addBtn").addEventListener("click", function(e) {
    e.preventDefault();
    
    var name = nameInput.value;
    var email = emailInput.value;
    var grid = gridInput.value;
    var course = courseInput.value;
    
    if (name == "" || email == "" || grid == "" || course == "") {
        alert("Please fill all fields!");
        return;
    }
    
    if (editIndex == -1) {
        students.push({
            name: name,
            email: email,
            grid: grid,
            course: course
        });
    } else {
        students[editIndex].name = name;
        students[editIndex].email = email;
        students[editIndex].grid = grid;
        students[editIndex].course = course;
        editIndex = -1;
    }
    
    showStudents();
    nameInput.value = "";
    emailInput.value = "";
    gridInput.value = "";
    courseInput.value = "";
});

function showStudents() {
    tbody.innerHTML = "";
    
    for (var i = 0; i < students.length; i++) {
        var row = "<tr>";
        row += "<td>" + (i + 1) + "</td>";
        row += "<td>" + students[i].name + "</td>";
        row += "<td>" + students[i].email + "</td>";
        row += "<td>" + students[i].grid + "</td>";
        row += "<td>" + students[i].course + "</td>";
        row += "<td><button onclick='editStudent(" + i + ")'>Edit</button></td>";
        row += "<td><button onclick='deleteStudent(" + i + ")' style='background-color: #f44336;'>Delete</button></td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }
    
    total.textContent = students.length;
    
    if (students.length > 0) {
        emptyMsg.style.display = "none";
    } else {
        emptyMsg.style.display = "block";
    }
}

function editStudent(i) {
    nameInput.value = students[i].name;
    emailInput.value = students[i].email;
    gridInput.value = students[i].grid;
    courseInput.value = students[i].course;
    editIndex = i;
}

function deleteStudent(i) {
    if (confirm("Delete this student?")) {
        students.splice(i, 1);
        showStudents();
    }
}