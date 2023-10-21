
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



