let count=0;

let Value = document.getElementById("value");
const Buttons = document.querySelectorAll(".btn");


Buttons.forEach(function(btn){
btn.addEventListener('click', function(){
    const item = btn.classList

    if(item.contains("btn-decrease")){
        count--;
    }else if(item.contains("btn-increase")){
        count++;
    }else {
        count = 0;
    }

    value.textContent = count;
    console.log(count)

    if(count<0){
        value.style.color = "red";
    }
    else if(count>0){
        value.style.color = "green"
    }else {
        value.style.color = "grey"
    }
});
});

