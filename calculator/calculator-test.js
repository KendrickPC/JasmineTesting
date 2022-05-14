describe('Checking for valid inputs', function() {
  it('should throw an error if Loan Amount input is not a valid number', function() {
    expect(() => checkValidInputs('hi', 10, 4.5)).toThrow(new Error('Please enter a valid number for loan amount input'));
  });
  it('should throw an error if Term in Years input is not a valid number', function() {
    expect(() => checkValidInputs(10000, 'pow', 4.5)).toThrow(new Error('Please enter a valid number for loan years input'));
  });
  it('should throw an error if Yearly Rate input is not a valid number', function() {
    expect(() => checkValidInputs(10000, 10, 'pow')).toThrow(new Error('Please enter a valid number for yearly rate input'));
  });
  it('should throw an error if input is not 0 or greater', function() {
    expect(() => checkValidInputs(-10000, 10, 4.5)).toThrow(new Error('Please enter a value greater than zero'));
  })
  it('should throw an error if input is not 0 or greater', function() {
    expect(() => checkValidInputs(0, 10, 4.5)).toThrow(new Error('Please enter a value greater than zero'));
  })
})
  
describe('Checking if monthly payments are calculated correctly', function() {
  it("should return a result of 103.64 when inputs are 10000, 10, 4.5 respectively", function() {
    expect(calculateMonthlyPayment(10000, 10, 4.5)).toEqual(103.64)
  });
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment(10000, 10, 4.5).toString()).toMatch(/^\d+\.\d\d$/)
  });
})
