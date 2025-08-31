const decreaseBtn = document.getElementById("decreaseBtn");
const resertBtm = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}

resertBtm.onclick = function(){
    count = 0;
    countLable.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}