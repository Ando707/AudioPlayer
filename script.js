// class myAudio extends Audio {
//     constructor( src, name, key, type ){
//         super( src )
//         this.name = name;  // audio name
//         this.key = key;    // keyboard keyCode
//         this.type = type;
//         this.isActive = false; // active state true or false
//         this.isFiltered = false;
//         this.addEventListener( 'timeupdate', this._setUpdate )
//         this.addEventListener( 'volumechange', this._volumeChange )
//         this.addEventListener( 'ended',this._ended )
//         this._card = this._createCard(); // creating the audio card 
//         this._card.addEventListener('click', this.play.bind(this) )
        
//     }
//     _ended = function() {
//         let filtered = dataPlayList.filter( e => e.isFiltered == false )
//         let index = filtered.findIndex(e => e.isActive == true );
//         if( index != -1 ) index + 1 >= filtered.length ? filtered[0].play() : filtered[index + 1].play();
//     }
//     _createCard(){
//         let card = document.createElement('div');
//             card.className = `card m-1 rounded-3`;
//             card.setAttribute('data-type', this.type )
//         card.innerHTML = this._createContext();

//         return card
//     }
//     _createContext(){
//         return `
//             <div class="card-body text-truncate p-2">
//                 <span class="badge bg-primary me-2">${ this.key[3] }</span>  ${ this.name } 
//             </div>
//         `;
//     }
//     _setActiveClass(){
//             let playlist = Array.from( document.querySelector('.play-list-menu').children );
//             playlist.forEach( (e) => e.classList.remove('active-audio') );

//             let index = dataPlayList.findIndex((e) => e.isActive == true)

//             playlist[index].classList.add('active-audio')

//             document.querySelector('.audio-name').textContent = dataPlayList[index].name

//             document.getElementById('play-pause-icon').setAttribute('src','./svg/pause-circle-fill.svg')
//     }
//     deleteAudio(){
//             this._card.hidden = true;
//             this.isFiltered = true;
//     }
//     _setUpdate = function(){
//             let position = 0;

//             position = this.currentTime * (100 / this.duration);
//             document.querySelector('#audio-duration-line').value = position;

//             let currentMin = Math.floor( this.currentTime / 60 );
//             let currentSec = Math.floor( this.currentTime - currentMin * 60 );
//             let durationMin = Math.floor( this.duration / 60 );
//             let durationSec = Math.floor( this.duration - durationMin * 60 );

//             if( currentSec < 10 ) currentSec = '0' + currentSec;
//             if( currentMin < 10 ) currentMin = '0' + currentMin;
//             if( durationSec < 10 ) durationSec = '0' + durationSec;
//             if( durationMin < 10 ) durationMin = '0' + durationMin;

            
//             document.querySelector('.audio-current-time').textContent = currentMin + ':' + currentSec;
//             document.querySelector('.audio-duration').textContent = durationMin + ':' + durationSec;
//     }
//     play(){

//         dataPlayList.forEach((e) => e.isActive = false)
//         this.isActive = true
        
//         if( this.paused ) {
            
//             this._setActiveClass()
//             dataPlayList.forEach((e) => e.pause())

//             super.play()
            
//         } else {
//             super.pause()
            
//             document.getElementById('play-pause-icon').setAttribute('src','./svg/play-circle-fill.svg')
//         }
//     }
//     _volumeChange = function(){
//         let line = document.querySelector('#audio-volume-line');
//         let currentValue = this.volume * 100;
//         line.value = currentValue
//     }
//     volumeUp(){
//         if( this.volume + 0.1 <= 1 ) this.volume += 0.1
//     }
//     volumeDown(){
//         if( this.volume - 0.1 >= 0 ) this.volume -= 0.1
//     }
//     render(){
//         return this._card
//     }
// }
import {data, dataPlayList} from "./Data.js";
import PlayerAudio from "./PlayerAudio.js";

// import data from "./Data.js";

//---------------------------

const playListMenu = document.querySelector('.play-list-menu');
const navbar = document.querySelector('.navbar-audio');


// let dataPlayList = [

//   ]
// let data = [
//     {
//         src: './audio/Aram Asatrayn - Patilner.mp3',
//         name: 'Aram Asatrayn - Patilner',
//         code: 'KeyA',
//         type: 'classic',
//     },
//     {
//         src: './audio/miyagi-scriptonit.mp3',
//         name: 'Miyagi - Scriptonit',
//         code: 'KeyB',
//         type: 'rock',
//     },
//     {
//         src: './audio/MATRANG-MEDUZA.mp3',
//         name: 'Matrang - Meduzda',
//         code: 'KeyC',
//         type: 'pop',
//     },
//     {
//         src: './audio/Aram Mp3, Forsh-Requiem.mp3',
//         name: 'Aram Mp3 & Forsh - Requiem',
//         code: 'KeyD',
//         type: 'jazz',
//     },
//     {
//         src: './audio/Aram Asatryan-Chanaparh.mp3',
//         name: 'Aram Asatrayn - Chanaparh',
//         code: 'KeyE',
//         type: 'classic',
//     },
//     {
//         src: './audio/Miyagi &amp; Andy Panda-Minor.mp3',
//         name: 'Miyagi & Andy Panda - Minor',
//         code: 'KeyF',
//         type: 'rock',
//     },
//     {
//         src: './audio/Dlya_Dushi😍-Muzika Dlya Dushi.mp3',
//         name: 'Dlya Dushi - Muzika Dlya Dushi',
//         code: 'KeyG',
//         type: 'pop',
//     },
//     {
//         src: './audio/Arkadi Dumikyan-Sarerov dzorerov.mp3',
//         name: 'Arkadi Dumikyan - Sarerov dzorerov',
//         code: 'KeyH',
//         type: 'jazz',
//     },
//     {
//         src: './audio/Artash Asatryan-Gavat.mp3',
//         name: 'Artash Asatryan - Gavat',
//         code: 'KeyI',
//         type: 'classic',
//     },
//     {
//         src: './audio/miyagi-andy-panda_-_patron.mp3',
//         name: 'Miyagi & Andy Panda - Patron',
//         code: 'KeyJ',
//         type: 'rock',
//     },
//     {
//         src: './audio/Misha Xramovi-Chayare.mp3',
//         name: 'Misha Xramovi - Chayare',
//         code: 'KeyK',
//         type: 'pop',
//     },
//     {
//         src: './audio/Arkadi Dumikyan-Champa tveq.mp3',
//         name: 'Arkadi Dumikyan - Champa tveq',
//         code: 'KeyL',
//         type: 'jazz',
//     },
//     {
//         src: './audio/Aram Asatryan-Masis.mp3',
//         name: 'Aram Asatryan - Masis',
//         code: 'KeyM',
//         type: 'classic',
//     },
//     {
//         src: './audio/miyagi_-_korabli.mp3',
//         name: 'Miyagi - Korabli',
//         code: 'KeyN',
//         type: 'rock',
//     },
//     {
//         src: './audio/Bebe-Cocaine.mp3.crdownload',
//         name: 'Bebe - Cocaine',
//         code: 'KeyO',
//         type: 'pop',
//     },
//     {
//         src: './audio/Arkadi Dumikyan-Angel Moy 2016- 2017.mp3',
//         name: 'Arkadi Dumikyan - Angel Moy',
//         code: 'KeyP',
//         type: 'jazz',
//     },
//     {
//         src: './audio/Aram Asatryan-Surb Sargis.mp3',
//         name: 'Aram Asatryan - Surb Sargis',
//         code: 'KeyQ',
//         type: 'classic',
//     },
//     {
//         src: './audio/miyagi-endshpil_-_moya-dikaya-kassandra.mp3',
//         name: 'Miyagi & Endshpil - Moya Dikaya Kassandra',
//         code: 'KeyR',
//         type: 'rock',
//     },
//     {
//         src: './audio/😈⚡Pride By Booom⚡😈-Khalif - Утопай (Rodesso Remix).mp3',
//         name: 'Khalif - Утопай',
//         code: 'KeyS',
//         type: 'pop',
//     },
//     {
//         src: './audio/Arkadi Dumikyan-44 дня.mp3',
//         name: 'Arkadi Dumikyan - 44 дня',
//         code: 'KeyT',
//         type: 'jazz',
//     },
//     {
//         src: './audio/Арам Асатрян-Es k mernem u k gnam.mp3',
//         name: 'Aram Asatryan - Es k mernem u k gnam',
//         code: 'KeyU',
//         type: 'classic',
//     },
//     {
//         src: './audio/Renkarnacia-Lusabac.mp3',
//         name: 'Renkarnacia - Lusabac',
//         code: 'KeyV',
//         type: 'rock',
//     },
//     {
//         src: './audio/Misha Xramovi-Воспоминание.mp3',
//         name: 'Misha Xramovi - Воспоминание',
//         code: 'KeyW',
//         type: 'pop',
//     },
//     {
//         src: './audio/Arkadi Dumikyan-Brat.mp3',
//         name: 'Arkadi Dumikyan - Moy Brat',
//         code: 'KeyX',
//         type: 'jazz',
//     },
//     {
//         src: './audio/Valer-Dzer Sery.mp3',
//         name: 'Valer - Dzer Sery',
//         code: 'KeyY',
//         type: 'pop',
//     },
//     {
//         src: './audio/Picca-Lift_(PrimeMusic.ru).mp3',
//         name: 'Picca - Lift',
//         code: 'KeyZ',
//         type: 'jazz',
//     },  
// ]


for( let item of data ){
    dataPlayList.push( new PlayerAudio( item.src, item.name, item.code, item.type) )
}
dataPlayList.forEach( e => playListMenu.append(e.render()) )

//--------------------------------------------------------



navbar.addEventListener('click', (e) => {
    
    if( e.target.closest('.all') ){
        
        [...playListMenu.children].forEach( e => e.hidden = false )
        dataPlayList.forEach( e => e.isFiltered = false )
    }
    if( e.target.closest('.classic') ){

        [...playListMenu.children].forEach( e => e.hidden = false )
        for( let audio of dataPlayList ){
            audio.type != 'classic' ? audio.deleteAudio() : audio.isFiltered = false ;
        }

    }
    if( e.target.closest('.rock') ){
        [...playListMenu.children].forEach( e => e.hidden = false )

        for( let audio of dataPlayList ){
            audio.type != 'rock' ? audio.deleteAudio() : audio.isFiltered = false ;
        }

    }
    if( e.target.closest('.jazz') ){
        [...playListMenu.children].forEach( e => e.hidden = false )

        for( let audio of dataPlayList ){
            audio.type != 'jazz' ? audio.deleteAudio() : audio.isFiltered = false ;
        }

    }
    if( e.target.closest('.pop') ){
        [...playListMenu.children].forEach( e => e.hidden = false )

        for( let audio of dataPlayList ){
            audio.type != 'pop' ? audio.deleteAudio() : audio.isFiltered = false ;
        }

    }
})

//-------------------------------------------------

const playerBtns = document.querySelector('.player-btns')


playerBtns.addEventListener('click',(e) => {
    let targetAudio = dataPlayList.find( elem => elem.isActive == true )
    let filtered = dataPlayList.filter( e => e.isFiltered == false )

    if( e.target.closest('.play') ) {  
        targetAudio ? targetAudio.play() : dataPlayList.find( e => e.isFiltered == false ).play();
    }
    if( e.target.closest('.move-left') ) {
        targetAudio.currentTime -= 2
    }
    if( e.target.closest('.move-right') ) {
        targetAudio.currentTime += 2
    }
    if( e.target.closest('.previos') ) {

        let index = filtered.findIndex(e => e.isActive == true );
        if( index != -1 ) index - 1 <= -1 ? filtered.at(-1).play() : filtered[index - 1].play(); 

    }
    if( e.target.closest('.next') ) {
        
        let index = filtered.findIndex(e => e.isActive == true );
        if( index != -1 ) index + 1 >= filtered.length ? filtered[0].play() : filtered[index + 1].play();
    
    }
    if( e.target.closest('.restart') ) {
        targetAudio.currentTime = 0
    }
    if( e.target.closest('.repeat') ) {
        if( targetAudio ){
            targetAudio.loop = !targetAudio.loop
            document.querySelector('.repeat').classList.toggle('text-warning')
        }
    }
    if( e.target.closest('.volume-down') ){
        targetAudio.volumeDown();
    }
    if( e.target.closest('.volume-up') ){
        targetAudio.volumeUp();
    }
    if( e.target.closest('.volume-muted-unmuted') ){
        let icon = document.querySelector('.volume-muted-unmuted')
        if( targetAudio ){
            targetAudio.muted ? icon.innerHTML = '<i class="bi bi-volume-up fs-4 ps-2"></i>' : icon.innerHTML = `<i class="bi bi-volume-mute fs-4 ps-2"></i>`
            targetAudio.muted = !targetAudio.muted
        }
    }
})


document.addEventListener('keydown', (e) => {
    let audio = dataPlayList.find( elem => e.code == elem.key)
   
    if( audio ) audio.paused ? audio.play() : audio.pause();

    if( e.code == 'ArrowLeft' || e.code == 'ArrowRight' ) {
        let targetAudio = dataPlayList.find( el => el.isActive == true )
        e.code == 'ArrowLeft' ? targetAudio.currentTime -= 2 : targetAudio.currentTime += 2 ;
    }
    if( e.code == 'ArrowUp' || e.code == 'ArrowDown' ) {
        e.preventDefault();
        let targetAudio = dataPlayList.find( el => el.isActive == true )
        e.code == 'ArrowUp' ? targetAudio.volumeUp() : targetAudio.volumeDown() ;
    }
})
