
let slideNo = 1;
let flag;

displaySlide(slideNo);

function autoplayOn(){
        displaySlide(slideNo);
        slideNo++;
        flag= setTimeout(autoplayOn,2000);
}

function autoplayOff(){
    clearTimeout(flag);
}


// Next/previous controls
function plusSlides(n) {
    displaySlide(slideNo += n);
}

// Thumbnail image controls
function currentSlide(n) {
    displaySlide(slideNo = n);
}


function displaySlide(n){

    const slides=document.getElementsByClassName("mySlides");
    const dots= document.getElementsByClassName("dot");

    if(n>slides.length){
        slideNo=1;
    }
    if(n<1){
        slideNo=slides.length;
    }

    for(let i=0; i<slides.length; i++){
            slides[i].style.display= "none";
            dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideNo-1].style.display = "block";
    dots[slideNo-1].className += " active"; 
}

