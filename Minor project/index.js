var songs=[

    {
        id:1,
        imageSrc:"1.jpg",
        audioSrc:"1song.mp3",
        title:"ZARA SA"
    },



    {
        id:2,
        imageSrc:"2.jpg",
        
        audioSrc:"2song.mp3",
        title:"MAIN ROYAAN"
    },

    {
        id:3,
        imageSrc:"3.jpg",
        audioSrc:"3song.mp3",
        title:"STAY "
    },

    {
        id:4,
        imageSrc:"4.jpg",
        audioSrc:"4song.mp3",
        title:"TERI ORE "
    },

    {
        id:5,
        imageSrc:"5.jpg",
        audioSrc:"5song.mp3",
        title:"IKTARA"
    },

    {
        id:6,
        imageSrc:"6.jpg",
        audioSrc:"6song.mp3",
        title:"LOVE NWANITI"
    },

    {
        id:7,
        imageSrc:"7.jpg",
        audioSrc:"7song.mp3",
        title:"IN DINO "
    },

    {
        id:8,
        imageSrc:"8.jpg",
        audioSrc:"8song.mp3",
        title:"HOKKAH BAR"
    },

    {
        id:9,
        imageSrc:"9.jpg",
        audioSrc:"9song.mp3",
        title:"RAANJHANNA"
    },

    
    {
        id:10,
        imageSrc:"10.jpg",
        audioSrc:"10song.mp3",
        title:"EXCUSES"
    },
    {
        id:11,
        imageSrc:"11.jpg",
        audioSrc:"11song.mp3",
        title:"MOONLIGHT"
    },
    {
        id:12,
        imageSrc:"12.jpg",
        audioSrc:"12song.mp3",
        title:"WAALIAN"
    },
    {
        id:13,
        imageSrc:"13.jpg",
        audioSrc:"13song.mp3",
        title:"QAAFIRANA"
    },
    {
        id:14,
        imageSrc:"14.jpg",
        audioSrc:"14song.mp3",
        title:"KHAAB"
    },
    {
        id:15,
        imageSrc:"15.jpg",
        audioSrc:"15song.mp3",
        title:"KINA CHIR"
    },
    {
        id:16,
        imageSrc:"16.jpg",
        audioSrc:"16song.mp3",
        title:"SAIBO"
    },
    {
        id:17,
        imageSrc:"17.jpg",
        audioSrc:"17song.mp3",
        title:"RABA MEI TOH MAR GYA "
    },
    {
        id:18,
        imageSrc:"18.jpg",
        audioSrc:"18song.mp3",
        title:"TERA HONE LAGA HOON"
    },
    {
        id:19,
        imageSrc:"19.jpg",
        audioSrc:"19song.mp3",
        title:"DIL KO KARAAR AAYA "
    },
    {
        id:20,
        imageSrc:"20.jpg",
        audioSrc:"20song.mp3",
        title:"UCHIYAAN DEEWARAAN"
    },
    {
        id:21,
        imageSrc:"21.jpg",
        audioSrc:"21song.mp3",
        title:"GIRL I NEED YOU"
    },
    {
        id:22,
        imageSrc:"22.jpg",
        audioSrc:"22song.mp3",
        title:"INTO YOUR ARMS"
    },
    {
        id:23,
        imageSrc:"23.jpg",
        audioSrc:"23song.mp3",
        title:"KYA MUJHE PYAAR HAI"
    },
    {
        id:24,
        imageSrc:"24.jpg",
        audioSrc:"24song.mp3",
        title:"TENU BOL NA PAVA"
    },
    {
        id:25,
        imageSrc:"25.jpg",
        audioSrc:"25song.mp3",
        title:"POGIREN"
    },
    {
        id:26,
        imageSrc:"26.jpg",
        audioSrc:"26song.mp3",
        title:"NIT NIT"
    },
    {
        id:27,
        imageSrc:"27.jpg",
        audioSrc:"27song.mp3",
        title:"BAD LIER"
    },
    {
        id:28,
        imageSrc:"28.jpg",
        audioSrc:"28song.mp3",
        title:"ARCADE"
    },
    {
        id:29,
        imageSrc:"29.jpg",
        audioSrc:"29song.mp3",
        title:"HEAT WAVES "
    },
    {
        id:30,
        imageSrc:"30.jpg",
        audioSrc:"30song.mp3",
        title:"DEAD TO ME"
    },
    {
        id:31,
        imageSrc:"31.jpg",
        audioSrc:"31song.mp3",
        title:"TELEPATIA"
    },
    {
        id:32,
        imageSrc:"32.jpg",
        audioSrc:"32song.mp3",
        title:"SUGAR CRASH"
    },
    
    



]

function generateAudioCards()
{

    let htmlString="";

    songs.forEach(function(song,index){

        let songHTML=`

                <div class="audio">
                <div class="audio_img">
                    <img src="${song.imageSrc}">
                </div>
                <div class="audio_detail">
                    <h1 class="audio_title">${song.title}</h1>
                    <button class="btn" onclick="playAudio(${song.id})">Play</button>
                </div>
                </div>

        `;

        htmlString+=songHTML;

    })

    document.getElementById("audios").innerHTML=htmlString;


}

generateAudioCards();


function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });

    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();

    
}

