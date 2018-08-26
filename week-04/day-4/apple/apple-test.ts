import { test } from 'tape'
import { Apple } from './apple'

'use strict'

// declare function require(path: string): any;
// const test = require('tape');


test(`should be an apple`, (t) => {
  let apple = new Apple();
  t.equal(apple.getApple(), 'apple');
  t.end();
});