interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

type StudentList = Array<Student>;

const student1 = {
	firstName: 'Gokudera',
	lastName: 'ElPsyCongroo',
	age: 13,
	location: 'Shibuya'
};

const student2 = {
	firstName: 'Tom',
	lastName: 'Felton',
	age: 43,
	location: 'Otherworld'
};

const studentList: StudentList = [student1, student2]

const table = document.createElement('table');
table.innerHTML = `\
<thead>
	<tr>
		<th colspan="2">List of students</th>
	</tr>
	<tr>
		<th>First name</th>
		<th>Location</th>
	</tr>
</thead>
<tbody class="studentList">
</tbody>\
`
const body = document.querySelector('body');
body.appendChild(table);

const studentsTableArea = document.querySelector('.studentList')

for (const student of studentList) {
	const studentRow = `\
	<td>${student.firstName}</td>
	<td>${student.location}</td>\
`
	const studentRowElem = document.createElement('tr');
	studentRowElem.innerHTML = studentRow;

	studentsTableArea.appendChild(studentRowElem)
}

const style = document.createElement('style');
style.innerHTML = `
	table {
		border-collapse: collapse;
		border: 1px black solid;
	}

	td, tbody {
		border: 1px black solid;
		padding: 5px;
		text-align: center;
	}
`
document.head.appendChild(style)
