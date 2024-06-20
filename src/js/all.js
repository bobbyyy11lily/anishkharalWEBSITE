function errorDisplay() {
    alert("UNKNOWN ERROR OCCURED!");
}

function pageUD() {
    alert("PAGE UNDER DEVELOPMENT!");
}

function mobMenu() {
    var div = document.getElementById("mobile-menu");
    if (div.style.display === "flex") {
        div.style.display = "none";
    } else {
        div.style.display = "flex";
    }
}