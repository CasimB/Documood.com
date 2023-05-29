
// new swiper <|>

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

 


var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
 
 

  // const counters = document.querySelectorAll(".count");
  // const speed = 300;
  
  // counters.forEach((counter) => {
  // const updateCount = () => {
  //   const target = parseInt(+counter.getAttribute("data-target"));
  //   const count = parseInt(+counter.innerText);
  //   const increment = Math.trunc(target / speed);
  //   console.log(increment);
  
  //   if (count < target) {
  //     counter.innerText = count + increment;
  //     setTimeout(updateCount, 1);
  //   } else {
  //     count.innerText = target;
  //   }
  // };
  // updateCount();
  // });
 
//   const bars = document.getElementById('bars');
//   const mobileMenu = document.getElementById('mobileMenu');
//   bars.addEventListener('click', function() {
//     mobileMenu.classList.toggle('active')
//   })


//   const validateEmail = (email) => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
//   };
  
// const validate = (selector) => {
//   const result = document.querySelector('#result');
//   const email = document.querySelector('#' + selector).value;
//   result.textContent = "";

//   if (validateEmail(email)) {
//       result.textContent = email + ' is valid :)'
//       result.style.color = 'green';
//   } else {
//       result.textContent = email + ' is not valid :('
//       result.style.color = '#E77C40';
//   }
//   return false;
// }