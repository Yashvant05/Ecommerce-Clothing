//Scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

//Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navLinkItems = navLinks.querySelectorAll("a"); // All <a> inside nav-links

  if (toggle && navLinks) {
    // Toggle open/close on menu button click
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      toggle.classList.toggle("rotate");
    });

    // Close menu on link click
    navLinkItems.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        toggle.classList.remove("rotate");
      });
    });
  }
});


//Contact success message 
  // window.addEventListener('DOMContentLoaded', function () {
  //   const msg = document.getElementById("form-messages");
  //   if (msg) {
  //     setTimeout(() => {
  //       msg.style.opacity = "0";
  //       setTimeout(() => {
  //         msg.style.display = "none";
  //       }, 500); // wait for fade to finish
  //     }, 3000);
  //   }
  // });