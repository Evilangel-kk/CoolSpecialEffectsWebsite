for (let i = 1; i <= 60; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.scroll-box').appendChild(box);
}

let randomColorBlock = document.querySelectorAll(".box");

function addColor() {
    randomColorBlock.forEach(e => {
        let color = randomColor()
        e.style.background = color;
        e.style.boxShadow = "0px 0px 20px 1px " + color;
    })
}

function addText() {
    randomColorBlock.forEach(e => {
        let text = document.createElement("span");
        text.innerHTML = "hdty hfda sgy ygd yagsd tuyf ausfdt tuy fadtu usfgh fdsoiyg dgscig sygf syg dcyyi isgdyi yfdop pwufeh aud asgtqw ewftuyg ewufy agtfc eyg fuygw uydfu efuy gsa uyg"
        text.classList.add('text');
        e.appendChild(text);
    })
}

function randomColor() {
    let chars = "1234567890abcdef";
    let colorLength = 6;
    let color = "#";
    for (let i = 0; i < colorLength; i++) {
        let randomColors = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColors, randomColors + 1);
    }
    return color;
}

addColor();
addText();

let boxes = document.querySelectorAll(".box");

function scrollTrigger() {
    boxes.forEach(boxxx => {
        if (boxxx.offsetTop < window.scrollY - 1000) {
            boxxx.classList.add("active")
        } else {
            boxxx.classList.remove("active")
        }
    })
}
window.addEventListener("scroll", scrollTrigger);