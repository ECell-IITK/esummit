/* 
==========  
Workshops Carousel  
==========  
*/

// Select DOM elements
const carousel = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.items');
const quantity = items.length;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

window.addEventListener('load', controlDisplay);
// window.addEventListener('resize', controlDisplay);

function controlDisplay() {
    const indexing = (i) => {
        let idx = i % quantity;
        // if (idx < 0) idx = idx * -1;
        if (idx > 0) idx = 12 - idx; 
        else idx = 0;
        return idx;
    };

    // Function to highlight the current active slide
    const currentSlide = (items, idx) => {
        items.forEach((link) => {
            link.classList.remove('current');
        });
        items[idx].classList.add('current');
        console.log(items[idx])
    };

    let i = 0; // Counter to track the current slide

    // Function to rotate the carousel
    const rotateCarousel = () => {
        carousel.style.transition = 'transform 1s ease';
        carousel.style.transform = `rotate(${-(++i) * (360 / quantity)}deg)`;

        let index = indexing(i);
        currentSlide(items, index);
    };

    const interval = setInterval(rotateCarousel, 3000);

    // Next button functionality
    next.addEventListener('click', () => {
        rotateCarousel();
        clearInterval(interval);

    });

    // Previous button functionality
    prev.addEventListener('click', () => {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `rotate(${-(--i) * (360 / quantity)}deg)`;

        let index = indexing(i)
        currentSlide(items, index)
        clearInterval(interval);

         
    })
}


// 

/* 
==========
workshops
// ==========
// //  */

// // const carousel = document.querySelector('.carousel-container');
// // const quantity = document.querySelectorAll('.items').length;
// // const items = document.querySelectorAll('.items')
// // const next = document.querySelector('.next');
// // const prev = document.querySelector('.prev');

// const indexing = (i) => {
//     let idx= i%quantity;
//     if(idx<0){
//         idx = idx*-1  
//     }else if (idx>0){
//         idx = 11-idx  
//     }else{
//         idx = 0;
//     }
//     return idx;
// }

// const currentSlide = (items, idx) => {
//     items.forEach((link) => {
//         link.classList.remove('current');
//     })
//     items[idx].classList.add('current')
// }

// let i =0;   

// next.addEventListener('click', () => {
//     carousel.style.rotate = `${-(++i)*(360/quantity)}deg`;

//     let index = indexing(i)
//     currentSlide(items, index)


// });

// prev.addEventListener('click', () => {
//     carousel.style.rotate = `${-(--i)*(360/quantity)}deg`

//     let index = indexing(i)
//     currentSlide(items, index)

     
// })




// // // swipe
// // let startX = 0;
// // let startY = 0;
// // let endX = 0;
// // let endY = 0;

// // // Element to detect swipe on
// // const swipeArea = document.querySelector('.carousel-container');

// // swipeArea.addEventListener("touchstart", (event) => {
// //   startX = event.touches[0].clientX;
// //   startY = event.touches[0].clientY;
// // });

// // swipeArea.addEventListener("touchmove", (event) => {
// //   // Prevent default scrolling during swipe
// //   event.preventDefault();
// // });

// // swipeArea.addEventListener("touchend", (event) => {
// //   endX = event.changedTouches[0].clientX;
// //   endY = event.changedTouches[0].clientY;

// //   const diffX = endX - startX;
// //   const diffY = endY - startY;

// //   // Determine the direction
// //   if (Math.abs(diffX) > Math.abs(diffY)) {
// //     if (diffX > 0) {
// //       console.log("Swipe Right");
// //     } else {
// //       console.log("Swipe Left");
// //     }
// //   } else {
// //     if (diffY > 0) {
// //       console.log("Swipe Down");
// //     } else {
// //       console.log("Swipe Up");
// //     }
// //   }
// // });

// // 