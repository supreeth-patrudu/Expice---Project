// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

/*********** carousel **************/
const carouselImages = document.querySelector('.carousel .images'); /* images container */
const carouselButtons = document.querySelector('.carousel .button');
const numberOfImages = document.querySelectorAll('.carousel .images img');
let imageIndex = 1;
let translateX = 0; /*how far left/right we scrolled */

// console.log(carouselImages);
console.log (carouselButtons);
carouselButtons.forEach(button => {
  button.addEventListner('click', event => {
    if(event.target.id === 'previous') 
    {
      /* if we aren't viewing first image */
      if (imageIndex !== 1) {
        imageIndex--;
        translateX +=300;
      }
    }  
    else {
      /*if not last image */
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX-=300;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});