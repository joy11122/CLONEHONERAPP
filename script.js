  var music=[{
          name:1,
         artist:"unknown artist",
           title:"aha_ami_kemon_ami"
      },
   {
          name:2,
               artist:"unknown artist",
           title:"teri_batone_aise_uljha"
      },
  {
          name:3,
               artist:"unknow artist",
           title:"oh_oh_jane_jana"
      },
{
          name:4,
                artist:"Arijit sing",
           title:"aj_ami_sob_harano"
      },
      {
          name:5,
                artist:"hridoy khan",
           title:"burbie_girl_english_song"
      }
      

      ];
var app=document.getElementById("app");

var app2=document.getElementById("app2");
var app3=document.getElementById("app3");
var mtitle=document.getElementById("mtitle");
var martist=document.getElementById("martist");
var songarea=document.querySelector (".song-area");

var song="";

var allsong=document.querySelector(".allsong");

allsong.addEventListener("click",()=>{
app.style.display="none";
app3.style.zIndex="5";
music.map((music)=>{
  song+= `<div onClick="playy(${music.name})" class="d-flex border mt-3 hoverr justify-content-between  align-items-center mlist rounded ps-2" >
            <div>
                <h4 id="mtitle">${music.title}</h4>
                <span id="martist">${music.artist}</span>
            </div>
            <div>
                <i class="bi bi-three-dots-vertical display-6"></i>
                </div>
        </div>`
        songarea.innerHTML=song;
})
    
});
var play=true;
var app2title=document.getElementById("app2title");

var app2artist=document.getElementById("app2artist");
var app2play=document.getElementById("app2play");
var audio=document.getElementById("audio");


function showapp2(){
    console.log(7);
    app.style.zIndex=0;
    var firstsong=music[0];
    app2title.innerText=firstsong.title;
   app2artist.innerText=firstsong.artist;
    audio.src=`honormusic/${firstsong.title}.mp3`;
}

function showapp21(){
    console.log(7);
    var countfavsong=favsongs.length;
    console.log(countfavsong);
    var countmusic=music.length;
    favsongcount.innerText=`${countfavsong} song`;
    allsongcount.innerText=`${countmusic} song`;
    recentsongcount.innerText=favsongs.length;
    console.log(countmusic);
    var firstsong=music[0];
    apptitle.innerText=firstsong.title;
    appartist.innerText=firstsong.artist;
    app2title.innerText=firstsong.title;
   app2artist.innerText=firstsong.artist;
    audio.src=`honormusic/${firstsong.title}.mp3`;
}


function playy(namee){
   var namee=namee;
  
   
   var res=music.find((music)=>{
      return music.name===namee;
   
   });
   audio.src=`honormusic/${res.title}.mp3`;
   if(play) {
     audio.play();
     app2.style.zIndex="9";
     
     app2title.innerText=res.title;
     app2artist.innerText=res.artist;
     app2play.classList.remove("bi-play-circle-fill");
     
     app2play.classList.add("bi-pause");
     
     play=false;  
   }else{
      audio.pause(); 
       app2play.classList.remove("bi-pause");
     
     app2play.classList.add("bi-play-circle-fill");
      play=true;
   }
   
   
   console.log(res.title);
}

var toggler=true;
app2play.addEventListener("click",()=>{
    if(toggler) {
        audio.pause();
    app2play.classList.remove("bi-pause");
     app2play.classList.add("bi-play-circle-fill");
     toggler=false;
    }else {
        audio.play();
          app2play.classList.remove("bi-play-circle-fill");
     app2play.classList.add("bi-pause");
     toggler=true;
     
     
    }
    
});



function playcurrent(){
   if(toggler) {
        audio.play();
        appplay.classList.remove("bi-play");
     appplay.classList.add("bi-pause");
    toggler=false;
   }else {
   audio.pause();
  appplay.classList.remove("bi-pause");
     appplay.classList.add("bi-play");
     toggler=true;
   }
}

var index=0;

function playnext(){
index=(index+1)% music.length;
  var musicc=music[index];
  console.log(musicc.title);
  
    apptitle.innerText=musicc.title;
    appartist.innerText=musicc.artist;
    app2title.innerText=musicc.title;
   app2artist.innerText=musicc.artist;
  audio.src=`honormusic/${musicc.title}.mp3`;
  audio.play();
  
    
}


var index=0;

function playprevious(){

index=(index-1+music.length)% music.length;
  var musicc=music[index];

  
  console.log(musicc);
  
    apptitle.innerText=musicc.title;
    appartist.innerText=musicc.artist;
    app2title.innerText=musicc.title;
   app2artist.innerText=musicc.artist;
  audio.src=`honormusic/${musicc.title}.mp3`;
  audio.play();
  console.log(888);
    
}
var love=true;
var favsongs=[]
var fav=document.getElementById("fav");
function favsong(){
 if(love) {
        fav.classList.remove("bi-heart");
       fav.classList.add("bi-heart-fill");
      var song= audio.src;
       var r=song.replace("http://localhost:8080/honormusic/","");
       
       var finalresult=r.replace(".mp3","");
      var result =music.find((elm)=>{
           return elm.title===finalresult;
       });
     favsongs.push(result);  
 localStorage.setItem("Joyanto", JSON.stringify(favsongs));
    love=false;
 }else {
 
 fav.classList.remove("bi-heart-fill");
       fav.classList.add("bi-heart");
       love=true;
     console.log(998);
 }

 
 
}

function getlocalmusic() {
    favsongs=JSON.parse(localStorage.getItem("Joyanto")) || [];
}
getlocalmusic();



var favhtml="";
function showfavsong() {
    app3.style.zIndex="10";
  console.log(79798789);
  favsongs.map((m)=>{
    console.log(m.name);
  })
 
    };
    
   


var app4=document.getElementById("app4");
function searchSong() {
    app4.style.zIndex="3";
   app4.style.transition="1s ease";
    app4.style.opacity="1";
}

function livesearchSong() {
var value=input.value;
var songnamelike=value.split(" ").join("_");
   
   console.log(songnamelike);
   
   music.find
   
}