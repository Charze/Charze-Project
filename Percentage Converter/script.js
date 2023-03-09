"use strict";

let totalVideo, tutorsName, num, deno, balance;

function numPercentage(num) {
  let addValue = `input your tutor's name`;
  let addNum1 = `input only numbers`;
  let addNum2 = `input only numbers`;
  tutorsName = prompt("What is your tutor's name", addValue);
  deno = prompt("What's the total number of the tutorial", addNum1);
  num = prompt("How many tutorials have you covered?", addNum2);
  balance = deno - num;
  totalVideo = deno - balance;

  const numPercentage = (100 * num) / deno;
  return numPercentage;
}
const numPercent = numPercentage();
const resultInPercentage = (`You have studied ${numPercent.toFixed(2)}%
(${totalVideo} videos) of ${tutorsName}'s tutorials.
You have ${(100 - numPercent).toFixed(2)}% (${balance} videos) left.`);

document.querySelector('.paragraph').textContent = resultInPercentage;
