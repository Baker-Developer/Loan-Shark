function getInput() {

    // get the values from the user
    let loanBalance = document.getElementById('balance').value;
    let loanTerm = document.getElementById('term').value;
    let loanRate = document.getElementById('rate').value;


    // parse into integers
    loanBalance = parseInt(loanBalance);
    // loanTerm = parseInt(loanTerm);
    // loanRate = parseInt(loanRate);

    // call calculateValues
    numbers = calculateValues(loanBalance, loanTerm, loanRate);
    // call displayValues
    displayValues(loanBalance, numbers, loanTerm);

    // check if values are integers
    // if (Number.isInteger(loanBalance) && Number.isInteger(loanTerm) && Number.isInteger(loanRate)) {

    // } else {
    //     alert('Enter A Integer');
    // }

}

function calculateValues(loanBalance, loanTerm, loanRate) {

    let numbers = [];

    //  let previousRemainingBalance = loanBalance;

    let totalMonthlyPayment = CalcMonthlyPayment(loanBalance, loanRate, loanTerm);

    let balance = loanBalance;
    let totalInterest = 0.0;
    let monthlyInterest = 0.0;
    let monthlyPrincipal = 0.0;
    let monthlyRate = CalcMonthlyRate(loanRate);
    let newMonthlyRate = 0.0;

    for (let i = 1; i <= loanTerm; i++) {
        monthlyInterest = CalcMonthlyInterest(loanBalance, monthlyRate);
        newMonthlyRate = CalcNewMonthlyInterest(balance, monthlyRate);
        totalInterest += newMonthlyRate;
        monthlyPrincipal = totalMonthlyPayment - newMonthlyRate;
        balance -= monthlyPrincipal;

        // Loop until the end of the loan term DOES NOT CHANGE
        numbers.push(i); // First On The List 
        // Loop until the end of the loan term the totalMonthlyPayment DOES NOT CHANGE
        numbers.push((totalMonthlyPayment).toPrecision(5)); // second on the list 


        numbers.push((monthlyPrincipal).toPrecision(5)); // third on the list

        numbers.push((newMonthlyRate).toPrecision(5)) // fouth on the list
        numbers.push((totalInterest).toPrecision(5)) // fifth on the list
        numbers.push((balance).toFixed(7)) // sixth on the list
        

    }



    return numbers;
}

function CalcMonthlyPayment(loanBalance, loanRate, loanTerm) {

    //  monthlyRate = CalcMonthlyRate(loanRate);
    let totalMonthlyPayment = (loanBalance) * (loanRate / 1200) / (1 - (1 + loanRate / 1200) ** ((-loanTerm)));

    return totalMonthlyPayment;
}

function CalcMonthlyRate(loanRate) {
    return loanRate / 1200;
}

function CalcMonthlyInterest(loanBalance, monthlyRate) {
    // calculate the current remaining balance for the BEFORE calculations of months 
    // let previousRemainingBalance = loanBalance;
    let interestPayment = monthlyRate * loanBalance;
    return interestPayment;
}

function CalcNewMonthlyInterest(balance, monthlyRate) {
    // calculate the current remaining balance for the BEFORE calculations of months 
    // let previousRemainingBalance = loanBalance;
    let interestPayment = monthlyRate * balance;
    return interestPayment;
}

function displayValues(loanBalance, numbers, loanTerm) {


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
        document.getElementById("TotalPrincipal").innerHTML = loanBalance; // displays the total principal
        document.getElementById("TotalInterest").innerHTML = numbers[i + 4]; // displays the total interest
     //   document.getElementById("TotalCost").innerHTML = numbers[i + 5]; // displays the total cost
        document.getElementById("TotalPayments").innerHTML = loanTerm; // displays the total payments
    }

}