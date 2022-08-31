let dataPlayList = [
    {
        key: 'KeyZ',
        src: './audio/Rihanna - Diamonds.mp3',
        btn: 'Z'
    },
    {
        key: 'KeyX',
        src: './audio/Aram Asatrayn - Patilner.mp3',
        btn: 'X'
    },
    {
        key: 'KeyC',
        src: './audio/hayesDu.mp3',
        btn: 'C'
    },
    {
        key: 'KeyV',
        src: "./audio/INSTASAMKA_-_moneyken-love.mp3",
        btn: 'V'
    },
    {
        key: 'KeyB',
        src: "./audio/miyagi_-_marmalade.mp3",
        btn: 'B'
    },
    {
        key: 'KeyN',
        src: "./audio/egor-krid_-_we-gotta-get-love.mp3",
        btn: 'N'
    },
]
const playList = document.querySelector('.play-list');

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

function createAudio( arg ){
    playList.innerHTML = new Audio( arg.key, arg.src ).render();
    let audio = document.getElementById( arg.key );
    audio.play();
}

document.addEventListener('keydown', (e) => {
    let item = dataPlayList.find((i) => e.code == i.key)
    
    if( playList.childElementCount ) {

        if( item && item.key == playList.firstElementChild.id ){

            let audio = document.getElementById( item.key );
            let paused = audio.paused
            paused ? audio.play() : audio.pause();

        } else if( item ){

            createAudio( item )

        } else if ( e.code == 'ArrowRight' || e.code == 'ArrowLeft' ){

            let audio = document.querySelector('audio');
            e.code == 'ArrowRight' ? audio.currentTime += 1 : audio.currentTime -= 1

        } else {
            playList.firstElementChild.remove()
        }

    } else {

        if( item ) {
            createAudio( item )
        }
    }
})



