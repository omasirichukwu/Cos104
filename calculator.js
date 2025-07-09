const display = document.getElementById("display");

function appendToDisplay(input){
 display.innerHTML += input;
}

function clearDisplay(){
    display.innerHTML = "";
}

function calculate(){
    try{
        display.innerHTML = eval(display.innerHTML);
    }
    catch(error){
        display.value = "ERROR";
    }
}

function lemmeGo(){
    window.close()
}