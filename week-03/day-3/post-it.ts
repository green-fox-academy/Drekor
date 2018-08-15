'use strict'
export { }

class PostIt {
  backGroundColor: string;
  text: string;
  textColor: string;

  constructor(backGroundColor: string, text: string, textColor: string) {
    this.backGroundColor = backGroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let Idea1: PostIt = new PostIt('orange', 'Idea1', 'blue');
let Awesome: PostIt = new PostIt('pink', 'Awesome', 'black');
let SuperB: PostIt = new PostIt('yellow', 'Superb', 'green');

console.log(Idea1);
console.log(Awesome);
console.log(SuperB);