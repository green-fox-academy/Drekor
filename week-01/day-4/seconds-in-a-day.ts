'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let fullDay = 86400;  
let currentDayTime = currentSeconds + (currentMinutes * 60) + (currentHours * 60 * 60);

console.log(fullDay - currentDayTime);