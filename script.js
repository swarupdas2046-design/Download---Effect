let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let inner = document.querySelector(".inner");
let p = document.querySelector("p");

let grow = 0;

btn.addEventListener("click", function () {

    btn.style.pointerEvents = "none"

    let num = 50 + Math.floor(Math.random() * 50)

    p.innerHTML = `This file dowloaded in ${num / 10} seconds`

    let lock = setInterval(() => {
        grow++
        inner.style.width = grow + "%"
        h1.innerHTML = grow + "%"

    }, num);

    setTimeout(() => {
        clearInterval(lock)
        btn.style.opacity = 0.5
        btn.innerHTML = "Downloaded"
    }, num * 100);


})
