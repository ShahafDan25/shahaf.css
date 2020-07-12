// window.scrollTo(0,document.body.scrollHeight);

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

function displayMe(section) {
    var sections = document.getElementsByClassName("section");
    for(var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(section + "-section").style.display = "block"
}

function feedbackForm() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("feedback-section").style.display = "block";

}