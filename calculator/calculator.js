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

      checkValidInputs(loanAmount, loanYears, yearlyRate);

      const monthlyPayments = calculateMonthlyPayment(loanAmount, loanYears, yearlyRate);
      const resultingStr = `Your monthly payments are $${monthlyPayments} for a loan amount of $${loanAmount}, loan years of ${loanYears}, and yearly rate of ${yearlyRate}%`;
      document.querySelector('#monthly-payment').innerText = resultingStr;
    });
  }
});

function checkValidInputs(loanAmount, loanYears, yearlyRate) {
  if (typeof loanAmount !== 'number') {
    throw new Error("Please enter a valid number for loan amount input")
  }
  if (typeof loanYears !== 'number') {
    throw new Error("Please enter a valid number for loan years")
  }
  if (typeof yearlyRate !== 'number') {
    throw new Error("Please enter a valid number for yearly rate")
  }
}


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {
  const monthlyRate = (rate / 100) / 12
  const numerator = amount * monthlyRate;
  const n = Math.floor(years * 12);
  const denominator = (1 - Math.pow((1 + monthlyRate), -n))
  return (numerator / denominator).toFixed(2);
}



// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}


