'use strict';
export{}
const students: object[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


function studentsCandies(studs :any) {
    
    let sumCandies = 0;

    studs.forEach (element => {

        sumCandies += element.candies;
        }
    )
    console.log(sumCandies);
}
studentsCandies(students);



function studentsAge(studs :any) {

    let sumOfAge = 0;

    studs.forEach (element => {

        if(element.candies < 5){

            sumOfAge += element.age;
        }
    });
    console.log(sumOfAge);
}
studentsAge(students);


    