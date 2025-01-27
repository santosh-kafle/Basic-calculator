// this tells javascript to search for display in the document
const display=document.getElementById("display");
// this is to add the input such as 2 + 2 its 3 input but it adds on it as we type. append means to add
function appendToDisplay(input){
    display.value += input;


}
// clears the display
function clearDisplay(){
    display.value = "";

}
// this is where the calculation happens with the help of eval. eval is a built in javascript function which converts even strings into number to operate on them. 
function calculate(){
    try{
    display.value = eval(display.value);
    }
    // this displays error if there appears one 
    catch(error){
        display.value ="Error";
    }
    

}