/**
 * Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )
    Remaining Balance before the very first month equals the amount of the loan.
    Interest Payment = Previous Remaining Balance * rate/1200
    Principal Payment = Total Monthly Payment - Interest Payment
    At end each month, Remaining Balance = Previous Remaining Balance - principal payments
 */

/**
/*
    *  The output should include the following:
    1. The month (1 corresponding to the 1st
    month of payment, through the total
    number of months)
    2. The payment amount
    3. The principal paid this month
    4. The interest paid this month
    5. The total interest paid to date
    6. The remaining loan balance at the end of
    the month 
 */


// write a function that takes in the id of balance , months and rate
function getInput() {
    // Get the input of Loan Amount
    let loanAmount = document.getElementById('balance').value;
    // Get the input of Payments
    let term_InMonths = document.getElementById('term').value;
    // Get the input of Rate
    let interestRate = document.getElementById('rate').value;

    loanAmount = parseInt(loanAmount);
    term_InMonths = parseInt(term_InMonths);
    interestRate = parseInt(interestRate);

    // parse user inputs into integers
    if (Number.isInteger(loanAmount) && Number.isInteger(term_InMonths) && Number.isInteger(interestRate)) {


    } else {
        alert('enter a valid number')
    }

    for (let i = 1; i <= term_InMonths; i++) {
        // the next out is the total monthly
        let test = loanAmount * interestRate / 1200 / 1 - 1 + interestRate / 1200 - term_InMonths
        console.log(test + 'dollars');
    }

}

function output() {


}