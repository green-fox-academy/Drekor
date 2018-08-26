import { test } from 'tape'
import { List } from './sum'

'use strict'

test(`Should be a Sum`, (t) => {
  let aList: number[] = [1,5];
  let testClass: List = new List();
  t.equal(testClass.sum(aList), 6);
  t.end();
});