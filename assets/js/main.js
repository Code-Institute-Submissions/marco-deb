//  I got this code from  Code instutute’s basic Javascript Setting Properties - Part 2
function lightTheme() {
    el = document.getElementById("mainDiv");
    el.classList.remove("dark");
    el.classList.add("light");
    localStorage.setItem("userHasDarkTheme", "false");
}

function darkTheme() {
    el = document.getElementById("mainDiv");
    el.classList.remove("light");
    el.classList.add("dark");
    localStorage.setItem("userHasDarkTheme", "true");
}

//----------------------------------------------------

// I learned this code from https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_style
function small() {
    document.getElementById('font-size').style.fontSize='20px';
    localStorage.setItem("userFontSize", "small");

}

function medium() {
    document.getElementById('font-size').style.fontSize='26px';
    localStorage.setItem("userFontSize", "medium");
}

function large() {
    document.getElementById('font-size').style.fontSize='35px';
    localStorage.setItem("userFontSize", "large");
}

//----------------------------------------------------

$().ready(function(){
    if ( localStorage.getItem("userHasDarkTheme") == "true") darkTheme();

    if ( localStorage.getItem("userFontSize") == "medium" ) medium();
    else if ( localStorage.getItem("userFontSize") == "large" ) large();
    //else small(); // default, also when no setting has been selected, doesn't have to run because it is default
});

//----------------------------------------------------

function slideToggleElement(elementToShow, elementToHide){
    // if ($('.elementToShow').is(':visible'))

    $(elementToHide).slideUp('slow');
    $(elementToShow).slideDown('slow');
    
}



