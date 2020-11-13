
///////////////////////// OOP inheritance Material/////////////////
///////////////////////scroll down for the exercises//////////////
class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}

const s11 = new Student("Ronda", 2017)
console.log(s11.name) //prints "Ronda"

s11.addCourse("Algebra II")
console.log(s11.courses) //prints ["Algebra II"]

/*
class Teacher extends Person {
    constructor(name, year, salary){
        super(name, year)
        this.salary= salary
    }

    giveGrade(student, courseName, finalGrade){
        student.receiveGrade(courseName, finalGrade)
    }
}

/////spot check 1
const s11 = new Student("Ronda", 2017)
const t1 = new Teacher("Cassandra", 2002, 40000)

t1.giveGrade(s11, "Algebra II", 82)
const firstGrade = s11.grades[0]

console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
//above should print "Ronda received an 82 in Algebra II"
////////////

////////// Custom (inherited) Attributes

class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(null, startYear)
        this.salary = salary
        this.name = "Professor " + name
    }
}
const t1 = new Teacher("Cassandra", 2002, 40000)
console.log(t1.name)   //You will see "Professor Cassandra" 
*/

class Teacher extends Person{
    constructor(name, year, salary){
        super(name, year)
        this.salary= salary
        this.courses={}
    }
    giveGrade(student, courseName, finalGrade){
        student.receiveGrade(courseName, finalGrade)
    }
    addCourse(course) {
        if(this.courses[course]){  /// check if there is a key called ${course}, if there is no suck a one so it will return undefined and undefined is false  
            return this.courses[course]++
        }
        this.courses[course] = 1
    }
}


const t11 = new Teacher("Cassandra", 2002, 40000)
t11.addCourse("Algebra II")
t11.addCourse("Algebra II")
t11.addCourse("Trigonometry")
console.log(t11.courses) //should print {Algebra II: 2, Trigonometry: 1}


///////////////////////// OOP inheritance Exercises/////////////////
console.log("Start Exercise !!!!!!!!!!!!!!!!!!!!!!!")
class Principal extends Person{
    constructor(name, startYear){
        super(name, startYear)
        this.teachers=[]
        this.students=[]
    }

    hireTeacher(object){
        this.teachers.push(object)
        console.log(`${this.name} just hired ${object.name}`)
    }

    recruitStudent(student){
        this.students.push(student)
    }

    expelStudent(student){ // student is an object = {name, year, grades[]}
        for (let i in this.students){
            if(this.students[i].name === student.name){
                this.students.splice(i, 1)
            }
        }
    }

    transferStudent(student, principle){
        this.expelStudent(student)
        principle.students.push(student)
    }
}

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra" VVVVVVV
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron

