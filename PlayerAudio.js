import { dataPlayList} from "./Data.js";

class PlayerAudio extends Audio {
    constructor( src, name, key, type ){
        super( src )
        this.name = name;  // audio name
        this.key = key;    // keyboard keyCode
        this.type = type;
        this.isActive = false; // active state true or false
        this.isFiltered = false;
        this.addEventListener( 'timeupdate', this._setUpdate )
        this.addEventListener( 'volumechange', this._volumeChange )
        this.addEventListener( 'ended',this._ended )
        this._card = this._createCard(); // creating the audio card 
        this._card.addEventListener('click', this.play.bind(this) )
        
    }
    _ended = function() {
        let filtered = dataPlayList.filter( e => e.isFiltered == false )
        let index = filtered.findIndex(e => e.isActive == true );
        if( index != -1 ) index + 1 >= filtered.length ? filtered[0].play() : filtered[index + 1].play();
    }
    _createCard(){
        let card = document.createElement('div');
            card.className = `card m-1 rounded-3`;
            card.setAttribute('data-type', this.type )
        card.innerHTML = this._createContext();

        return card
    }
    _createContext(){
        return `
            <div class="card-body text-truncate p-2">
                <span class="badge bg-primary me-2">${ this.key[3] }</span>  ${ this.name } 
            </div>
        `;
    }
    _setActiveClass(){
            let playlist = Array.from( document.querySelector('.play-list-menu').children );
            playlist.forEach( (e) => e.classList.remove('active-audio') );

            let index = dataPlayList.findIndex((e) => e.isActive == true)

            playlist[index].classList.add('active-audio')

            document.querySelector('.audio-name').textContent = dataPlayList[index].name

            document.getElementById('play-pause-icon').setAttribute('src','./svg/pause-circle-fill.svg')
    }
    deleteAudio(){
            this._card.hidden = true;
            this.isFiltered = true;
    }
    _setUpdate = function(){
            let position = 0;

            position = this.currentTime * (100 / this.duration);
            document.querySelector('#audio-duration-line').value = position;

            let currentMin = Math.floor( this.currentTime / 60 );
            let currentSec = Math.floor( this.currentTime - currentMin * 60 );
            let durationMin = Math.floor( this.duration / 60 );
            let durationSec = Math.floor( this.duration - durationMin * 60 );

            if( currentSec < 10 ) currentSec = '0' + currentSec;
            if( currentMin < 10 ) currentMin = '0' + currentMin;
            if( durationSec < 10 ) durationSec = '0' + durationSec;
            if( durationMin < 10 ) durationMin = '0' + durationMin;

            
            document.querySelector('.audio-current-time').textContent = currentMin + ':' + currentSec;
            document.querySelector('.audio-duration').textContent = durationMin + ':' + durationSec;
    }
    play(){

        dataPlayList.forEach((e) => e.isActive = false)
        this.isActive = true
        
        if( this.paused ) {
            
            this._setActiveClass()
            dataPlayList.forEach((e) => e.pause())

            super.play()
            
        } else {
            super.pause()
            
            document.getElementById('play-pause-icon').setAttribute('src','./svg/play-circle-fill.svg')
        }
    }
    _volumeChange = function(){
        let line = document.querySelector('#audio-volume-line');
        let currentValue = this.volume * 100;
        line.value = currentValue
    }
    volumeUp(){
        if( this.volume + 0.1 <= 1 ) this.volume += 0.1
    }
    volumeDown(){
        if( this.volume - 0.1 >= 0 ) this.volume -= 0.1
    }
    render(){
        return this._card
    }
}

export default PlayerAudio