document
.querySelector("form")
.addEventListener("submit", function(event){

event.preventDefault();


alert(
"Thank you for contacting Fancy Nails & Beauty Supplies! We will get back to you soon."
);


this.reset();


});



// simple fade-in animation

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";

}

});

});



sections.forEach(section => {

section.style.opacity = 0;

section.style.transform = "translateY(40px)";

section.style.transition = "1s";


observer.observe(section);


});
