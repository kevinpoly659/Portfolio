AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
      
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



formBtn.addEventListener("click", function() {
  alert("Form Submitted");
  sendemail();  
}
);
function sendemail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kevinpoly659@gmail.com",
    Password : "69D82E012E23D6E5ED536A83070A344310A3",
    To : "kevinpoly350@gmail.com",
    From : "kevinpoly659@gmail.com",
    Subject : document.getElementById("name").value,
    Body : document.getElementById("subject").value +" "+ document.getElementById("msg").value +" "+ "\n Please contact me at \n" +" "+ document.getElementById("ml").value 
  }).then(
    message => alert(message)
  );
}