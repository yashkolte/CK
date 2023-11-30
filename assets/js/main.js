
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
      // eduvibeJs.magnigyPopup();
      eduvibeJs.slickSlider();
      eduvibeJs.headerSticky();
      // eduvibeJs.counterUp();
      // eduvibeJs.productHoverTilt();
      // eduvibeJs.masonryActivation();
      // eduvibeJs.lightboxActivation();
      // eduvibeJs.boxHover();
      // eduvibeJs.boxHoverSlider();
      // eduvibeJs.pricingPlan();
      // eduvibeJs.wowActivation();
      // eduvibeJs.qtyBtn();
      // eduvibeJs.accordionBtnTwo();
      // eduvibeJs.bannerAnimation();
      // eduvibeJs.popupMobileMenu();
      // eduvibeJs.bgMarque();
      // eduvibeJs.filterClickButton();
      // eduvibeJs.contactForm();
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

    // counterUp: function () {
    //   var odo = $(".odometer");
    //   odo.each(function () {
    //     $(".odometer").appear(function (e) {
    //       var countNumber = $(this).attr("data-count");
    //       $(this).html(countNumber);
    //     });
    //   });
    // },

    // productHoverTilt: function () {
    //   if ($.isFunction($.fn.tilt)) {
    //     $(".eduvibe-single-product-thumb-wrapper").tilt({
    //       maxTilt: 30,
    //       perspective: 1000,
    //       easing: "cubic-bezier(.03,.98,.52,.99)",
    //       speed: 500,
    //       glare: false,
    //       maxGlare: 0.3,
    //       scale: 1.04,
    //     });
    //   }
    // },

    // masonryActivation: function name(params) {
    //   $(window).load(function () {
    //     $(".masonary-wrapper-activation").imagesLoaded(function () {
    //       // filter items on button click
    //       $(".isotop-filter").on("click", "button", function () {
    //         var filterValue = $(this).attr("data-filter");
    //         $(this).siblings(".is-checked").removeClass("is-checked");
    //         $(this).addClass("is-checked");
    //         $grid.isotope({
    //           filter: filterValue,
    //         });
    //       });

    //       // init Isotope
    //       var $grid = $(".mesonry-list").isotope({
    //         percentPosition: true,
    //         transitionDuration: "0.7s",
    //         layoutMode: "masonry",
    //         masonry: {
    //           columnWidth: ".resizer",
    //         },
    //       });
    //     });
    //   });
    // },

  //   lightboxActivation: function () {
  //     lightGallery(document.getElementById("animated-thumbnials"), {
  //       thumbnail: true,
  //       animateThumb: false,
  //       showThumbByDefault: false,
  //     });
  //   },

  //   boxHover: function () {
  //     jQuery(".edu-instructor-3-visible, .eduvibe-hover-item-visible").on(
  //       "mouseenter",
  //       function () {
  //         let selector = jQuery(this).parent().parent();
  //         selector
  //           .find(".edu-instructor-3-visible, .eduvibe-hover-item-visible")
  //           .removeClass("eduvibe-hover-active");
  //         jQuery(this).addClass("eduvibe-hover-active");
  //       }
  //     );
  //   },

  //   boxHoverSlider: function () {
  //     jQuery(".edu-instructor-3-slider-visible").on("mouseenter", function () {
  //       let selector = jQuery(this).parent().parent().parent();
  //       selector
  //         .find(".edu-instructor-3-slider-visible")
  //         .removeClass("eduvibe-hover-active");
  //       jQuery(this).addClass("eduvibe-hover-active");
  //     });
  //   },

  //   pricingPlan: function () {
  //     var yearlySelectBtn = $("#yearly-plan-btn"),
  //       monthlySelectBtn = $("#monthly-plan-btn"),
  //       monthlyPrice = $(".monthly-pricing"),
  //       yearlyPrice = $(".yearly-pricing"),
  //       buttonSlide = $("#pricing-checkbox");

  //     $(monthlySelectBtn).on("click", function () {
  //       buttonSlide.prop("checked", true);
  //       $(this)
  //         .addClass("active")
  //         .parent(".nav-item")
  //         .siblings()
  //         .children()
  //         .removeClass("active");
  //       monthlyPrice.css("display", "block");
  //       yearlyPrice.css("display", "none");
  //     });

  //     $(yearlySelectBtn).on("click", function () {
  //       buttonSlide.prop("checked", false);
  //       $(this)
  //         .addClass("active")
  //         .parent(".nav-item")
  //         .siblings()
  //         .children()
  //         .removeClass("active");
  //       monthlyPrice.css("display", "none");
  //       yearlyPrice.css("display", "block");
  //     });

  //     $(buttonSlide).change(function () {
  //       if ($('input[id="pricing-checkbox"]:checked').length > 0) {
  //         monthlySelectBtn.addClass("active");
  //         yearlySelectBtn.removeClass("active");
  //         monthlyPrice.css("display", "block");
  //         yearlyPrice.css("display", "none");
  //       } else {
  //         yearlySelectBtn.addClass("active");
  //         monthlySelectBtn.removeClass("active");
  //         monthlyPrice.css("display", "none");
  //         yearlyPrice.css("display", "block");
  //       }
  //     });
  //   },

  //   wowActivation: function () {
  //     new WOW().init();
  //   },

  //   qtyBtn: function () {
  //     $(".pro-qty").prepend(
  //       '<span class="dec qtybtn icon-arrow-down-s-fill"></span>'
  //     );
  //     $(".pro-qty").append(
  //       '<span class="inc qtybtn icon-arrow-up-s-fill"></span>'
  //     );
  //     $(".qtybtn").on("click", function () {
  //       var $button = $(this);
  //       var oldValue = $button.parent().find("input").val();
  //       if ($button.hasClass("inc")) {
  //         var newVal = parseFloat(oldValue) + 1;
  //       } else {
  //         // Don't allow decrementing below zero
  //         if (oldValue > 0) {
  //           var newVal = parseFloat(oldValue) - 1;
  //         } else {
  //           newVal = 0;
  //         }
  //       }
  //       $button.parent().find("input").val(newVal);
  //     });
  //   },

  //   accordionBtnOne: function () {
  //     $('.edu-accordion-01 button[aria-expanded="true"]', function () {
  //       $('.edu-accordion-01 button[aria-expanded="true"]')
  //         .parent()
  //         .parent()
  //         .addClass("bg-active");
  //     });

  //     $('.edu-accordion-01 button[aria-expanded="false"]', function () {
  //       $('.edu-accordion-01 button[aria-expanded="false"]')
  //         .parent()
  //         .parent()
  //         .removeClass("bg-active");
  //     });

  //     $(".edu-accordion-01").on(
  //       "click",
  //       'button[aria-expanded="true"]',
  //       function () {
  //         $(this).parent().parent().addClass("bg-active");
  //         $('.edu-accordion-01 button[aria-expanded="false"]')
  //           .parent()
  //           .parent()
  //           .removeClass("bg-active");
  //       }
  //     );

  //     $(".edu-accordion-01").on(
  //       "click",
  //       'button[aria-expanded="false"]',
  //       function () {
  //         $(this).parent().parent().removeClass("bg-active");
  //         $('.edu-accordion-01 button[aria-expanded="true"]')
  //           .parent()
  //           .parent()
  //           .addClass("bg-active");
  //       }
  //     );
  //   },

  //   accordionBtnTwo: function () {
  //     $('.edu-accordion-02 button[aria-expanded="true"]', function () {
  //       $('.edu-accordion-02 button[aria-expanded="true"]')
  //         .parent()
  //         .parent()
  //         .addClass("bg-active");
  //     });

  //     $('.edu-accordion-02 button[aria-expanded="false"]', function () {
  //       $('.edu-accordion-02 button[aria-expanded="false"]')
  //         .parent()
  //         .parent()
  //         .removeClass("bg-active");
  //     });

  //     $(".edu-accordion-02").on(
  //       "click",
  //       'button[aria-expanded="true"]',
  //       function () {
  //         $(this).parent().parent().addClass("bg-active");
  //         $('.edu-accordion-02 button[aria-expanded="false"]')
  //           .parent()
  //           .parent()
  //           .removeClass("bg-active");
  //       }
  //     );

  //     $(".edu-accordion-02").on(
  //       "click",
  //       'button[aria-expanded="false"]',
  //       function () {
  //         $(this).parent().parent().removeClass("bg-active");
  //         $('.edu-accordion-02 button[aria-expanded="true"]')
  //           .parent()
  //           .parent()
  //           .addClass("bg-active");
  //       }
  //     );
  //   },

  //   bannerAnimation: function () {
  //     $(".scene").each(function () {
  //       new Parallax($(this)[0]);
  //     });
  //   },

  //   popupMobileMenu: function (e) {
  //     $(".hamberger-button").on("click", function (e) {
  //       $(".popup-mobile-menu").addClass("active");
  //     });
  //     $(".close-menu").on("click", function (e) {
  //       $(".popup-mobile-menu").removeClass("active");
  //       $(".popup-mobile-menu .mainmenu .has-droupdown > a")
  //         .siblings(".submenu, .rn-megamenu")
  //         .removeClass("active")
  //         .slideUp("400");
  //       $(".popup-mobile-menu .mainmenu .has-droupdown > a").removeClass(
  //         "open"
  //       );
  //     });
  //     $(".popup-mobile-menu .mainmenu .has-droupdown > a").on(
  //       "click",
  //       function (e) {
  //         e.preventDefault();
  //         $(this)
  //           .siblings(".submenu, .rn-megamenu")
  //           .toggleClass("active")
  //           .slideToggle("400");
  //         $(this).toggleClass("open");
  //       }
  //     );
  //     $(".popup-mobile-menu").on("click", function (e) {
  //       e.target === this &&
  //         $(".popup-mobile-menu").removeClass("active") &&
  //         $(".popup-mobile-menu .mainmenu .has-droupdown > a")
  //           .siblings(".submenu, .rn-megamenu")
  //           .removeClass("active")
  //           .slideUp("400") &&
  //         $(".popup-mobile-menu .mainmenu .has-droupdown > a").removeClass(
  //           "open"
  //         );
  //     });
  //   },


  //   filterClickButton: function () {
  //     $("#slider-range").slider({
  //       range: true,
  //       min: 10,
  //       max: 500,
  //       values: [100, 300],
  //       slide: function (event, ui) {
  //         $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
  //       },
  //     });
  //     $("#amount").val(
  //       "$" +
  //         $("#slider-range").slider("values", 0) +
  //         " - $" +
  //         $("#slider-range").slider("values", 1)
  //     );
  //   },

  //   contactForm: function () {
  //     $(".rwt-dynamic-form").on("submit", function (e) {
  //       e.preventDefault();
  //       var _self = $(this);
  //       var __selector = _self.closest("input,textarea");
  //       _self.closest("div").find("input,textarea").removeAttr("style");
  //       _self.find(".error-msg").remove();
  //       _self
  //         .closest("div")
  //         .find('button[type="submit"]')
  //         .attr("disabled", "disabled");
  //       var data = $(this).serialize();
  //       $.ajax({
  //         url: "mail.php",
  //         type: "post",
  //         dataType: "json",
  //         data: data,
  //         success: function (data) {
  //           _self
  //             .closest("div")
  //             .find('button[type="submit"]')
  //             .removeAttr("disabled");
  //           if (data.code == false) {
  //             _self.closest("div").find('[name="' + data.field + '"]');
  //             _self
  //               .find(".rn-btn")
  //               .after('<div class="error-msg"><p>*' + data.err + "</p></div>");
  //           } else {
  //             $(".error-msg").hide();
  //             $(".form-group").removeClass("focused");
  //             _self
  //               .find(".rn-btn")
  //               .after(
  //                 '<div class="success-msg"><p>' + data.success + "</p></div>"
  //               );
  //             _self.closest("div").find("input,textarea").val("");

  //             setTimeout(function () {
  //               $(".success-msg").fadeOut("slow");
  //             }, 5000);
  //           }
  //         },
  //       });
  //     });
  //   },
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
const formClose = document.getElementById("form-close");
const overlayForm = document.querySelector(".overlayForm");

formClose.addEventListener("click", disableOverlayForm);
announcement.addEventListener("click", enableOverlayForm);

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

document.querySelector(".sidenav-left img").addEventListener("click", () => {
  gsap.to(".sidenav-left", {
    duration: 2,
    y: -1500,
    ease: "bounce",
  });
  overlayForm.style.display = "flex";
});


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

// ==================== End Contact Form ============================

document.getElementById("PopupForm")
  .addEventListener("click", function () {
    document.querySelector(".overlayForm")
      .style.display = "flex";
  });

  // ================================================================


  

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
      end: "+=1500px",
      scrub: 1,
      // markers: true,
      // ease: "power1.inOut",
      pin: true,
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

  // ==================================================================

  console.clear();

gsap.set('.infinite-text',{xPercent:-50,yPercent:-50})
gsap.set('#no02',{y:50})

var boxWidth = 600,
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
.add(marquee(no02, 20, dirFromRight),0)
