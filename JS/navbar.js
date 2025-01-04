
    const links = document.querySelectorAll(".nav-item .nav-link");

    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); 
        links.forEach(l => l.classList.remove("btn-custom"));

        link.classList.add("btn-custom");
        const targetId = link.getAttribute("href").substring(1); 
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" }); 
      });   
    });
    // Function to return the ID of the section currently in the viewport
    // function getVisibleSectionId() {
    //   const sections = document.querySelectorAll("section"); // Select all sections
    
    //   // Create an intersection observer
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         // If the section is in the viewport, log and return its ID
    //         console.log(`The visible section is: ${entry.target.id}`);
    //       }
    //     });
    //   }, {
    //     threshold: 0.5 // Trigger when 50% of the section is visible
    //   });
    
    //   // Start observing each section
    //   sections.forEach(section => observer.observe(section));
    // }
    
    // // Call the function to start observing sections
    // getVisibleSectionId();
    
    // function addActiveClass(id) {
    //     const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    //     activeLink.classList.add("active");
    //   }