// Get the input of the user
function getInput() {
    let LoanAmount = document.getElementById('balance').value;
    let NumberOfPayments = document.getElementById('term').value;
    let IntrestRate = document.getElementById('rate').value;

    // Parse into integers
    if (Number.parseInt(LoanAmount) && Number.parseInt(NumberOfPayments) && Number.parseInt(IntrestRate)) {
        // call calculateValues method
        let calcValues = calculateValues();
        // call displayValues method and write the values to the user
        display = displayValues(calcValues);
    } else {
        // alert the user to input a number
        alert('Enter A Number');
    }

}

// Calculate the numbers
function calculateValues(LoanAmount, NumberOfPayments, IntrestRate) {
    /**
         * 
         * TotalMonthlyPayment = (LoanAmount) * (IntrestRate/1200) / (1 – (1 + IntrestRate/1200)(-NumberOfPayments) )
            RemainingBalance = LoanAmount.
            InterestPayment = LoanAmount * IntrestRate/1200
            PrincipalPayment = TotalMonthlyPayment - InterestPayment
            At end each month, LoanAmount = LoanAmount - PrincipalPayment
        * 
     */
    let length = [];

    for (let i = 1; i <= length.pop; i++) {
        console.log(i);
    }



}


// Display the values
function displayValues() {

}