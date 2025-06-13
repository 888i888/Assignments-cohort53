/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const logo = document.querySelector('img[alt="Google"]');
  if (logo) {
    logo.src =
      'https://upload.wikimedia.org/wikipedia/commons/8/8d/HackYourFuture_Logo.png';
    logo.srcset = '';
    logo.style.height = '92px';
    logo.style.objectFit = 'contain';
  }
}

hijackGoogleLogo();
