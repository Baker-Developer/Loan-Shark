/**
 * 
 * Write a mortgage loan calculator application that takes in three parameters:
1. The amount of money loaned in dollars (balance)
2. The time over which the loan will be repaid, in months (term)
3. The percentage rate at which interest will accrue on the loan (rate)


The output should include the following:
1. The month (1 corresponding to the 1st
month of payment, through the total
number of months)
2. The payment amount
3. The principal paid this month
4. The interest paid this month
5. The total interest paid to date
6. The remaining loan balance at the end of
the month

Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )
Remaining Balance before the very first month equals the amount of the loan.
Interest Payment = Previous Remaining Balance * rate/1200
Principal Payment = Total Monthly Payment - Interest Payment
At end each month, Remaining Balance = Previous Remaining Balance - principal payments

 *
 */


// write var  called amountOfMoney for the amount loaned in dollars (balance on input)
// write var  called timeOfLoan for the loan will be repaid (months on input)
// write var  called interestRate that will accure on the loan (intertest rate on input)

// a function is needed to take the outputs of loanAmount amountOfMonths interestRate
function getValues() {
    document.getElementById('loanAmount');
    document.getElementById('amountOfMonths');
    document.getElementById('interestRate');
}

// a function is needed 