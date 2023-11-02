window.addEventListener("scroll", showCup);
const oCup = document.querySelector('.character');

function showCup() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop >= 1300 && oTop <= 5550) {
        oCup.style.display = "block";
    } else {
        oCup.style.display = "none";
    }

    oCup.onclick = function() {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });
    }
}