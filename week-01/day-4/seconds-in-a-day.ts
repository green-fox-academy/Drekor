'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let fullDay = 86400;  
let currentDayTime = 42 + (34 * 60) + (14 * 60 * 60);

console.log(fullDay - currentDayTime);

