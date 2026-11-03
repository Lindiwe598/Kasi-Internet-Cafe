// Shared JavaScript file used by all five website pages.
document.addEventListener("DOMContentLoaded", () => {
  // Dynamic footer year
  document.querySelectorAll(".current-year").forEach(el => el.textContent = new Date().getFullYear());
//enquiry form
document.getElementById("enquiryForm").addEventListener("submit", function(e){
    e.preventDefault();
     let name=document.getElementById("name").value;
     let email=document.getElementById("email").value;
     let message=document.getElementById("message").value;
     let errorMessage=document.getElementById("errorMessage");

     //Validation
     if (name === "" || email === "" || message === "") {
        error.style.color = "red";
         error.textContent = "Please fill in all fields.";
         return;
     }
     if(!email.includes("@")){
        error.style.color = "red";
         error.textContent = "Please enter a valid email address.";
         return;
     }
     if(message.length < 10){
        error.style.color = "red";
         error.textContent = "Message must be at least 10 characters long.";
         return;
     }

     //process respose
     errorMessage.style.color = "green";
     errorMessage.textContent = "Form submitted successfully!";
     this.reset(); // Reset the form fields after successful submission

});

//contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
    let errorMessage=document.getElementById("errorMessage");

    //validation
    if (name === "" || email === "" || message === "") {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }
    if(!email.includes("@")){
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }
    if(message.length < 10){
        errorMessage.style.color = "red";
        errorMessage.textContent = "Message must be at least 10 characters long.";
        return;
    }

    //process response
    errorMessage.style.color = "green";
    errorMessage.textContent = "Form submitted successfully!";
    this.reset(); // Reset the form fields after successful submission
});

//interactive elements
function showOffer(){alert("Internt/ computer use: R10 per hour,printing black and white: R3 per page and color: R6, scanning: R5 per page, photocopying: R2 per page, faxing: R10 per page");}

//gallery
function showGallery(){
    let galleryImages = [
        "images/gallery1.jpg",
        "images/gallery2.jpg",
        "images/gallery3.jpg",
        "images/gallery4.jpg",
        "images/gallery5.jpg",
        "images/gallery6.jpg"
    ];

    //dynamic content
    let hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Display the greeting
    alert(greeting);
}

//search 
function searchCafe() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; // Clear previous results
}

  // Gallery search and lightbox
  const gallerySearch = document.querySelector("#gallery-search");
  const galleryItems = [...document.querySelectorAll(".gallery-item")];
  const galleryCount = document.querySelector("#gallery-count");
  const noResults = document.querySelector("#no-gallery-results");
  if (gallerySearch) {
    gallerySearch.addEventListener("input", () => {
      const term = gallerySearch.value.toLowerCase().trim();
      let visible = 0;
      galleryItems.forEach(item => {
        const matches = (item.dataset.search + " " + item.innerText).toLowerCase().includes(term);
        item.hidden = !matches;
        if (matches) visible++;
      });
      if (galleryCount) galleryCount.textContent = `Showing ${visible} of ${galleryItems.length} projects`;
      if (noResults) noResults.hidden = visible !== 0;
    });
  }

  const lightbox = document.querySelector("#lightbox");
  if (lightbox) {
    const lightboxImage = document.querySelector("#lightbox-image");
    const caption = document.querySelector("#lightbox-caption");
    const openButtons = [...document.querySelectorAll(".gallery-open")];
    let currentIndex = 0;
    const visibleButtons = () => openButtons.filter(button => !button.closest(".gallery-item").hidden);
    const showImage =index => {
      const buttons = visibleButtons();
      if (!buttons.length) return;
      currentIndex = (index + buttons.length) % buttons.length;
      const button = buttons[currentIndex];
      lightboxImage.src = button.dataset.full;
      lightboxImage.alt = button.querySelector("img").alt;
      caption.textContent = button.dataset.caption;
    };
    const open = index => {
      showImage(index);
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lightbox-close").focus();
    };
    const close = () => {
      lightbox.hidden = true;
      document.body.style.overflow = "";
    };
    openButtons.forEach(button => button.addEventListener("click", () => open(visibleButtons().indexOf(button))));
    lightbox.querySelector(".lightbox-close").addEventListener("click", close);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", () => showImage(currentIndex - 1));
    lightbox.querySelector(".lightbox-next").addEventListener("click", () => showImage(currentIndex + 1));
    lightbox.addEventListener("click", event => { if (event.target === lightbox) close(); });
    document.addEventListener("keydown", event => {
      if (lightbox.hidden) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showImage(currentIndex - 1);
      if (event.key === "ArrowRight") showImage(currentIndex + 1);
    });
  }
