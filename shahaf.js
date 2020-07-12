var sidebarSliderCounter = 0;
function slideSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("container");
    if(sidebarSliderCounter % 2 == 0) {
        sidebar.className = "sidebar sidebar-open-animation";
        content.className = "container container-with-sidebar";
    }
    else {
        sidebar.className = "sidebar sidebar-close-animation";
        content.className = "container container-without-sidebar";
    }
    sidebarSliderCounter++;
}

function headertonav () {
    var element = document.getElementById("header");
    element.className = "header-navbar";
    document.getElementById("sidebar-home").style.display = "block";
}

function navtoheader () {
    var element = document.getElementById("header");
    element.className = "header";
    document.getElementById("sidebar-home").style.display = "none";
}