 let play = document.getElementById("icon1");
let input=document.getElementById("range");
var audioElement = new Audio("1.mp3");
let next=document.getElementById("play2");
let previous = document.getElementById("play1");
let para= document.getElementById("para");
let image = document.getElementById("image1")

let indexTrack =0;

let song = [
    {songName: "Let Me Love You", filePath:"MUSIC/1.mp3",coverPath:"MUSIC/1.jpg"},
    {songName: "Let e", filePath:"MUSIC/2.mp3",coverPath:"MUSIC/2.jpg"},
    {songName: "Let ", filePath:"MUSIC/3.mp3",coverPath:"MUSIC/3.jpg"},
    {songName: "Let Me ", filePath:"MUSIC/4.mp3",coverPath:"MUSIC/4.jpg"},
    {songName: "Let Me Love ", filePath:"MUSIC/5.mp3",coverPath:"MUSIC/5.jpg"},
]
//  function nextBtn(){
//     let audioElement2= new Audio("2.mp3");
//     let audioElement3= new Audio("3.mp3");
//     let audioElement4= new Audio("4.mp3");
//     let audioElement5= new Audio("5.mp3");
//     para.innerHTML=("DHOKA");
//     image.src='3.jpg';

//     next.addEventListener("click",()=>{
//         if(audioElement3.paused || audioElement3.currentTime<=0 ){
//             audioElement3.play();
//              play.classList.remove('fa-solid')
        // play.classList.remove('fa-play');
//              play.className+= 'fa-sharp fa-solid fa-circle-pause'
//         }
//         else{
//             audioElement3.pause();
//             play.classList.remove('fa-sharp fa-solid fa-circle-pause');
//             play.classList.add('fa-solid fa-play');
//         }
    
//     })
    

        // // audioElement3.play();
        // audioElement3.addEventListener('timeupdate',()=>{
        //     progress =parseInt((audioElement3.currentTime/audioElement3.duration)*100);
        //     input.value=progress;
        //     })
            
        //     input.addEventListener('change',()=>{
        //         audioElement3.currentTime=input.value *audioElement3.duration/100;
        //     })
   
   


 
//  next.addEventListener("click",nextBtn);

play.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        play.classList.remove('fa-solid')
        play.classList.remove('fa-play');
        console.log(play.classList)
        play.className+= 'fa-sharp fa-solid fa-circle-pause'
    }
    else{
        audioElement.pause();
        play.className=''
        play.className+= 'fa-solid fa-play'
    }

})

audioElement.addEventListener('timeupdate',()=>{
progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
input.value=progress;
})

input.addEventListener('change',()=>{
    audioElement.currentTime=input.value *audioElement.duration/100;
})
