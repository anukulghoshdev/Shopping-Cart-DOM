function getTextElementValueById(elementId){
    //calculate total
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const elementTotalElement = document.getElementById(elementId);
    elementTotalElement.innerText = value;
}



function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    
    /* function e
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;  */
    


    // calculate sub-total and set to html element 
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate Tax and set to html element
    const taxTotalAmountString =  (currentSubTotal*0.1).toFixed(2);
    const taxTotalAmount = parseFloat(taxTotalAmountString);
    setTextElementValueById('tax-amount', taxTotalAmount);


    // calculate Final Total and set to html element
    const finalTotalAmount = currentSubTotal + taxTotalAmount;
    setTextElementValueById('final-total', finalTotalAmount);


}