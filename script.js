var triggerOpen = document.getElementsByClassName("trigger")[0];
var triggerClose = document.getElementsByClassName("side-close")[0];
var sidebar = document.getElementsByClassName("sidebar")[0];
var body = document.getElementsByTagName("body")[0];

triggerOpen.addEventListener("click", () => {
    sidebar.classList.add("sidebar-open");
    body.classList.add("noScroll");
})

triggerClose.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-open");
    body.classList.remove("noScroll");
})