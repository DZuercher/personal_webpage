
document.addEventListener("scroll", adapt_banner);

function adapt_banner(){
    // Changes color of banner if scrolled down over banner
    if (window.scrollY >= 160){
        document.getElementsByClassName('banner')[0].style['background-color'] = "#272727";
        document.getElementById('page-id').style.display = "inline";
    }
    else {
        document.getElementsByClassName('banner')[0].style['background-color'] = "transparent";
        document.getElementById('page-id').style.display = "none";
}
}
