//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal");

//get a reference to the billString
const billString = document.querySelector(".billString");


//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
const calculateBtnClicked = () => {
    // make sure to remove all the spaces before I split by comma
    let bills = billString.value.toLowerCase().replace(/\s/g, '').split(',');
    // for every bill in bills add their values to a new array
    // then add all the values in that array and store them in total variable
    let total = bills.map(bill => bill === "call" ? 2.75 : bill === "sms" ? 0.75 : 0).reduce((sum, c) => sum + c,0);
    let roundedTotal = total.toFixed(2);
    billTotal.innerText = roundedTotal;
    // decide the color on submit
    billMargin(roundedTotal);
};

//link the function to a click event on the calculate button
calculateBtn.addEventListener("click", () => calculateBtnClicked());

// change the color based on the value of the bill
const billMargin = bill => {
    bill >= 30 && billTotal.classList.add("danger"); 
    bill >= 20 && billTotal.classList.add("warning");
    bill < 20 && billTotal.classList.remove("warning");
    bill < 20 && billTotal.classList.remove("danger");
};