"use strict";
/* 3. Name Cases: Store a person’s name in a variable, and
then print that person’s name in lowercase, uppercase, and titlecase.*/
const personName = "sOhail aHmed";
console.log(`Name in lowercase : ${personName.toLowerCase()}`);
console.log(`Name in uppercase : ${personName.toUpperCase()}`);
let step1 = personName.split(' '); // to convert in Array
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step3 = step2.join(' ');
console.log(`Name in titlecase : ${step3}`);
