const counterValue = document.getElementById('counter');

function decreament(){
   let value = parseInt(counterValue.innerText);
   value = value-1;
   counterValue.innerText = value; 
}

function increament(){
    let value = parseInt(counterValue.innerText);
    value = value+1;
    counterValue.innerText = value; 
}