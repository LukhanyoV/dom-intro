function playstation() {

    const calculateBill = (billType) => {

        let bills = billType.toLowerCase().replace(/\s/g, '').split(',');
        // for every bill in bills add their values to a new array
        // then add all the values in that array and store them in total variable
        let total = bills.map(bill => bill === "call" ? 2.75 : bill === "sms" ? 0.75 : 0).reduce((sum, c) => sum + c,0);
        let roundedTotal = total.toFixed(2);    
        return roundedTotal
    }


    const textBill = (x) => {
        if(x.toLowerCase().trim() === "sms") smsTotal += 0.75;
        if(x.toLowerCase().trim() === "call") callTotal += 2.75;
    }

    return {
        calculateBill,
        textBill
    }
}

