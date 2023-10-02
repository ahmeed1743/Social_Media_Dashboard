let btn = document.querySelector(".btn");
let boxes = document.querySelectorAll(".box");
let bxs = document.querySelectorAll(".bx");
let numbers = document.querySelectorAll(".number")
btn.addEventListener("click" , ()=> {
    document.body.classList.toggle("dark");
    boxes.forEach( box => {
        box.classList.toggle("dark");
    })

    bxs.forEach( bx => {
        bx.classList.toggle("dark");
    })
    numbers.forEach( number => {
        number.classList.toggle("dark");
    })
})