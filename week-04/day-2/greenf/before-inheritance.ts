'use strict'

export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    if (gender === 'male' || gender === 'female') {
      this.gender = gender;
    } else {
      throw new Error('')
    }
  }

  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.gender);
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

// class Student {
//   name: string;
//   age: number;
//   gender: string;
//   previousOrganization: string;
//   skippedDays: number;

//   constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life') {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.previousOrganization = previousOrganization;
//     this.skippedDays = 0;
//   }
//   introduce() {
//     console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.gender + ' from ' + this.previousOrganization + ' who skipped ' + this.skippedDays + 'days from the course already.');
//   }
//   getGoal() {
//     console.log('Be a junior software developer');
//   }
//   skipDays(numberOfDays) {
//     this.skippedDays += numberOfDays;
//   }
// }

// class Mentor {
//   name: string;
//   age: number;
//   gender: string;
//   level: string;

//   constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.level = level;
//   }
//   introduce() {
//     console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.gender + this.level + ' mentor');
//   }
//   getGoal() {
//     console.log('Educate brilliant junior software developers.');
//   }
// }

// class Sponsor {
//   name: string;
//   age: number;
//   gender: string;
//   company: string;
//   hiredStudents: number;

//   constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.company = company;
//     this.hiredStudents = 0;
//   }
//   introduce() {
//     console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.gender + ' who represents ' + this.company + ' and hired ' + this.hiredStudents + ' students so far.');
//   }
//   getGoal() {
//     console.log('Hire brilliant junior software developers.');
//   }
//   hire() {
//     this.hiredStudents += 1;
//   }
// }

// let people = [];
// let mark = new Person('Mark', 46, 'male');
// people.push(mark);
// let jane = new Person();
// people.push(jane);
// let john = new Student('John Doe', 20, 'male', 'BME');
// people.push(john);
// let student = new Student();
// people.push(student);
// let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
// people.push(gandhi);
// let mentor = new Mentor();
// people.push(mentor);
// let sponsor = new Sponsor();
// let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');

// student.skipDays(3);

// for (let i = 0; i < 6; i++) {
//   elon.hire();
// }

// for (let i = 0; i < 4; i++) {
//   sponsor.hire();
// }

// for (let person of people) {
//   person.introduce();
//   person.getGoal();
// }