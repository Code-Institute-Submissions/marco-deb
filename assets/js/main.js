
 
//  I got this code from  Code instutute’s basic Javascript Setting Properties - Part 2
 function lightTheme() {
    el = document.getElementById("mainDiv");
    el.classList.remove("dark");
    el.classList.add("light");
}

function darkTheme() {
    el = document.getElementById("mainDiv");
    el.classList.remove("light");
    el.classList.add("dark");
}

function bodySection() {
    el = document.getElementById("body-section")
    el.classList.add("remove-body-section")
}
