let display=document.getElementById("display");
let currentInput="";
 function appendValue(value){
    currentInput+=value;
  display.textContent=currentInput;
 }
 function clearDisplay(){
    currentInput="";
    display.textContent="";
 }
 function calculate(){
   try{
    currentInput=currentInput.replace(/%/g,"/100");
    currentInput=(eval(currentInput)).toFixed(5).toString();
    display.textContent=currentInput;
   }
   catch{
    display.textContent="error";
    currentInput="";
   }
 }