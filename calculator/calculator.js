window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log("you clicked the calculate button")
      update();
      
      const loanAmount = document.querySelector('#loan-amount').value;
      const loanYears = document.querySelector('#loan-years').value;
      const yearlyRate = document.querySelector('#loan-rate').value;

      const str = `Loan Amount: ${loanAmount} Loan Years: ${loanYears} Yearly Rate: ${yearlyRate}`;
      

    });
  }

});




function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}



function setupIntialValues() {
  // Get the inputs from the DOM.
  const amountUI = document.getElementById('loan-amount');
  const yearsUI = document.getElementById('loan-years');
  const loanRateUI = document.getElementById('loan-rate');
  // Put some default values in the inputs
  const defaultValues = {
    amount: 10000,
    years: 10,
    rate: 4.5,
  }
  // Call a function to calculate the current monthly payment
  // NO! DO NOT CALL THE calculateMonthlyPayment function! DO NOT! USELESS!
  /*
  The directions would have been clearer if they
  said "load some default values to the UI/screen"
  */
  // amountUI.value = defaultValues.amount;
  // yearsUI.value = defaultValues.years;
  // loanRateUI.value = defaultValues.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
