function getInput() {

    let loanBalance = document.getElementById('balance').value;
    let loanTerm = document.getElementById('term').value;
    let loanRate = document.getElementById('rate').value;


    loanBalance = parseInt(loanBalance);
    loanTerm = parseInt(loanTerm);
    loanRate = parseInt(loanRate);

    



// Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )
// Remaining Balance before the very first month equals the amount of the loan.
// Interest Payment = Previous Remaining Balance * rate/1200
// Principal Payment = Total Monthly Payment - Interest Payment
// At end each month, Remaining Balance = Previous Remaining Balance - principal payments
let monthlyPayments = (loanBalance) * (loanRate/1200) / (1 - (1 + loanRate/1200 * -loanTerm))
let remainingBalance = loanBalance;
let interestPayment = remainingBalance * loanRate / 1200;
let principalPayment = monthlyPayments - interestPayment;
remainingBalance =  remainingBalance - principalPayment;



//     The output should include the following:
// 1. The month (1 corresponding to the 1st
// month of payment, through the total
// number of months)
// 2. The payment amount
// 3. The principal paid this month
// 4. The interest paid this month
// 5. The total interest paid to date
// 6. The remaining loan balance at the end of
// the month



}
