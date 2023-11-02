window.addEventListener("scroll", handle);
const gotop = document.querySelector(".gotop");

function handle() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop >= 200) {
        gotop.style.display = "block";
    } else {
        gotop.style.display = "none";
    }

    gotop.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
};