// DOM Elements declaration
  // Sections
const about = document.querySelector('.about');
const services = document.querySelector('#services');
const work = document.querySelector('#work');
const contact = document.querySelector('.contact');
const navUl = document.getElementById('navUl');

// hidden CV boxes
const mncCV = document.querySelector('.cv-mnc');
const pmCV = document.querySelector('.cv-pm');

  // Parallax containers


  // Nav Btns
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navWork = document.getElementById('navWork');
const navContact = document.getElementById('navContact');
const navToggle = document.querySelector('.navToggle');
const menuLinks = document.querySelectorAll('.nav a')

  // Btns
const submitBtn = document.getElementById('submit');
const toTopBtn = document.querySelector('.toTopBtn');
const mncMoreBtn = document.querySelector('.btn-mnc')
const mncCloseBtn = document.querySelector('.btn-mnc.close')
const pmMoreBtn = document.querySelector('.btn-pm')
const pmCloseBtn = document.querySelector('.btn-pm.close')

var yOffset; // pageYOffset value

// functions
function setActiveLink() {
  var yOffset = window.pageYOffset + 80; // 80px is the fixed navbar height
  // console.log(window.pageYOffset);

  // Check if About is visible and add 'active' class to nav btn
  yOffset >= about.offsetTop && yOffset < services.offsetTop
  ? navAbout.classList.add('active')
  : navAbout.classList.remove('active')

  // Check if Services is visible and add 'active' class to nav btn
  yOffset >= services.offsetTop && yOffset < work.offsetTop
  ? navServices.classList.add('active')
  : navServices.classList.remove('active')

  // Check if Work is visible and add 'active' class to nav btn
  yOffset >= work.offsetTop && yOffset < contact.offsetTop
  ? navWork.classList.add('active')
  : navWork.classList.remove('active')

  // Check if Contact is visible and add 'active' class to nav btn
  yOffset >= contact.offsetTop && yOffset < document.querySelector('footer').offsetTop
  ? navContact.classList.add('active')
  : navContact.classList.remove('active')

  // show toTopBtn once scroll past 1000px
  yOffset >= 700
  ? toTopBtn.classList.add('show')
  : toTopBtn.classList.remove('show')
}

window.addEventListener('scroll', setActiveLink);

// Btns click actions

function handleToggle() {
  navUl.classList.toggle('showNavUl');
  navToggle.classList.toggle('expanded');
}

// -- Show/hide Menu when Hamb is clicked
navToggle.addEventListener('click', handleToggle);

// -- collapse Menu once link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', handleToggle);
});

// -- Back to top btn
toTopBtn.addEventListener('click', () => {
  window.scroll(0,0);
});


// -- prevent page from reloading when form is submitted
// submit.addEventListener('click', (e) => {
//   e.preventDefault();
// });


// Parallax-O-Matic effects
function parallaxMagic() {
  let yScroll = window.pageYOffset;
  heroParallax.style.backgroundPositionY = yScroll * 0.4 + "px";
  servicesParallax.style.backgroundPositionY = (yScroll * 0.05) - 100 + "px";
  contactParallax.style.backgroundPositionY = (yScroll * 0.05) - 220 + "px";
}

// window.addEventListener('scroll', parallaxMagic);


// CV Read More btns
mncMoreBtn.addEventListener('click', () => {
  mncCV.classList.toggle('show');
})
mncCloseBtn.addEventListener('click', () => {
  mncCV.classList.toggle('show');
})

pmMoreBtn.addEventListener('click', () => {
  pmCV.classList.toggle('show');
})
pmCloseBtn.addEventListener('click', () => {
  pmCV.classList.toggle('show');
})

// contact form , select style toggle
const select = document.querySelector("select");
select.addEventListener('change', function () {
  this.classList.add("selected");
});



// footer text
const copyright = document.querySelector('.copyright');

copyright.innerHTML = `Copyright &copy; ${new Date().getFullYear()}`;
