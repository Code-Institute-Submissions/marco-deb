// Function for downloading meditation
function sendMail(contactForm) {
      emailjs.send('gmail', 'rosie', {
          'from_name': contactForm.name.value, 
          'from_email': contactForm.emailaddress.value,
          
      })
      .then(
          function(response){
              console.log('success', response);
          },
          function(error) { 
              console.log('failed', error);
          }); 
          
          return false;  // To block from loading a new page
          window.location.href = "download-confirmation.html";
          
  }
  
  
  // Function for sending mail
  //---------------------------------------------
  
  function send(contactForm) {
      emailjs.send('gmail', 'Marco-Deb', {
          'from_name': contactForm.fullname.value, 
          'from_email': contactForm.emailaddress.value,
          'message': contactForm.message.value
      })
      .then(
          function(response){
              console.log('success', response);
          },
          function(error) { 
              console.log('failed', error);
          });
  
          return false;  // To block from loading a new page
          window.location.href = "mail-confirmation.html";
  }