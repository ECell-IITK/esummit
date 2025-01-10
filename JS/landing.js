// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(ScrollTrigger)

//     gsap.set('#landing_page', {
//         clipPath: 'polygon(14% 0%, 80% 0%, 95% 85%, 2% 100%)',
//         borderRadius : '0 0 40% 10%'
//     })

//     gsap.from('#landing_page', {
//         clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//         borderRadius: '0 0 0 0',
//         ease : 'power1.inOut',
//         markers :'true',
//         scrollTrigger : {
//             trigger: '#landing_page',
//             start: 'center center',
//             end: 'bottom center',
//             scrub: 'true'

//         }
//     })
//     });


const LayerWater = document.querySelector("#Layerw");
const LayerFirst = document.querySelector("#Layer1");
const LayerSecond = document.querySelector("#Layer2");
const LayerThird = document.querySelector("#Layer3");
const RegisterL = document.getElementById("Reg_lg");
const RegisterS = document.getElementById("Reg_sm");
const Train = document.getElementById("LayerT");
const TrainS = document.getElementById("LayerTS")





function controlVisibility() {
    if (window.innerWidth < 500){
        RegisterL.classList.remove("d-none");
    } else if (window.innerWidth >= 500) {
        RegisterS.classList.remove("d-none");
        LayerWater.src = "./images/2024_landing/Layerw.svg";
        LayerFirst.src = "./images/2024_landing/Layer1.svg";
        LayerSecond.src = "./images/2024_landing/Layer2.svg";
        LayerThird.src = "./images/2024_landing/Layer3.svg";
        // Train.src = "./images/2024_landing/LayerT.svg";
        TrainS.src = "./images/2024_landing/LayerTS.svg";
    }
}
window.addEventListener('load', controlVisibility);
window.addEventListener('resize', controlVisibility);
