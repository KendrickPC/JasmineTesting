describe("helpers.js functions testing:", function() {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });
  it('should properly calculate tipAmt on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);
    billAmtInput.value = 40;
    tipAmtInput.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(30);
  })

  it('should properly calculate billAmt on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('billAmt')).toEqual(100)
    billAmtInput.value = 40;
    tipAmtInput.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal('billAmt')).toBe(140)
  })

  it('should properly calculate tipPercent on calculateTipPercent() for one individual receipt', function() {
    expect(calculateTipPercent(100, 20)).toBe(20)
    expect(calculateTipPercent(40, 10)).toBe(25)
    
  })



  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
})