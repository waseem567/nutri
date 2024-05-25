//  initializing aos instance
AOS.init();
// GSAP animation
gsap.from("#slider", { duration: 2, opacity: 0, y: -100, ease: "power4.out" });
gsap.from(".nav__logo", {
  duration: 2,
  opacity: 0,
  x: -400,
  ease: "power4.out",
});
gsap.from(".nav__options", {
  duration: 2,
  opacity: 0,
  y: -400,
  ease: "power4.out",
});
gsap.from(".nav__hamburger", {
  duration: 2,
  opacity: 0,
  x: 400,
  ease: "power4.out",
});
//slick slider
$(document).ready(function () {
  $(".carousel-slide").slick({
    autoplay: true,
    fade: true,
    infinite: true,
    autoplaySpeed: 1000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});
let dots = document.querySelectorAll(".dot");
let flipText = document.querySelectorAll(".flip2");
dots[0].classList.add("prple");
$(".carousel-slide").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    for (let i = 0; i < dots.length; i++) {
      if (i === nextSlide) {
        dots[i].classList.add("prple");
        gsap.from(dots[i], { duration: 0.2, scale: 3, ease: "none" });
      } else {
        dots[i].classList.remove("prple");
      }
    }
  }
);
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    $(".carousel-slide").slick("slickGoTo", index);
  });
});
// testimonial slider slick
$(".inner__slick").slick({
  slidesToShow: 1,
  dots: true,
  arrows: false,
});
// js function to handle custom slider
let slideIndex = 0;
function moveSlide(n) {
  const slides = document.querySelectorAll(".slider__item");
  const totalSlides = slides.length;
  slideIndex += n;
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  const moveAmount = slideIndex * -100;
  document.querySelector(
    ".carousel-slide"
  ).style.transform = `translateX(${moveAmount}%)`;
}
// products data
const products = [
  {
    image: "./assets/honey.png",
    className: "bg_light",
    text: "Stainless Glass Juice Bottle",
    price: 45.99,
  },
  {
    image: "./assets/honey.png",
    className: "bg_light",
    text: "Stainless Glass Juice Bottle",
    price: 45.99,
  },
  {
    image: "./assets/honey.png",
    className: "bg_light",
    text: "Stainless Glass Juice Bottle",
    price: 45.99,
  },
  {
    image: "./assets/honey.png",
    className: "bg_light",
    text: "Stainless Glass Juice Bottle",
    price: 45.99,
  },
];
const productsContainer = document.getElementById("products");
function listProducts() {
  products.map((product) => {
    productsContainer.append(`
     <div class="product">
                     <div class="product_img">
                         <img src="${product.image}" alt="honey">
                     </div>
                     <p class="product__text roboto">${product.text}</p>
                     <p class="product__price roboto">${product.price}</p>
                     <button class="product__btn">Order Now</button>
                 </div>
     `);
  });
}
// custom testimonial slider
let testimonials = document.querySelectorAll(".testimonial");
function testimonialSlider(index) {
  // Remove active classes from all testimonials
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active", "left", "right");
  });

  // Add active classes to the selected testimonial
  testimonials[index].classList.add("active");
  // testimonials[index].classList.add("test__bg");

  if (index === 0) {
    testimonials[1].classList.add("left");
    testimonials[2].classList.add("right");
    // testimonials[1].classList.remove("test__bg");
    // testimonials[2].classList.remove("test__bg");
  } else if (index === 1) {
    testimonials[0].classList.add("left");
    testimonials[2].classList.add("right");
    // testimonials[0].classList.remove("test__bg");
    // testimonials[2].classList.remove("test__bg");
  } else {
    testimonials[0].classList.add("left");
    testimonials[1].classList.add("right");
    // testimonials[0].classList.remove("test__bg");
    // testimonials[1].classList.remove("test__bg");
  }
}
let arrows = document.querySelectorAll(".custom__control");
function onClickArrowHandler(arrow) {
  if (arrow === 0) {
    gsap.from(arrows[arrow], { x: -5, ease: "bounce.out" });
    gsap.to(arrows[arrow], { x: 0, ease: "bounce.out" });
  } else {
    gsap.from(arrows[arrow], { x: 5, ease: "bounce.out" });
    gsap.to(arrows[arrow], { x: 0, ease: "bounce.out" });
  }
}
function onContactFormSubmit(e) {
  e.preventDefault();
}
let sideBars = document.querySelectorAll(".sidebarEle");
// sidebar handlers
function sideBarOpenHandler() {
  for (const sidebar of sideBars) {
    sidebar.classList.remove("disp__none");
    gsap.from(sideBars[1], { x: 100 });
    gsap.to(sideBars[1], { x: 0 });
  }
  document.body.style.overflow = "hidden";
}
function sideBarCloseHandler() {
  for (const sidebar of sideBars) {
    gsap.from(sideBars[1], { x: 0 });
    gsap.to(sideBars[1], { x: 300, duration: 0.5 });
    setTimeout(() => {
      sidebar.classList.add("disp__none");
    }, 500);
  }
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "scroll";
}
// go to top button
// Get the button
var scrollToTopBtn = document.getElementById("top__button");
scrollToTopBtn.style.display = "none";
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function () {
  document.getElementById("main").scrollIntoView({ behavior: "smooth" });
});
