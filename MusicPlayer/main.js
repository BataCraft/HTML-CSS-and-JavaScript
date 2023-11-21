document.addEventListener("DOMContentLoaded", ()=>{
    let playPauseBtn = document.querySelector(".mid");

    var audio = new Audio("./m1.mp3");

    playPauseBtn.addEventListener('click', ()=>{
        if(audio.paused){
            audio.play();
            playPauseBtn.innerHTML="<i class='ri-pause-fill'></i>";
        }
        else{
            audio.pause();
            playPauseBtn.innerHTML="<i class='ri-play-fill'></i>";
        }
    });

    audio.addEventListener('timeupdate', ()=>
    {
        let currentTime = formatTime(audio.currentTime);
        let duration = formatTime(audio.duration);

        document.querySelector(".left").innerHTML= currentTime;
        document.querySelector(".left").innerHTML= duration;
        document.querySelector("#musicrange").value = (audio.currentTime / 100);
    });

    function formatTime(time){
        var min = Math.floor(time/60);
        var sec = Math.rouund((time%60));
    }
})