document.addEventListener("DOMContentLoaded", () => {
    const navLinks = {
      "home-nav": "home-section",
      "about-nav": "about-section",
      "skill-nav": "skill-section",
      "contact-nav": "contact-section",
      "talk-nav": "contact-section",
    };
  
    Object.keys(navLinks).forEach(navId => {
      const navElement = document.getElementById(navId);
      const sectionId = navLinks[navId];
      const sectionElement = document.getElementById(sectionId);
  
      if (navElement && sectionElement) {
        navElement.addEventListener("click", (event) => {
          event.preventDefault();
  
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const sectionPosition = sectionElement.offsetTop - navbarHeight;
  
          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        });
      }
    });
  });
  function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
  }