// Task 1
interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[propName: string]: any
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

// Task 2
interface Directors extends Teacher {
	numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

// Task 3
interface printTeacherFunction {
	(firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName[0]}. ${lastName}`
}

console.log(printTeacher("John", "Doe"))
// should print J. Doe

//Task 4
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface
}

interface StudentClassInterface {
  workOnHomework(): string,
  displayName(): string
}


const StudentClass: StudentClassConstructor = class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;
  // if firstName: number, Typescript will throw a warning thanks to the typed
  // class expression

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working'
  }

  displayName() {
    return this.firstName;
  }
}

// Should print Harry
const s = new StudentClass('Harry', 'Potter')
console.log(s.displayName())
