
function fourDigitPinSelector(){
    const pin=generatePin();
    const pinString=pin+""
    if(pinString.length ==4){
      return pin;
    }
  else{
   return fourDigitPinSelector()
  }
}

function generatePin(){
   const randomPin= Math.round(Math.random()*10000);
   return randomPin;
}

document.getElementById("generate-pin-btn").addEventListener("click", function (){
  const getPin=  fourDigitPinSelector()
  const generatePinDisplayField= document.getElementById("generate-pin-display-field")
  generatePinDisplayField.value=getPin;
})






document.getElementById("calculator-body").addEventListener("click", function(event){
    const typedNumberDisplayField= document.getElementById("typed-number-display-field")
    const NewDisplayFieldNumber=event.target.innerText;
    const previousDisplayFieldNumber= typedNumberDisplayField.value;
    
    if(isNaN(NewDisplayFieldNumber)){
        if(NewDisplayFieldNumber=="C"){
            typedNumberDisplayField.value=""
        }
        else if(NewDisplayFieldNumber=="<"){
            const digits = previousDisplayFieldNumber.split("")
            digits.pop()
           const reaminingDigits= digits.join("")
           typedNumberDisplayField.value=reaminingDigits;

        }
    }
    
    else{
        typedNumberDisplayField.value= previousDisplayFieldNumber+NewDisplayFieldNumber

    }
    


    




})




document.getElementById("btn-submit").addEventListener("click", function(){

    const pinFailureMassage= document.getElementById("pin-failure")
    const pinSuccesMassage= document.getElementById("pin-success")


    const generatePinDisplayField= document.getElementById("generate-pin-display-field")
    const currentPin = generatePinDisplayField.value;

    const typedNumberDisplayField= document.getElementById("typed-number-display-field")
     const typedNumber= typedNumberDisplayField.value;
    
     if (typedNumber=== currentPin){
        pinSuccesMassage.style.display="block"

     }
     else{
        pinFailureMassage.style.display="block"

     }
})