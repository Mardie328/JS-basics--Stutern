"use strict";

// Write a function that multiples two numbers. Call that function to multiply any two numbers of your choice and log the answer in your console
function multiplyNumbers(a, b) {
  return a * b;
}

console.log(multiplyNumbers(2, 3));

// Create variables for your first name, last name, Stutern track, skills, favourite color, year of your country’s independence. Use these variables to form a sentence and log the sentence in the console.
const firstName = "Mardiyyah";
const lastName = "Taofeek";
const stuternTrack = "Frontend development";
const skills = "HTML, CSS and JavaScript";
const favouriteColor = "blue";
const countryIndependence = 1960;

console.log(
  `My name is ${lastName} ${firstName}. I'm currently learning ${stuternTrack} in the Stutern Graduate Assistant program.
My skills are ${skills} and my fovorite color is ${favouriteColor}. My country's(Nigeria) independence year is ${countryIndependence}`
);
