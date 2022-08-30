let dataPlayList = [
    {
        key: 'KeyA',
        src: './audio/Rihanna - Diamonds.mp3',
        btn: 'A'
    },
    {
        key: 'KeyB',
        src: './audio/Aram Asatrayn - Patilner.mp3',
        btn: 'B'
    },
    {
        key: 'KeyC',
        src: './audio/hayesDu.mp3',
        btn: 'C'
    },
    {
        key: 'KeyT',
        src: "./audio/INSTASAMKA_-_moneyken-love.mp3",
        btn: 'T'
    },
    {
        key: 'KeyM',
        src: "./audio/miyagi_-_marmalade.mp3",
        btn: 'M'
    },
    {
        key: 'KeyE',
        src: "./audio/egor-krid_-_we-gotta-get-love.mp3",
        btn: 'E'
    },
]

class Audio {
    constructor( key, src ){
        this.src = src
        this.key = key;
    }
    render(){
       return  `
            <audio controls id="${this.key}">
                <source src="${this.src}"  type="audio/mpeg">
            </audio> 
       `
    }
}
function createAudioBox( key , src , btn ) {
    let audio = new Audio( key , src ).render();
    return `
        <div class="d-flex align-items-center">
            <p class="text-success fs-1 p-2 mb-0">
                ${btn}
            </p>
            ${audio}
        </div>
    `;
}
function createPlayList( data, where ) {

    for( let item of data ){

        where.insertAdjacentHTML('beforeend', createAudioBox( item.key, item.src, item.btn ))
        let audio = document.getElementById( item.key );
        

        document.addEventListener('keydown', (e) => {

            let paused = audio.paused
            if( e.code == item.key ) {
                if( paused ){
                    allAudio.forEach( (e) => e.pause() );
                    audio.play();
                } else {
                    audio.pause()
                }
            }
            if ( e.code == 'ArrowRight' && !audio.paused ){
                audio.currentTime += 1
            }
            if ( e.code == 'ArrowLeft' && !audio.paused  ){
                audio.currentTime -= 1
            }
        })

    }

    let allAudio = document.querySelectorAll('audio');
}


const playList = document.querySelector('.play-list');

createPlayList( dataPlayList, playList );
