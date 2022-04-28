const BillSettings = () => {
    
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
    const setCallCost = (cost) => callCost = cost;
    const setSmsCost = (cost) => smsCost = cost;
    const setWarningLevel = (level) => warningLevel = level;
    const setCriticalLevel = (level) => criticalLevel = level;

    // get me
    const getCallCost = () => callCost;
    const getSmsCost = () => smsCost;
    const getWarningLevel = () => warningLevel;
    const getCriticalLevel = () => criticalLevel;

    // use me
    const makeCall = () => getCriticalLevel() > getTotalCost() ? callCostTotal += getCallCost() : callCostTotal += 0;
    const makeSms = () => getCriticalLevel() > getTotalCost() ? smsCostTotal += getSmsCost() : smsCostTotal += 0;

    // show me
    const getCallCostTotal = () => callCostTotal;
    const getSmsCostTotal = () => smsCostTotal;
    const getTotalCost = () => totalCost = getSmsCostTotal() + getCallCostTotal();

    // color me
    const classTotal = () => getTotalCost() >= getCriticalLevel() ? "critical" : getTotalCost() >= getWarningLevel() && "warning";

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