
function main() {
    addEventListenersToIcons();
    startSlideShow();
    toggleMenuOnPhone();
}

/**
 * Functions to open and close menu on phone view.
 */
function toggleMenuOnPhone() {
    const burger = document.querySelector("#burger");
    burger.addEventListener("click", openMenuPhone);
    const xMarker = document.querySelector("#xMarker");
    xMarker.addEventListener("click", openMenuPhone)
}

function openMenuPhone() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("menuOut")
}



/**
 * A function to extend the sidebar for clear options
 */
function addEventListenersToIcons() {
    const icons = document.querySelectorAll("li");

    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", toggleExtendedMenu)
    }
}

function toggleExtendedMenu() {
    const sidebar = document.querySelector("nav");
    console.log(sidebar)
    sidebar.classList.toggle("extended");
}

/**
 * A function to simulate a slideshow in the background.
 */
function startSlideShow() {
    setInterval(changeImage, 2000);
}

function changeImage() {
    const images = document.querySelectorAll("#images img");
    for (let i = 0; i < images.length; i++) {
        const currentImg = images[i];
        
        let nextIndex;
        if ( i === images.length - 1 ) {
            nextIndex = 0;
        } else {
            nextIndex = i + 1;
        }
        
        const nextImg = images[nextIndex];
        
        if ( currentImg.classList.contains("visible")) {
            currentImg.classList.remove("visible");
            nextImg.classList.add("visible");
            break;
        }
    }
}