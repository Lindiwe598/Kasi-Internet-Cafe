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

