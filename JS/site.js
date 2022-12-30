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
        alert('Enter A Integer');
    }

}

function calculateValues(loanBalance, loanTerm, loanRate) {

    let numbers = [];

    // calculate the current remaining balance for the BEFORE calculations of months 
    let previousRemainingBalance = loanBalance;

    // calculate the totalMonthlyPayment for the amount of months
    let totalMonthlyPayment = (loanBalance) * (loanRate / 1200) / (1 - (1 + loanRate / 1200) ** ((-loanTerm)))

    // calculate the interestPayment for the amount of months
    let interestPayment = previousRemainingBalance * loanRate / 1200;

    // calculate the principalPayment for the amount of months
    let principalPayment = totalMonthlyPayment - interestPayment;

    // calculate the totalInterest for the amount of months 
    let totalInterest = (loanBalance + interestPayment) - loanBalance;

    // calculate the current remaining balance for the amount of months 
    let currentRemainingBalance = previousRemainingBalance - principalPayment; // Last On The List


    let TotalMonthlyPaymentPerMonth = totalMonthlyPayment; // Second On The List
    let PaymentPricipalPerMonth = principalPayment; // Third on the list
    let MainInterestPerMonth = interestPayment; // Fourth On The List
    let ToalInterestPerMonth = totalInterest; // Fifth  On The List
    let CurrentBalancePerMonth =  currentRemainingBalance; // Last On The List



    // let AllTimeTotalInterest = ToalInterestPerMonth * loanTerm;
    // let AllTimeCost = AllTimeTotalInterest + loanBalance; 

    // write a for loop that calculates the payment based on the current balance


    for (let i = 1; i <= loanTerm; i++) {

        numbers.push(i); // First On The List

        // Loop until the end of the loan term the totalMonthlyPayment
        numbers.push((TotalMonthlyPaymentPerMonth).toPrecision(5)); // second on the list

        numbers.push((PaymentPricipalPerMonth).toPrecision(5)); // third on the list


        numbers.push((MainInterestPerMonth).toPrecision(5)) // fouth on the list

        numbers.push((ToalInterestPerMonth).toPrecision(5)) // fifth on the list

        numbers.push((CurrentBalancePerMonth).toPrecision(7)) // sixth on the list
        
    }

    



    return numbers;
}


function displayValues(numbers) {


    // get the table body
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("numbersTemplate");


    // clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < numbers.length; i += 6) {
        let tableRow = document.importNode(templateRow.content, true);


        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = numbers[i];
        rowCols[1].textContent = numbers[i + 1];
        rowCols[2].textContent = numbers[i + 2];
        rowCols[3].textContent = numbers[i + 3];
        rowCols[4].textContent = numbers[i + 4];
        rowCols[5].textContent = numbers[i + 5];

        tableBody.appendChild(tableRow);

        document.getElementById("MonthlyPayments").innerHTML = numbers[i + 1]; // displays the monthly payment
        document.getElementById("TotalPrincipal").innerHTML = numbers[i + 2]; // displays the total principal
        document.getElementById("TotalInterest").innerHTML = numbers[i + 3]; // displays the total interest
        document.getElementById("TotalCost").innerHTML = numbers[i + 5]; // displays the total cost
    }

}