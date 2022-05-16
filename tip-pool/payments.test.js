describe("Input Payment Info Tests", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  it('should populate payment table body appropriately', function() {
    submitPaymentInfo();
    const paymentData = document.querySelectorAll('#paymentTable tbody tr td')
    expect(paymentData[0].innerHTML).toBe('$100')
    expect(paymentData[1].innerHTML).toBe('$20')
    expect(paymentData[2].innerHTML).toBe('20%')
  })

  it('should populate the Shift Summary table body appropriately', function() {
    submitPaymentInfo();
    const summaryData = document.querySelectorAll('#summaryTable tbody tr td');
    expect(summaryData[0].innerHTML).toBe('$100');
    expect(summaryData[1].innerHTML).toBe('$20');
    expect(summaryData[2].innerHTML).toBe('20%');
  }) 

  it('should aggregate multiple payment info properly in Shift Summary table and Payment Table', function() {
    submitPaymentInfo();
    billAmtInput.value = 200;
    tipAmtInput.value = 35;
    submitPaymentInfo();
    const summaryData = document.querySelectorAll('#summaryTable tbody tr td');
    expect(summaryData[0].innerHTML).toBe('$300');
    expect(summaryData[1].innerHTML).toBe('$55');
    expect(summaryData[2].innerHTML).toBe('19%');

    const paymentData = document.querySelectorAll('#paymentTable tbody tr td')
    console.log(paymentData)
    expect(paymentData[3].innerHTML).toBe('$200');
    expect(paymentData[4].innerHTML).toBe('$35');
    expect(paymentData[5].innerHTML).toBe('18%');
  })
  
  it('should handle empty inputs for both bill and tip amounts', function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    submitPaymentInfo();
    // console.log(allPayments)
    expect(Object.keys(allPayments).length).toBe(0);
  })

  // Tear Down:
  afterEach(function() {
    paymentId = 0;
    paymentTbody.innerHTML = '';
    summaryTds.innerHTML = '';
    allPayments = {};
    billAmtInput.value = '';
    tipAmtInput.value = '';
  }) 
})