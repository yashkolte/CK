
(function (window, document, $, undefined) {
  "use strict";

  let eduvibeJs = {
    i: function (e) {
      eduvibeJs.d();
      eduvibeJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      eduvibeJs.salActive();
      eduvibeJs.slickSlider();
      eduvibeJs.headerSticky();
    },

    bgMarque: function () {
      $(".background-marque").each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
          t += i;
          $this.css("background-position-x", -t + "px");
        }, 10);
      });
    },

    salActive: function () {
      sal({
        threshold: 0.01,
        once: true,
      });
    },

    // magnigyPopup: function () {
    //   $(document).on("ready", function () {
    //     $(".video-popup-activation").magnificPopup({
    //       type: "iframe",
    //     });
    //   });
    // },

    slickSlider: function () {
      $(".testimonial-item-1").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      });

      $(".testimonial-card-activation-1").slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
      });

      $(".eduvibe-home-five-testimonial-activation").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      });

      $(".brand-activation").slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

      $(".testimonial-item-3").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      $(".course-activation-3").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      $(".testimonial-nav-activation").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: ".testimonial-nav-button",
      });

      $(".testimonial-nav-button").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".testimonial-nav-activation",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
      });

      $(".course-activation-item-2").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        nav: false,
        autoplay: false,
        autoplaySpeed: 4000,
        autoplay: true,
        autoplaySpeed: 4000,
      });

      $(".service-activation-item5").slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      $(".team-activation-01").slick({
        dots: false,
        infinite: true,
        arrows: true,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        centerMode: false,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      });

      $(".team-activation-02").slick({
        dots: false,
        infinite: true,
        arrows: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: false,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      });

      $(".team-activation-03").slick({
        dots: false,
        infinite: true,
        arrows: true,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: false,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="icon-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="icon-arrow-right-line-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      });

      $(".eduvibe-course-details-related-course-carousel").slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      $(".eduvibe-course-carousel-page-with-dots").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      $(".eduvibe-event-one-carousel-wrapper").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },

    headerSticky: function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $(".header-sticky").addClass("sticky");
        } else {
          $(".header-sticky").removeClass("sticky");
        }
      });
    },
  };

  eduvibeJs.i();
})(window, document, jQuery);


const imgBoxes = document.querySelectorAll(".imgBx");

function applyHoverEffect(imgBox) {
  gsap.to(imgBox.querySelector("img:nth-child(1)"), {
    duration: 0.5,
    ease: "ease",
    transform: "rotate(-5deg) translateX(-50%)"
  });

  gsap.to(imgBox.querySelector("img:nth-child(3)"), {
    duration: 0.5,
    ease: "ease",
    transform: "rotate(5deg) translateX(50%)",
    overwrite: "auto"
  });
}

function removeHoverEffect(imgBox) {
  gsap.to(imgBox.querySelector("img:nth-child(1)"), {
    duration: 0.5,
    scale: 0.8,
    ease: "ease",
    transform: "rotate(0deg)"
  });

  gsap.to(imgBox.querySelector("img:nth-child(3)"), {
    duration: 0.5,
    scale: 0.8,
    ease: "ease",
    transform: "rotate(0deg)"
  });
}

imgBoxes.forEach((imgBox) => {
  imgBox.addEventListener("mouseover", () => applyHoverEffect(imgBox));
  imgBox.addEventListener("mouseleave", () => removeHoverEffect(imgBox));
});

const wpButton = document.getElementById("wp-button");
const wpButtonClose = document.getElementById("wp-close");
const wpChatBox = document.querySelector(".whatsapp-box");

wpButton.addEventListener("click", enableWPBox);

function enableWPBox() {
  wpChatBox.style.display = "flex";
}

wpButtonClose.addEventListener("click", disableWPBox);

function disableWPBox() {
  wpChatBox.style.display = "none";
}

const announcement = document.getElementById("announcement");
const mainBtn = document.getElementById("main-btn");
const aboutBtn = document.getElementById("about-btn");
const formClose = document.getElementById("form-close");
const overlayForm = document.querySelector(".overlayForm");

formClose.addEventListener("click", disableOverlayForm);
announcement.addEventListener("click", enableOverlayForm);
aboutBtn.addEventListener("click", enableOverlayForm);
mainBtn.addEventListener("click", enableOverlayForm);


function enableOverlayForm() {
  overlayForm.style.display = "flex";
}
function disableOverlayForm() {
  overlayForm.style.display = "none";
  gsap.to(".sidenav-left", {
    duration: 2,
    y: 0,
  });
}

// document.querySelector(".sidenav-left img").addEventListener("click", () => {
//   gsap.to(".sidenav-left", {
//     duration: 2,
//     y: -1500,
//     ease: "bounce",
//   });
//   overlayForm.style.display = "flex";
// });


// ==================== Start Contact Form ============================


//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyC-AIW7NNXmpre36Uszjz2KWgU9wvKV69A",

  authDomain: "ck-contact.firebaseapp.com",

  projectId: "ck-contact",

  storageBucket: "ck-contact.appspot.com",

  messagingSenderId: "5575314637",

  appId: "1:5575314637:web:6287fb66ce6d4f6aa7ed84",

};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("formData");

//Get Submit Form
let submitButton = document.getElementById("btnSubmit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  // let country = document.getElementById("country").value;

  firestore
    .collection("formData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().email;
        if (email === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      name: name,
      email: email,
      phone: phone,
      message: message,

      // country: country,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearForm").reset();
  }
  clearForm()
});

// ==================== End Contact Form ========================================



  // =============================================================================


  

  // ==============================================================================


  gsap.defaults({
    ease: "none", 
  });
  
  var picker = document.querySelector(".picker");
  var cells = document.querySelectorAll(".cell");
  var proxy = document.createElement("div");
  
  var cellWidth = 450;
  //var rotationX = 90;
  
  var numCells = cells.length;
  var cellStep = 1 / numCells;
  var wrapWidth = cellWidth * numCells;
  console.log('props', {numCells,
  cellStep,
  wrapWidth})
  var baseTl = gsap.timeline({ paused: true });
  
  gsap.set(picker, {
    //perspective: 1100,
    width: wrapWidth - cellWidth
  });
  
  for (var i = 0; i < cells.length; i++) {  
    initCell(cells[i], i);
  }
  
  var animations = gsap.timeline({ repeat: -1, paused: true })
    .add(baseTl.tweenFromTo(1, 2))
  animations.progress(1, true).progress(0, true);
  var draggable = new Draggable(proxy, {  
    type: "x",
    trigger: picker,
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    snap: { 
      x: snapX
    },
    onThrowComplete: function(){
      console.log("onThrowComplete");
      //TODO: animation that inject selected card title
    }
  });
  
  function snapX(x) {  
    
    const snapped = Math.round(x / cellWidth) * cellWidth;
    console.log('snapped', snapped, cellWidth )
    return snapped
  }
  const wrap = gsap.utils.wrap(0, 1);
  function updateProgress() {  
    animations.progress(wrap(this.x / wrapWidth));
  }
  
  function initCell(element, index) {
    
    gsap.set(element, {
      width: cellWidth,
      scale: 0.6,
      //rotationX: rotationX,
      x: -cellWidth
    });
    
    var tl = gsap.timeline({ repeat: 1 })
      .to(element, {duration:1, x: "+=" + wrapWidth/*, rotationX: -rotationX*/ }, 0)
      .to(element, {duration:cellStep, scale: 1, repeat: 1, yoyo: true }, 0.5 - cellStep)
    
    baseTl.add(tl, i * -cellStep);
  }

  gsap.to("#slider-icon", {
    x: 25,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  })

  // ==================================================================

  let album = gsap.timeline({
    scrollTrigger: {
      trigger: "#main-album",
      start: "top top",
      scrub: 1,
      pin: true,
      end: "+=1500px",
    },
  });
  
  album.to(
    "#main-album .album:nth-child(1) ",
    {
      duration: 3,
      x: -320,
      y: -50,
      ease: "power1",
    },
    "album"
  );
  album.to(
    "#main-album .album:nth-child(2) ",
    {
      duration: 3,
      x:500,
      y: 200,
      ease: "power1",
    },
    "album"
  );
  album.to(
    "#main-album .album:nth-child(3) ",
    {
      duration: 3,
      x:-550,
      y: 150,
      ease: "power1",
    },
    "album"
  );
  album.to(
    "#main-album .album:nth-child(4) ",
    {
      duration: 3,
      x:550,
      y: -150,
      ease: "power1",
    },
    "album"
  );
  album.to(
    "#main-album .album:nth-child(5) ",
    {
      duration: 3,
      x:-560,
      y: -180,
      ease: "power1",
    },
    "album"
  );
  album.to(
    "#main-album .album:nth-child(6) ",
    {
      duration: 3,
      x:-50,
      y: 260,
      ease: "power1",
    },
    "album"
  );
  album.to(
    "#main-album .album:nth-child(7) ",
    {
      duration: 3,
      x: 180,
      y: -180,
      ease: "power1",
    },
    "album"
  );
  album.fromTo(
    "#main-album .album:last-child ",{
      scale: 0,
      opacity: 0,
    },
    {
      duration: 2,
      scale: 1,
      opacity: 1,
      ease: "power1",
    },
    "album"
  );

  var footer = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      start: "top center",
      end: "center center",
      scrub: 1,
      // markers: true,
    }
  })
  
  
  footer.from(".footer-background svg path", {
    strokeDashoffset: 230,
    duration: 5,
    ease: "linear",
  });

  // ======================================================================


  // ======================================================================

  console.clear();

gsap.set('.infinite-text',{xPercent:-50,yPercent:-50})
gsap.set('#no02',{y:50})

var boxWidth = 700,
    totalWidth = boxWidth * 7,  //  * n of boxes
    no02 = document.querySelectorAll("#no02 .box"),
    dirFromLeft = "+=" + totalWidth,
    dirFromRight = "-=" + totalWidth;

var mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction){
  gsap.set(which, {
    x:function(i) {
      return i * boxWidth;
    }
  });
  var action = gsap.timeline()
  .to(which,  {
  x: direction,
  modifiers: {
    x: x => mod(parseFloat(x)) + "px"
  },
    duration:time, ease:'none',
    repeat:-1,
  });
  return action
}

var master = gsap.timeline()
.add(marquee(no02, 50, dirFromRight),0)

// ======================================================================

console.clear();


gsap.set('#main-project-slider',{xPercent:-50,yPercent:-50})
gsap.set('#projects',{y:50})

var ProjectboxWidth = 300,
    ProjecttotalWidth = boxWidth * 4,  //  * n of boxes
    Projectno02 = document.querySelectorAll("#projects .project"),
    ProjectdirFromLeft = "+=" + ProjecttotalWidth,
    ProjectdirFromRight = "-=" + ProjecttotalWidth;

var mod = gsap.utils.wrap(0, ProjecttotalWidth);

function marquee(which, time, direction){
  gsap.set(which, {
    x:function(i) {
      return i * boxWidth;
    }
  });
  var action = gsap.timeline()
  .to(which,  {
  x: direction,
  modifiers: {
    x: x => mod(parseFloat(x)) + "px"
  },
    duration:time, ease:'none',
    repeat:-1,
  });
  return action
}

var master = gsap.timeline()
.add(marquee(Projectno02, 40, ProjectdirFromRight),0)


// =========================================================================================================================

let $ = document;
let slider = $.querySelector(".slider");
let sliderItem = $.querySelectorAll(".slider-item");

let preBtnSlider = $.getElementById("pre-btn-slider");
let nextBtnSlider = $.getElementById("next-btn-slider");
let bgSlider = $.querySelector(".bg-slider");
let slideContentH2 = $.querySelector(".slide-content h2");
let slideContentP = $.querySelector(".slide-content p");
let slideContentAnchor = $.querySelector(".slide-content a");
sliderItem = Array.from(sliderItem);
let currentPosition = 200;
let firstItemCurentPosition = currentPosition;
let nextItemForActive = 0;
let autoPreMoveSlide;
for (let item = 0; item < sliderItem.length; item++) {
  sliderItem[item].style.right = `${
    currentPosition - firstItemCurentPosition
  }px`;
  firstItemCurentPosition = firstItemCurentPosition - firstItemCurentPosition;
  currentPosition = currentPosition - 225;
}
lastItemPosition = currentPosition + 225;
console.log(
  getComputedStyle(sliderItem[sliderItem.length - 1]).getPropertyValue("right")
);
let currentPositionItem = 0;
let defualtWidth = sliderItem[1].offsetWidth;
let defualtHeight = sliderItem[1].offsetHeight;
$.addEventListener("DOMContentLoaded", () => {
  preBtnSlider.addEventListener("click", preMoveSlid);
});
slideContentH2.innerHTML =
  sliderItem[0].lastElementChild.firstElementChild.firstElementChild.textContent;
slideContentP.innerHTML =
  sliderItem[0].lastElementChild.lastElementChild.previousElementSibling.firstElementChild.textContent;
slideContentAnchor.innerHTML =
  sliderItem[0].lastElementChild.lastElementChild.textContent;
slideContentAnchor.setAttribute(
  "href",
  sliderItem[0].lastElementChild.lastElementChild.getAttribute("href")
);
function preMoveSlid() {
  preBtnSlider.setAttribute("disabled", " ");
  for (let i = 0; i < sliderItem.length; i++) {
    currentPositionItem = getComputedStyle(sliderItem[i]).getPropertyValue(
      "right"
    );

    if (
      sliderItem[i].classList.contains("activeBgc") ||
      parseFloat(getComputedStyle(sliderItem[i]).getPropertyValue("right")) >=
        parseFloat("200px")
    ) {
      sliderItem[i].classList.remove("activeBgc");

      console.log(sliderItem[i].nextElementSibling);
      if (
        sliderItem[i].nextElementSibling == null ||
        sliderItem[i].nextElementSibling.classList.contains("slider-item") !=
          true
      ) {
        nextItemForActive = sliderItem[0];
      } else {
        nextItemForActive = sliderItem[i].nextElementSibling;
      }
      sliderItem[i].style.right = `${lastItemPosition}px`;
    } else {
      sliderItem[i].style.right = `${parseInt(currentPositionItem) + 225}px`;
    }
  }

  nextItemForActive.style.transition = "all 0.5s";
  nextItemForActive.classList.add("activeBgc");
  slideContentH2.innerHTML =
    nextItemForActive.lastElementChild.firstElementChild.firstElementChild.textContent;
  slideContentP.innerHTML =
    nextItemForActive.lastElementChild.lastElementChild.previousElementSibling.firstElementChild.textContent;
  slideContentAnchor.innerHTML =
    nextItemForActive.lastElementChild.lastElementChild.textContent;
  slideContentAnchor.setAttribute(
    "href",
    nextItemForActive.lastElementChild.lastElementChild.getAttribute("href")
  );
  nextItemForActive.style.right = "0";
  setTimeout(() => {
    preBtnSlider.removeAttribute("disabled");
  }, 600);
}

function autoPlaySlider() {
  for (let w = 0; w < sliderItem.length; w++) {
    if (
      parseFloat(getComputedStyle(sliderItem[w]).getPropertyValue("right")) <
      -450
    ) {
      sliderItem[w].style.opacity = "0";
    } else if (
      parseFloat(getComputedStyle(sliderItem[w]).getPropertyValue("right")) >
      -450
    ) {
      sliderItem[w].style.opacity = "10";
    }
  }
  for (let w = 0; w < sliderItem.length; w++) {
    if (
      parseFloat(getComputedStyle(sliderItem[w]).getPropertyValue("right")) <=
      -250
    ) {
      sliderItem[w].classList.add("activeSmall");
    } else if (
      parseFloat(getComputedStyle(sliderItem[w]).getPropertyValue("right")) >
      -250
    ) {
      sliderItem[w].classList.remove("activeSmall");
    }
  }
}

setInterval(autoPlaySlider, 1);
