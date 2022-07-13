// write a function to get the inputs of the user Loan Amount, Payments, Rate
function getValues() {

    let balance = document.getElementById('loanAmount').value;
    let term = document.getElementById('amountOfPayments').value;
    let rate = document.getElementById('interestRate').value;

    balance = parseInt(balance);
    term = parseInt(term);
    rate = parseInt(rate);

    if (Number.isInteger(balance) && Number.isInteger(term) && Number.isInteger(rate)) {
        // call calculateValues
        let numbers = calculateValues(balance, term, rate);
        //call displayValues
        displayValues(numbers);
    } else {
        alert("Enter Intergers Only");
    }

}

// write a function to calculate the values 
function calculateValues(balance, term, rate) {

    let returnArray = [];

    // write a for loop that loops from 1 to the amountOfPayments
    for (let i = 0; returnArray <= term; i++) {
        if (returnArray.push(i) == true) {
            balance * (rate / 1200) / 1(1 - (1 + rate / 1200)(-term))
        }
        returnArray.push(i);
    }

    // balance * (rate/1200) / 1 (1 - (1 + rate/1200)(-term))
    // calculate the payment amount in a for loop using this formula (loanAmount) * (interestRate/1200) / (1 - (1 + interestRate/1200)(-amountOfPayments))



    // the principal needs to be looped using the forumula above - interest payment 





    // the interest need to be looped the previous remaining balance * interestRate / 1200

    // the end of the month loanAmount = Previous Remaining Balance - principal payments note: refer to line 28 for more details

    // the remaining loan balance at the end of the month needs to be looped is equal to the amount of loanAmount

}


// write a function that outputs the numbers
function displayValues() {

    // output the month 
    // output the payment  

    // output the principal 

    //output the interest 
    //output the total interest 
    // output the balance


}



/**
 * This is a application that takes in three parameters 
 * The amount of money loaned in dollars (balance)
 * The time over which the loan will be repaid, in months (term)
 * The percentage rate at which interest will accrue on the loan (rate)
 * 
 * 
 */