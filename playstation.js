const BillSettings = _ => {
    
    // initialize me
    let callCost = 0;
    let smsCost = 0;
    let warningLevel = 0;
    let criticalLevel = 0;

    // intialize totals
    let callCostTotal = 0;
    let smsCostTotal = 0;
    let totalCost = 0;

    // set me
    const setCallCost = n => callCost = n;
    const setSmsCost = n => smsCost = n;
    const setWarningLevel = n => warningLevel = n;
    const setCriticalLevel = n => criticalLevel = n;

    // get me
    const getCallCost = _ => callCost;
    const getSmsCost = _ => smsCost;
    const getWarningLevel = _ => warningLevel;
    const getCriticalLevel = _ => criticalLevel;

    // use me
    const makeCall = _ => getCriticalLevel() > getTotalCost() ? callCostTotal += getCallCost() : callCostTotal += 0;
    const makeSms = _ => getCriticalLevel() > getTotalCost() ? smsCostTotal += getSmsCost() : smsCostTotal += 0;

    // show me
    const getCallCostTotal = _ => callCostTotal;
    const getSmsCostTotal = _ => smsCostTotal;
    const getTotalCost = _ => totalCost = getSmsCostTotal() + getCallCostTotal();

    // color me
    const classTotal = _ => getTotalCost() >= getCriticalLevel() ? "critical" : getTotalCost() >= getWarningLevel() && "warning";

    return {
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,

        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel,

        makeCall,
        makeSms,

        getCallCostTotal,
        getSmsCostTotal,
        getTotalCost,

        classTotal
    }
}