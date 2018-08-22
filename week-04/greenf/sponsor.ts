'use strict'

import { Person } from "./before-inheritance";

export class Sponsor extends Person {

  private company: string;
  private hiredStudents: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }
  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.gender + ' who represents ' + this.company + ' and hired ' + this.hiredStudents + ' students so far.');
  }
  getGoal() {
    console.log('Hire brilliant junior software developers.');
  }
  hire() {
    this.hiredStudents += 1;
  }
}