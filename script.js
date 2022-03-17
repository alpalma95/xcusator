"use strict";

const excuse = document.getElementById("excuse");
const button = document.getElementById("refresh");

const who = [`My dog`, `My grandma`, `A random bird`, `A lovely pedestrian`];
const action = [`ate`, `peed on`, `set fire to`, `kissed`];
const what = [`a tree`, `my homework`, `a brocoli`, `a candy`];
const when = [
  `at my own funeral`,
  `in the park`,
  `at my parents' in law`,
  `nearby the police station`,
];

const generateNumber = () => Math.trunc(Math.random() * 4);

const generateExcuse = () =>
  (excuse.textContent = `${who[generateNumber()]} ${action[generateNumber()]} ${
    what[generateNumber()]
  } ${when[generateNumber()]}.`);

button.addEventListener("click", generateExcuse);
onload = generateExcuse();
