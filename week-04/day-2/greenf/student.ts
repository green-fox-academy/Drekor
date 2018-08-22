'use strict'

import { Person } from "./before-inheritance";

export class Student extends Person {

  private previousOrganization: string;
  private skippedDays: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
  getGoal() {
    console.log('Be a junior software developer');
  }
  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.gender + ' from ' + this.previousOrganization + ' who skipped ' + this.skippedDays + 'days from the course already.');
  }
  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}


