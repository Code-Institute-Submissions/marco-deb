function sendMail(contactForm) {
    emailjs.send('gmail', 'rosie', {
        'from_name': contactForm.name.value, 
        'from_email': contactForm.emailaddress.value,
        // 'project_request': contactForm.projectsummary.value
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

function downloadMessage() {
    alert("It's done. A download link has been sent to your email")
}

//---------------------------------------------

function send(contactForm) {
    emailjs.send('gmail', 'Marco-Deb', {
        'from_name': contactForm.name.value, 
        'from_email': contactForm.emailaddress.value,
        // 'project_request': contactForm.projectsummary.value
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