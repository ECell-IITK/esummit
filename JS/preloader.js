setTimeout(function() {
    let body = document.getElementsByTagName("body")[0]
    body.classList.add("is-preloader-loaded")
    console.log("preloader working")
  },5000)