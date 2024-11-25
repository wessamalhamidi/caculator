const display = document.querySelector('.display')

function clearDisplay(){
    display.value = '';
}
const num = 0.
function appendDisplay(num){
    display.value += num;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = 'Error';
    }   
}