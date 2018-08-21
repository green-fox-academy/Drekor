'use strict'

import { Person } from "./before-inheritance";

export class Mentor extends Person {

  private level: string;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.gender + this.level + ' mentor');
  }
  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
}