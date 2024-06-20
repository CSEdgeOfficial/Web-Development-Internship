const display = document.getElementById("display")

function appendToDisplay(input){
    display.value = display.value+input;
    console.log(typeof(display.value))

}

function del(){
    display.value = display.value.slice(0,display.value.length-1)
    console.log(typeof(display.value))

}
 async function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
        setTimeout(() =>{display.value=''},"1000")
    }
    if(display.value == 'undefined'){
        setTimeout(() =>{display.value=''},"1000")
    }

 }

 function clearDisplay(){
    display.value = ''
 }

