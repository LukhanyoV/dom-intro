// get a reference to the sms or call radio buttons
const radioBtnForSettings = document.querySelectorAll(".billItemTypeWithSettings");

// get refences to all the settings fields
const smsCostSetting = document.querySelector(".smsCostSetting");
const callCostSetting = document.querySelector(".callCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

// references to the totals
const callTotalSetttings = document.querySelector(".callTotalSettings");
const smsTotalSetttings = document.querySelector(".smsTotalSettings");
const totalSetttings = document.querySelector(".totalSettings");

//get a reference to the add button
const radioAddBtnSetting = document.querySelector(".radioAddBtnSetting");

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
let [stCallCost, stSmsCost, stWarningLevel, stCriticalLevel] = [0, 0, 0, 0];

// create a variables that will keep track of all three totals.
let [stCallTotal, stSmsTotal, stTotal] = [0, 0, 0];

// reset the fields
callTotalSetttings.innerHTML = stCallTotal.toFixed(2);
smsTotalSetttings.innerHTML = stSmsTotal.toFixed(2);
totalSetttings.innerHTML  = stTotal.toFixed(2);

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", () => {
    // check for less than 0
    let oops = false;
    [callCostSetting.value, smsCostSetting.value, warningLevelSetting.value, criticalLevelSetting.value].forEach(item => {
        if((item-"") < 0) oops = true;
    });

    if(criticalLevelSetting.value <= warningLevelSetting.value){
        alert("Notice: Your Critical Level is less than Warning Level");
    };

    if(oops) alert("Please make sure your inputs in settings are greater than 0 ");
    if(oops === false){
        stCallCost = (callCostSetting.value !== "") ? callCostSetting.value-"" : stCallCost;
        stSmsCost = (smsCostSetting.value !== "") ? smsCostSetting.value-"" : stSmsCost;
        stWarningLevel = (warningLevelSetting.value !== "") ? warningLevelSetting.value-"" : stWarningLevel;
        stCriticalLevel = (criticalLevelSetting.value !== "") ? criticalLevelSetting.value-"" : stCriticalLevel;
        // change the colours
        billMargin3(stTotal);
    }
});

//add an event listener for when the add button is pressed
radioAddBtnSetting.addEventListener("click", () => {
    radioBtnForSettings.forEach(btn => {
        if(btn.checked){
            console.log(btn);
            // calculations
            if(btn.value.toLowerCase().trim() === "call" && stTotal < stCriticalLevel) stCallTotal += stCallCost;
            if(btn.value.toLowerCase().trim() === "sms" && stTotal < stCriticalLevel) stSmsTotal += stSmsCost;
            stTotal = stCallTotal + stSmsTotal;

            // display to user
            callTotalSetttings.innerHTML = stCallTotal.toFixed(2);
            smsTotalSetttings.innerHTML = stSmsTotal.toFixed(2);
            totalSetttings.innerHTML  = stTotal.toFixed(2);

            // change the colours
            billMargin3(stTotal);
        }
    })
});

const billMargin3 = bill => {
    bill > stCriticalLevel && totalSetttings.classList.add("danger"); 
    bill > stWarningLevel && totalSetttings.classList.add("warning");
    bill <= stWarningLevel && totalSetttings.classList.remove("warning");
    bill <= stWarningLevel && totalSetttings.classList.remove("danger");
    bill <= stCriticalLevel && totalSetttings.classList.remove("danger");
};

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
