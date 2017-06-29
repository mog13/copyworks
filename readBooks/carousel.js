//
document.addEventListener("DOMContentLoaded", function() {
    init();
});


function getAllItems() {
    let carousel =  document.querySelector(".carousel");
    return Array.from(carousel.getElementsByClassName("carousel-item"));

}

function init() {
    //set up animation event listeners
    let carousel =  document.querySelector(".carousel");

    getAllItems().forEach((item) => {
        item.addEventListener("animationend", (event) => {
            if (event.animationName === "carousel-shrinking") {
                item.remove();
                item.classList.remove("shrinking");
                let carouselContainer = carousel.querySelector(".carousel-item-container");
                carouselContainer.appendChild(item);
                skewAll(true);

            }
            if (event.animationName === "carousel-growing") {
                item.classList.remove("growing");
                skewAll(false);
            }
            if(event.animationName === "carousel-skew-left") {
                item.classList.remove("skew-left");
            }
            if(event.animationName === "carousel-skew-right") {
                item.classList.remove("skew-right");
            }

        });
    })
}


function skewAll(left) {
    getAllItems().forEach((item) => {
      if(left) {
          item.classList.add("skew-left");
      }
      else{
          item.classList.add("skew-right");
      }
    })
}

function shiftLeft() {
    let items = getAllItems();
    let moveElement = items[0];
    //shrink the element before deleting
    moveElement.classList.add("shrinking");

}

function shiftRight() {
    let items = getAllItems();
    let moveElement = items[items.length - 1];
    moveElement.classList.add("growing");
    moveElement.remove();
    let carouselContainer = document.querySelector(".carousel").querySelector(".carousel-item-container");
    carouselContainer.insertBefore(moveElement,items[0]);

}

