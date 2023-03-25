let btnopen = document.querySelector(".open");
let div = document.querySelector(".divshow");
let textContent = document.getElementById("textContent");

function showdiv() {
  div.style.display = "block";
}

function hidediv() {
  div.style.display = "none";
}

textContent.onclick = function (e) {
  e.stopPropagation();
};

document.onkeyup = function(e) {
    console.log(e.key)
    if (e.keyCode === 27) {
        hidediv()
    }
}

btnopen.addEventListener("click", showdiv);
div.addEventListener("click", hidediv);
