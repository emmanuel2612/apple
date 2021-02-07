window.addEventListener('load', function () {


    const landingText = document.querySelector('#text-container');
    const landingVideo = document.querySelector('#landingVideo');
    const landingImage = document.querySelector('#landingImage');

    console.log(landingVideo.duration);


    landingVideo.ontimeupdate = () => {
        if (landingVideo.currentTime > 2.2){
            landingText.style.display = "block";
            
            setTimeout(() => {
                landingText.style.opacity = "1";
            }, 800);
        }

        if (landingVideo.currentTime === 5.166667){
            console.log("finished");
            landingVideo.style.display = "none";
            landingImage.style.display = "block";
        }

    }


    const customiseiPhone = document.querySelector('#customiseiPhone');

    customiseiPhone.onclick = () => {
        document.body.style.overflow = "visible";

    }


    const iphone12Button = document.querySelector('#iphone12');
    const section2H1 = document.querySelector('#section-2-h1');

    
    var blur = document.getElementById('blur');

    document.body.onscroll = () =>{
    console.log(document.documentElement.scrollTop);

    
    if (document.documentElement.scrollTop > 1380){
        blur.style.display = "none";
    }

    else{
        blur.style.display = "block"
        
    }
    
    }

   

    




});

