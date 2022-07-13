/**
 * This is a application that takes in three parameters 
 * The amount of money loaned in dollars (balance)
 * The time over which the loan will be repaid, in months (term)
 * The percentage rate at which interest will accrue on the loan (rate)
 * 
 * 
 */


// write a function to get the inputs of the user Loan Amount, Payments, Rate
function getValues() {

    let loanAmount = document.getElementById('loanAmount');
    let amountOfPayments = document.getElementById('amountOfPayments');
    let interestRate = document.getElementById('interestRate');



}

// write a function to calculate the values 
function calculateValues() {
    // write a for loop that loops from 1 to the amountOfPayments

    // output the payment amount in a for loop using this formula (loanAmount) * (interestRate/1200) / (1 - (1 + interestRate/1200)(-amountOfPayments))

    // the principal needs to be looped using the forumula above - interest payment 

    // the interest need to be looped the previous remaining balance * interestRate / 1200

    // the end of the month loanAmount = Previous Remaining Balance - principal payments note: refer to line 28 for more details

    // the remaining loan balance at the end of the month needs to be looped is equal to the amount of loanAmount


}


// write a function that outputs the numbers
function displayValues() {
    // let testnum = "1";
    // let test = "$125.00";
    // document.getElementById('message').innerHTML = `<tr><th scope="row">${testnum}</th>
    //  <td>${test}</td><td>${test}</td><td>${test}</td><td>${test}</td><td>${test}</td></tr>`;




}