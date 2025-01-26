"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  
  if(d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  } else if (d === 0) {
    arr[0] = -b / (2*a);
  } 
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 1200;
  let bodyCredit =  amount - contribution;

  let payMonthly = bodyCredit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths)-1)));
  let payAll = payMonthly * countMonths;
  
  return Number(payAll.toFixed(2));
}