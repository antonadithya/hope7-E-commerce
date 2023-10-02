let slideIndex = 0;
            showSlides();

            function showSlides() {
                const slides = document.getElementsByClassName("mySlides");

                
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                
                slideIndex++;
                
                if (slideIndex > slides.length) {
                    slideIndex = 1;
                }
                
                
                
                slides[slideIndex - 1].style.display = "block";
                
                
                setTimeout(showSlides, 4000); // Change image every 2 seconds (2000 milliseconds)
            }



let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".sidenav-bar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
}