'use strict';
export { }

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThanFour(params: any[]) {

    let names = [];

    params.forEach(element => {
        if (element.candies > 4) {

            names.push(element.name);
        }
    })
    return names;
}
console.log(moreThanFour(students));

function averageCandies(params: any[]) {

    let candiesAv = 0;

    params.forEach(element => {
        candiesAv += element.candies;

    });
    
    return candiesAv/ students.length;
}
console.log(averageCandies(students));