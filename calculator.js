window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
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

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmountInitial = document.getElementById('loan-amount');
  const yearsAmountInitial = document.getElementById('loan-years');
  const rateAmountInitial = document.getElementById('loan-rate');
  const defaultValues = {amount: 20000, years: 10, rate: 5.5};
  loanAmountInitial.value = defaultValues.amount;
  yearsAmountInitial.value = defaultValues.years;
  rateAmountInitial.value = defaultValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate /100) / 12;
  let n = Math.floor(values.years *12);
  return ((values.amount*monthlyRate)/(1-(1+monthlyRate)**(-n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPaymentValue = document.getElementById('monthly-payment');
  monthlyPaymentValue.textContent = `$${monthly}`;
}
