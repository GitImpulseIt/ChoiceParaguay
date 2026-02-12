$(document).ready(function () {
  // --- Mobile menu toggle ---
  var $menuBtn = $("#mobile-menu-btn");
  var $mobileMenu = $("#mobile-menu");

  $menuBtn.on("click", function () {
    $mobileMenu.slideToggle(300);
    var $icon = $(this).find("svg");
    $(this).toggleClass("menu-open");
  });

  // Close mobile menu on link click
  $mobileMenu.find("a").on("click", function () {
    $mobileMenu.slideUp(300);
    $menuBtn.removeClass("menu-open");
  });

  // --- Sticky navbar background on scroll ---
  var $navbar = $("#navbar");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $navbar.addClass("bg-navy shadow-lg").removeClass("bg-transparent");
    } else {
      $navbar.removeClass("bg-navy shadow-lg").addClass("bg-transparent");
    }
  });

  // --- Active nav link on scroll ---
  var sections = $("section[id]");

  $(window).on("scroll", function () {
    var scrollPos = $(this).scrollTop() + 100;

    sections.each(function () {
      var $section = $(this);
      var sectionTop = $section.offset().top;
      var sectionHeight = $section.outerHeight();
      var sectionId = $section.attr("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        $(".nav-link").removeClass("active");
        $('.nav-link[href="#' + sectionId + '"]').addClass("active");
      }
    });
  });

  // --- Fade-in on scroll (Intersection Observer) ---
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            $(entry.target).addClass("fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    $(".observe-fade").each(function () {
      observer.observe(this);
    });
  }

  // --- Smooth scroll for anchor links ---
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");

    if ($(target).length) {
      $("html, body").animate(
        { scrollTop: $(target).offset().top - 70 },
        600
      );
    }
  });

  // --- Investment category filter ---
  $(".filter-btn").on("click", function () {
    var category = $(this).data("category");

    $(".filter-btn")
      .removeClass("active bg-gold text-navy border-gold")
      .addClass("bg-navy text-white border-white/10");
    $(this)
      .addClass("active bg-gold text-navy border-gold")
      .removeClass("bg-navy text-white border-white/10");

    // Show all on mobile when filtering
    $(".mobile-hidden").addClass("mobile-shown");
    $("#show-more-projects").hide();

    if (category === "all") {
      $(".project-item").fadeIn(300);
    } else {
      $(".project-item").fadeOut(200);
      $('.project-item[data-category="' + category + '"]').fadeIn(300);
    }
  });

  // --- Mobile "show more" projects ---
  $("#show-more-projects button").on("click", function () {
    $(".mobile-hidden").addClass("mobile-shown").hide().fadeIn(400);
    $("#show-more-projects").slideUp(300);
  });
});
