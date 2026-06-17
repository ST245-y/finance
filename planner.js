let monthlyIncome;
let house;
let food;
let transportation;
let utilities;
let entertainment;
let other;
let totalExpenses;
let needsPercentage; 
let wantsPercentage; 
let savingsPercent;

document.getElementById("button").onclick = function() {

    let savingsFinancialScore = 0; 
    let housingFinancialScore = 0;
    let balanceFinancialScore = 30;
    event.preventDefault();
    monthlyIncome = Number(document.getElementById("monthly-income").value);
    house = Number(document.getElementById("housing").value);
    food = Number(document.getElementById("food").value;
    transportation = Number(document.getElementById("transportation").value));
    utilities = Number(document.getElementById("utilities").value);
    entertainment = Number(document.getElementById("entertainment").value);
    other = Number(document.getElementById("other").value;
    totalExpenses = house + food + transportation + utilities + entertainment + other);
    remaining = monthlyIncome - totalExpenses;
    savingsPercent = remaining / monthlyIncome * 100; 

    if (savingsPercent >= 20){
        savingsFinancialScore += 40;
    }
    else if (savingsPercent >= 15){
        savingsFinancialScore += 30;
    }
    else if (savingsPercent >= 10) {
        savingsFinancialScore += 20;
    }
    else if (savingsPercent >= 5) {
        savingsFinancialScore += 10;
    }
    else {
        savingsFinancialScore += 0; 
    }

    if (house <= 0.30 * monthlyIncome) {
        housingFinancialScore += 30;
    }
    else if (house <= 0.35 * monthlyIncome) {
        housingFinancialScore += 20;
    }
    else if (house <= 0.40 * monthlyIncome) {
        housingFinancialScore += 10;
    }
    else {
        housingFinancialScore += 0;
    }

    needsPercentage = (house + food + transportation + utilities) / monthlyIncome * 100;
    wantsPercentage = (entertainment + other) / monthlyIncome * 100;

    balanceFinancialScore = Math.abs(needsPercentage - 50) + Math.abs(wantsPercentage - 30) + Math.abs(savingsPercent - 20);
    balanceFinancialScore = 30 - (balanceFinancialScore/2)


}