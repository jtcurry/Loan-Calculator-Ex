
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 1000,
    years: 15,
    rate: 6,
  };
  expect(calculateMonthlyPayment(values)).toEqual('8.44');
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 15202,
    years: 9,
    rate: 3.25,
  };
  expect(calculateMonthlyPayment(values)).toEqual('162.54');
});

