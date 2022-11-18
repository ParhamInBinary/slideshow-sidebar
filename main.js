const sidebarExtention = document.querySelector("#outer")

function addEventListenerToIcons() {
    const icons = document.querySelectorAll("#sidebarIcon")

    for ( let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", openSidebar)
    }
}

function openSidebar() {
    sidebarExtention.classList.toggle("hidden");

}

addEventListenerToIcons()