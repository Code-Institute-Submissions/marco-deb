
 
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

// I learned this code from https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_style

function small() {
    document.getElementById('font-size').style.fontSize='20px'
}

function medium() {
    document.getElementById('font-size').style.fontSize='26px'
}

function large() {
    document.getElementById('font-size').style.fontSize='35px'
}

//------------------------------------

function slideToggleElement(elementToShow, elementToHide) {
    $(elementToHide).slideUp();
    $(elementToShow).slideDown();
}
//------------------------------------

function sendMail(contactForm) {
    emailjs.send('gmail', 'rosie', {
        'from_name': contactForm.name.value, 
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log('success', response);
        },
        function(error) { 
            console.log('failed', error);
        }); 
        return false;  // To block from loading a new page
}