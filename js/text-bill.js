// get a reference to the textbox where the bill type is to be entered
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne");
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
let [total, callTotal, smsTotal] = [0, 0, 0];

// reset th default values 
callTotalOne.innerHTML = callTotal.toFixed(2);
smsTotalOne.innerHTML = smsTotal.toFixed(2);
totalOne.innerHTML = total.toFixed(2);


//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

addToBillBtn.addEventListener("click", () => {
    // increase the values
    if(billTypeText.value.toLowerCase().trim() === "sms") smsTotal += 0.75;
    if(billTypeText.value.toLowerCase().trim() === "call") callTotal += 2.75;
    total = callTotal + smsTotal;

    // display the values
    callTotalOne.innerHTML = callTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    totalOne.innerHTML = total.toFixed(2);
    
    // change the color
    textBillMargin(total);
});

// change the color based on the value of the bill
const textBillMargin = bill => {
    bill > 50 && totalOne.classList.add("danger"); 
    bill > 30 && totalOne.classList.add("warning");
    bill <= 30 && totalOne.classList.remove("warning");
    bill <= 30 && totalOne.classList.remove("danger");
};