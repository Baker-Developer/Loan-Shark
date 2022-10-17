function getInput() {

    // get the values from the user
    let loanBalance = document.getElementById('balance').value;
    let loanTerm = document.getElementById('term').value;
    let loanRate = document.getElementById('rate').value;


    // parse into integers
    loanBalance = parseInt(loanBalance);
    loanTerm = parseInt(loanTerm);
    loanRate = parseInt(loanRate);


    // check if values are integers
    if (Number.isInteger(loanBalance) && Number.isInteger(loanTerm) && Number.isInteger(loanRate)) {
        // call calculateValues
        numbers = calculateValues(loanBalance, loanTerm, loanRate);
        // call displayValues
        displayValues(numbers);
    } else {
        alert('Enter a integer');
    }
}

function calculateValues(loanBalance, loanTerm, loanRate) {

    let numbers = [];

    // loop from first month 1 to the user selected month
    for (let i = 1; i <= loanTerm; i++) {
        numbers.push(i);
    }

    // calculate the current remaining balance for the before calculations of months 
    let previousRemainingBalance = loanBalance;

    // calculate the totalMonthlyPayment for the amount of months
    let totalMonthlyPayment = (loanBalance) * (loanRate / 1200) / (1 - (1 + loanRate / 1200) ** ((-loanTerm)))
    console.log(Math.round(totalMonthlyPayment));
    // numbers.push(`total monthly payment ` + Math.round(totalMonthlyPayment));

    // calculate the interestPayment for the amount of months
    let interestPayment = previousRemainingBalance * loanRate / 1200;
    console.log(Math.round(interestPayment));
    // numbers.push(`Interest Payment ` + Math.round(interestPayment));

    // calculate the principalPayment for the amount of months
    let principalPayment = totalMonthlyPayment - interestPayment;
    console.log(Math.round(principalPayment));
    // numbers.push(`total Principal Payment ` + Math.round(principalPayment));

    // calculate the totalInterest for the amount of months 
    let totalInterest = (loanBalance + interestPayment) - loanBalance;
    console.log(Math.round(totalInterest));
    // numbers.push(`total Interest Payment ` + Math.round(principalPayment));

    // calculate the current remaining balance for the amount of months 
    let currentRemainingBalance = previousRemainingBalance - principalPayment;
    console.log(Math.round(currentRemainingBalance));
    // numbers.push(`total Current Balance ` + Math.round(principalPayment));

    return numbers;
}


function displayValues(calculatedNumbers) {

    let templateRow = "";

    for (let i = 0; i <= calculatedNumbers.length; i++) {
        let number = numbers[i];
        templateRow += `<tr><td>${number}</td></tr>`;
    }




    document.getElementById('results').innerHTML = templateRow;

}