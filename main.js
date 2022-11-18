const sidebarExtention = document.querySelector("#outer")
/** Functions to open and close sidebar extention */
function addEventListenerToIcons() {
    const icons = document.querySelectorAll("#sidebarIcon")

    for ( let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", openSidebar)
    }
}

function openSidebar() {
    sidebarExtention.classList.toggle("hidden");
}


function addEventListenerToSidebarText() {
    const sidebartext = document.querySelectorAll("#extendedSidebarText")

    for ( let i = 0; i < sidebartext.length; i++) {
        sidebartext[i].addEventListener("click", closeSidebar)
    }
}

function closeSidebar() {
    sidebarExtention.classList.toggle("hidden");
}



addEventListenerToIcons()
addEventListenerToSidebarText()