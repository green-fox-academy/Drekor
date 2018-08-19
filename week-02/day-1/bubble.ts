'use strict'

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
//  Example:

console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

function bubble(listOfNumbers: number[]): number[] {
  let temp: number = 0;
  for (let i = 0; i < listOfNumbers.length - 1; i++) {
    for (let j = i + 1; j < listOfNumbers.length; j++) {
      if (listOfNumbers[i] > listOfNumbers[j]) {
        temp = listOfNumbers[i];
        listOfNumbers[i] = listOfNumbers[j];
        listOfNumbers[j] = temp;
      }
    }
  }
  return listOfNumbers;
}

function advancedBubble(listOfNumbers: number[], trueOrFalse: boolean): number[] {
  let tempo = bubble(listOfNumbers);
  if (trueOrFalse == true) {
    return tempo.reverse();
  } else {
    return tempo;
  }
}