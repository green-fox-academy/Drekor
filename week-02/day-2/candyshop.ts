'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
export = sweets;

function sweets(params: string[]): string[] {
  shopItems.splice(1,1,'Croissant');
  shopItems.splice(3,1,'Ice cream');
  return params
}
console.log(sweets(shopItems));