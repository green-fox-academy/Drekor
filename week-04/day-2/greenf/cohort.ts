'use strict'
import { Person } from "./before-inheritance";
import { Student } from "./student";
import { Mentor } from "./mentor";


export class Cohort {

  private name: string;
  private students: Student[];
  private mentors: Mentor[];

  constructor(name: string = 'asd') {

    this.name = name;
    this.students = [];
    this.mentors = [];
  }
  addStudent(students: Student) {
    this.students.push(students);
  }
  addMentor(mentors: Mentor) {
    this.mentors.push(mentors);
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}