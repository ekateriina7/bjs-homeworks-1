"use strict"
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    console.log(date);

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
    if (typeof percent == "string") {
      return parseInt(percent); 
    } else if (typeof percent !== "number") {
      return `Параметр percent содержит неправильное значение ${percent}`; 
    };
    if (typeof contribution == "string") {
      return parseInt(contribution); 
    } else if (typeof contribution !== "number") {
      return `Параметр contribution содержит неправильное значение ${contribution}`; 
    };
    if (typeof amount == "string") {
      return parseInt(amount); 
    } else if (typeof amount !== "number") {
      return `Параметр amount содержит неправильное значение ${amount}`; 
    };
    if (typeof date !== "string") {
      return `Параметр percent содержит неправильное значение ${percent}`; 
    };
    let date1 = new Date();
    let date2 = new Date(date);
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();
    let month1 = date1.getMonth();
    let month2 = date2.getMonth();
    if(month1===0){ 
      month1++;
      month2++;
  }
  let numberOfMonths = (year2 - year1) * 12 + (month2 - month1) - 1;
  console.log(numberOfMonths)
  let restAmount = amount - contribution;
  let monthPay = amount * ((percent/100 / 12) + (percent/100 / 12) / (((1 + (percent/100 / 12)) ^ numberOfMonths) - 1));;
  let totalAmount = numberOfMonths * monthPay + restAmount; 
  console.log(totalAmount.toFixed(2))
   return totalAmount.toFixed(2);
    
  }


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
  
  
    if (name === null || name === " " || name=== undefined) {
        name = "Аноним"
    }
    let greeting = "Привет, мир! Меня зовут " + name;  
    console.log(greeting);
    return greeting;
   
}
getGreeting('katya')
getGreeting(null)
getGreeting()
getGreeting(undefined)