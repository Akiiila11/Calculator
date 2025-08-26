const result = document.getElementById("result")
const btns = document.querySelectorAll(".up")
const clear = document.getElementById("clear")
const backspace = document.getElementById("backspace")
const equal = document.getElementById("equal")

btns.forEach (function(button){
    button.addEventListener("click",function(){
        result.value += result.textContent
    })
})