const decreasebtn = document.body.firstElementChild.nextElementSibling.children[0]
const resetbtn = document.body.firstElementChild.nextElementSibling.children[1]
const increasebtn = document.body.firstElementChild.nextElementSibling.children[2]
const zoro = document.body.firstElementChild.firstChild
let count = 0;



increasebtn.onclick = function(){
    count++;
    zoro.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    zoro.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    zoro.textContent = 0;
}