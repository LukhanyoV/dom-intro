describe("Testing the Settings bill factory function", () => {

    // setting and checking values
    describe("setting the values", () => {
        it("should be able to set the call cost", () => {
            let billy = BillSettings();
            billy.setCallCost(1.5);
            assert.strictEqual(1.5, billy.getCallCost());
        });
    
        it("should be able to set the sms cost", () => {
            let billy = BillSettings();
            billy.setSmsCost(0.5);
            assert.strictEqual(0.5, billy.getSmsCost());
        });
    
        it("should be able to set the warning level", () => {
            let billy = BillSettings();
            billy.setWarningLevel(10);
            assert.strictEqual(10, billy.getWarningLevel());
        });
    
        it("should be able to set the critical level", () => {
            let billy = BillSettings();
            billy.setCriticalLevel(20);
            assert.strictEqual(20, billy.getCriticalLevel());
        });
    });


    // making calls and sms's
    describe("making calls, sms's and then get their respective totals", () => {
        
        it("should be able to make two calls at 1.50 each", () => {
            let billy = BillSettings();
            billy.setCallCost(1.50);
            billy.setCriticalLevel(10);

            billy.makeCall();
            billy.makeCall();
            assert.strictEqual(3.00, billy.getCallCostTotal());
        });

        it("should be able to make five sms's at 1.00 each", () => {
            let billy = BillSettings();
            billy.setSmsCost(1.00);
            billy.setCriticalLevel(10);
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            assert.strictEqual(5.00, billy.getSmsCostTotal());
        });

        it("should be able to make one call at 1.5 each and two sms's at 1.00 each", () => {
            let billy = BillSettings();
            billy.setCallCost(1.50);
            billy.setSmsCost(1.00);
            billy.setCriticalLevel(10);

            billy.makeCall();
            billy.makeSms();
            billy.makeSms();

            assert.strictEqual(3.50, billy.getTotalCost());
        });
    });

    describe("testing the warning and the critical levels class name", () => {

        it("should return \"warning\" if the total cost is greater than the warning level", () => {
            let billy = BillSettings();
            billy.setCallCost(2.50);
            billy.setSmsCost(1.00);
            billy.setWarningLevel(10);
            billy.setCriticalLevel(20);

            billy.makeCall();
            billy.makeCall();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();

            assert.strictEqual(10.00, billy.getTotalCost());
            assert.strictEqual('warning', billy.classTotal());
        });

        it("should return \"critical\" if the total cost is greater than the critical level", () => {
            let billy = BillSettings();
            billy.setCallCost(2.50);
            billy.setSmsCost(1.00);
            billy.setWarningLevel(10);
            billy.setCriticalLevel(20);

            billy.makeCall();
            billy.makeCall();
            billy.makeCall();
            billy.makeCall();
            billy.makeCall();
            billy.makeCall();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();

            assert.strictEqual(20.00, billy.getTotalCost());
            assert.strictEqual('critical', billy.classTotal());
        });

        it("the total cost cannot be greater than the critical level", () => {
            let billy = BillSettings();
            billy.setCallCost(2.50);
            billy.setSmsCost(1.00);
            billy.setWarningLevel(10);
            billy.setCriticalLevel(20);

            billy.makeCall();
            billy.makeCall();
            billy.makeCall();
            billy.makeCall();
            billy.makeCall();
            billy.makeCall();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();
            billy.makeSms();

            assert.strictEqual(20.00, billy.getTotalCost());
            assert.strictEqual('critical', billy.classTotal());
        });
    });
});