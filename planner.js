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
let financialStatus; 
let housingPercent;
let foodPercent;
let transportPercent;
let utilitiesPercent;
let entertainmentPercent;
let otherPercent;
let overallFinancialScore;
let financialStatusColor; 

document.getElementById("button").onclick = function(event) {

    let savingsFinancialScore = 0; 
    let housingFinancialScore = 0;
    let balanceFinancialScore = 30;
    event.preventDefault();

    monthlyIncome = Number(document.getElementById("monthly-income").value);
    house = Number(document.getElementById("housing").value);
    food = Number(document.getElementById("food").value);
    transportation = Number(document.getElementById("transportation").value);
    utilities = Number(document.getElementById("utilities").value);
    entertainment = Number(document.getElementById("entertainment").value);
    other = Number(document.getElementById("other").value);
    totalExpenses = house + food + transportation + utilities + entertainment + other;
    remaining = monthlyIncome - totalExpenses;

    savingsPercent = (remaining / monthlyIncome * 100).toFixed(1); 
    housingPercent = (house/totalExpenses * 100).toFixed(1);
    foodPercent = (food/totalExpenses * 100).toFixed(1);
    transportPercent = (transportation/totalExpenses * 100).toFixed(1);
    utilitiesPercent = (utilities/totalExpenses * 100).toFixed(1);
    entertainmentPercent = (entertainment/totalExpenses * 100).toFixed(1);
    otherPercent = (other/totalExpenses * 100).toFixed(1);


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
    balanceFinancialScore = Math.max(0, 30 - (balanceFinancialScore/2)); 
    overallFinancialScore = balanceFinancialScore + housingFinancialScore + savingsFinancialScore
    let progressPercent = Math.min(overallFinancialScore,100);

    if (overallFinancialScore >= 90) {
        financialStatus = "Excellent";
        financialStatusColor = "darkgreen";
    } 
    else if (overallFinancialScore >= 75) {
        financialStatus = "Good";
        financialStatusColor = "limegreen";
    }
    else if (overallFinancialScore > 60) {
        financialStatus = "Fair"
        financialStatusColor = "yellow";
    }
    else {
        financialStatus = "Needs Work"
        financialStatusColor = "red";
    }


    document.getElementById("displayed").innerHTML = `
    
    <div class = "budget-summary">
        <h2>Budget Summary:</h2>
        <p>Income: $${monthlyIncome}</p>
        <p>Expenses: $${totalExpenses}</p>
        <p>Remaining: $${remaining}</p>
        <p>Savings Rate: ${savingsPercent}% <span data-tooltip='Savings Rate = (Remaining Income / Monthly income) * 100'>ⓘ</span></p> <br>
    </div>
    <div class = "spending_breakdown">
        <h2>Spending Breakdown:</h2>
        <p>Housing: ${housingPercent}% </p>
        <p>Food: ${foodPercent}% </p>
        <p>Transportation: ${transportPercent}% </p>
        <p>Utilities: ${utilitiesPercent}% </p>
        <p>Entertainment: ${entertainmentPercent}% </p>
        <p>Other: ${otherPercent}% </p>
    </div> <br>
    <div>
        <h2>Financial Health:</h2>
        <div class = "progress-container">
            <div class = "progress-fill">
            </div>
        </div>
        
        <p>Overall Score: ${overallFinancialScore.toFixed(1)}/100 </p>
        <p>Savings Financial Score: ${savingsFinancialScore}/40<span data-tooltip='Evaluates savings habits. Based on savings rate = (Remaining Income ÷ Monthly Income) * 100.'>ⓘ</span></p>
        <p>Housing Financial Score: ${housingFinancialScore}/30 <span data-tooltip='Measures housing affordability. Housing costs under 30% of income receive 30 points. Higher housing percentages receive fewer points because financial experts often recommend keeping housing below 30% of income.'>ⓘ</span></p>
        <p>Balance Financial Score: ${balanceFinancialScore}/30 <span data-tooltip='Based on the 50/30/20 budgeting rule. Points are deducted when needs, wants, or savings differ from their target percentages. A budget closer to 50/30/20 receives a higher score.'>ⓘ</span></p>
        <p>Financial Status: ${financialStatus} </p>
    </div>


    `
    ;
    const bar = document.querySelector(".progress-fill");
    bar.style.width = "0%";
    bar.style.backgroundColor = financialStatusColor;
    setTimeout(() => {
        bar.style.width = progressPercent + "%";
    }, 50);

}
