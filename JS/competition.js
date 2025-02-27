// Fetch JSON Data
fetch('competition.json')
  .then(response => response.json())
  .then(data => {
    initializeButtons(data.sections);
  })
  .catch(error => console.error('Error loading JSON:', error));

// Initialize Buttons and Event Listeners
function initializeButtons(sections) {
  const buttonContainer = document.getElementById('buttonContainer');
  const screen = document.getElementById('screen');
  const description = document.getElementById('description');

  // Create buttons dynamically with images
  sections.forEach((section, index) => {
    const card = document.getElementById('screen');
    card.classList.remove("animate");

    const button = document.createElement('button');
    button.classList.add('dynamic-button');
    button.setAttribute('data-target', index + 1);
    button.id = `button-${index + 1}`;
    button.innerHTML = `
      <img src="./images/competition_main/${section.image}" style="padding:0.5rem" alt="${section.button}" class="button-icon">
      
    `;
    button.addEventListener('click', () => {
      displayContent(screen, description, section);
      handleAnimation(button);
    });
    buttonContainer.appendChild(button);
  });
}

// Update screen content dynamically
function displayContent(screen, description, section) {
  screen.style.backgroundImage = `url(./images/competition_main/${section.imageUrl})`;
  screen.style.backgroundPosition = "center";
  screen.style.backgroundRepeat = "no-repeat";
  screen.style.backgroundSize = "cover";




  screen.innerHTML = `<img src="./images/competition_main/${section.image}" alt="${section.button}" style="width:150px">`;
  description.innerHTML = ` <h2>${section.title}</h2><p>${section.description}</p>
  </div>`;
}
{/* <a href="${section.link}"class="btn btn-primary" target="_blank" style="background: linear-gradient(90deg, #CE32F5 0%, #711D8F 100%);">Register Now</a> */}



// const buttons = document.querySelectorAll(".dynamic-button");

// for (let i = 0; i < buttons.length; i++) {
//   screen.innerHTML.clear();
//   description.innerHTML.clear();
//   buttons[i].addEventListener("click", () => {
//     const targetId = buttons[i].getAttribute("data-target");
//     const card = document.getElementById(targetId);

//     card.classList.add("animate");

//     // Optional: Reset animation after it completes for reuse
//     card.addEventListener("animationend", () => {
//       card.classList.remove("animate");
//     });
//   });
// }
// Button active
