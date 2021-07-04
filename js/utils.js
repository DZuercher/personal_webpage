// document.addEventListener("scroll", scrolled_banner);

// let banner = document.getElementsByClassName("banner")[0];
// banner.addEventListener("mouseenter", entered_banner);
// banner.addEventListener("mouseleave", left_banner);

// let menu = document.getElementById("menu");
// menu.addEventListener("mouseenter", entered_banner);
// menu.addEventListener("mouseleave", left_banner);

function scrolled_banner(){
    // Changes color of banner if scrolled down over banner
    if (window.scrollY >= 160){
        document.getElementsByClassName('banner')[0].style['background-color'] = "rgba(39, 39, 39, 0.8)";
        document.getElementById('page-id').style.display = "inline";
    }
    else {
        document.getElementsByClassName('banner')[0].style['background-color'] = "transparent";
        document.getElementById('page-id').style.display = "none";
    }
}

function entered_banner(event){
    // adds a grey background once if mouse is in menu
    event.target.style["background-color"] = "rgba(39, 39, 39, 0.8)";
    document.getElementById('page-id').style.display = "inline";
}

function left_banner(event){
    // remove background again
    if (window.scrollY < 160){
        event.target.style["background-color"] = "transparent";
        document.getElementById('page-id').style.display = "none";
    }
}
