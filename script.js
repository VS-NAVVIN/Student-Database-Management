class Student {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
}

class StudentDatabase {
    constructor() {
        this.students = [];
    }

    addStudent(id, name, grade) {
        const newStudent = new Student(id, name, grade);
        this.students.push(newStudent);
        this.displayStudents();
    }

    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.displayStudents();
    }

    displayStudents() {
        const studentList = document.getElementById("studentList");
        studentList.innerHTML = "";
        this.students.forEach(student => {
            const studentItem = document.createElement("li");
            studentItem.textContent = `ID: ${student.id}, Name: ${student.name}, Grade: ${student.grade}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            deleteBtn.onclick = () => this.deleteStudent(student.id);
            studentItem.appendChild(deleteBtn);
            studentList.appendChild(studentItem);
        });
    }
}

const studentDatabase = new StudentDatabase();

function addStudent() {
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const studentGrade = document.getElementById("studentGrade").value;

    if(studentId && studentName && studentGrade) {
        studentDatabase.addStudent(studentId, studentName, studentGrade);
        document.getElementById("studentId").value = "";
        document.getElementById("studentName").value = "";
        document.getElementById("studentGrade").value = "";
    } else {
        alert("Please fill in all fields");
    }
}
