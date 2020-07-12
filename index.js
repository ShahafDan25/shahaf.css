// window.scrollTo(0,document.body.scrollHeight);

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