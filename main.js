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

addEventListenersToIcons()
