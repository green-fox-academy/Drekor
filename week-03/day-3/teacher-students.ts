'use sticts'

class Student {
  learn() {
   
  }
  question(teacher: Teacher) {
    teacher.answer();
  }
}


class Teacher {
  answer() {
   
  }
  teach(student: Student) {
    student.learn();
  }
}

let stud = new Student ();
let asd = new Teacher ();

stud.question(asd);