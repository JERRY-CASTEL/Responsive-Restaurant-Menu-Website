function myMenuFunciton(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }else{
        menuBtn.className = "nav-menu";
    }
}

// ADD SHADOW ON NAVIGATION

window.onscroll = () => {
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
};


/* TYPING EFFECT */

document.addEventListener('DOMContentLoaded', (event) => {
    var typingEffect = new Typed(".typedText", {
        strings: ["Software Developer", "Full stack developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });
});


const sr = ScrollReveal();

// Use sr.reveal instead of sr.revel
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 300 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

sr.reveal('.container-Project', {interval:200})


sr.reveal('.top-header',{})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)


//   <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
  
// SEND MAIL
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Use your actual service ID and template ID
  emailjs.send('service_ybkwtsa', 'template_2xlv88m', {
      user_name: name,
      user_email: email,
      message: message,
  })
  .then(function () {
      console.log('SUCCESS!');
      // Clear the form fields after the form is submitted
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  }, function (error) {
      console.log('FAILED...', error);
  });
}

// DOWNLOAD CV

// Select all elements with the class 'DownloadCV'
var downloadButtons = document.querySelectorAll('.DownloadCV');

// Add an event listener to each button
downloadButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    var fileUrl = 'https://drive.google.com/uc?export=download&id=1nedEWrilscTgfyVV0evG_Ip2UPPvseA7';
    
    // Create a temporary anchor element
    var downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'Elavarasan CV.pdf'; // You can change the downloaded file name here

    // Append the anchor element to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the document
    document.body.removeChild(downloadLink);
  });
});
