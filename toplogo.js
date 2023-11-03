window.addEventListener("scroll", expandLogo);
const oLogo = document.querySelector('#logo');

function expandLogo() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop >= 90) {
        oLogo.style.width = "300px";
        oLogo.style.left = "calc(50% - 150px)";
    } else {
        oLogo.style.width = "250px";
        oLogo.style.left = "calc(50% - 125px)";
    }
};