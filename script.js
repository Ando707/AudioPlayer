let dataPlayList = [
    {
        key: 'KeyZ',
        src: './audio/Rihanna - Diamonds.mp3',
        btn: 'Z - Rihanna - Diamonds'
    },
    {
        key: 'KeyX',
        src: './audio/Aram Asatrayn - Patilner.mp3',
        btn: 'X - Aram Asatrayn - Patilner'
    },
    {
        key: 'KeyC',
        src: './audio/hayesDu.mp3',
        btn: 'C - Aram Asatrayn - hayesDu'
    },
    {
        key: 'KeyV',
        src: "./audio/INSTASAMKA_-_moneyken-love.mp3",
        btn: 'V - INSTASAMKA_-_moneyken-love'
    },
    {
        key: 'KeyB',
        src: "./audio/miyagi_-_marmalade.mp3",
        btn: 'B - miyagi_-_marmalade'
    },
    {
        key: 'KeyN',
        src: "./audio/egor-krid_-_we-gotta-get-love.mp3",
        btn: 'N - egor-krid_-_we-gotta-get-love'
    },
]
const playList = document.querySelector('.play-list');

class Audio {
    constructor( key, src, btn ){
        this.src = src
        this.key = key
        this.btn = btn
    }
    render(){
       return  `
                <audio controls id="${this.key}">
                    <source src="${this.src}"  type="audio/mpeg">
                </audio>
                <span class="fs-3 px-4 text-success">
                    ${this.btn}
                </span>
       `
    }
}

function createAudio( arg ){
    playList.innerHTML = new Audio( arg.key, arg.src, arg.btn ).render();
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
            playList.lastElementChild.remove()
        }

    } else {

        if( item ) {
            createAudio( item )
        }
    }
})



const playListMenu = document.querySelector('.play-list-menu')

function createMenuItem( a ){
    return `
        <li class="nav-item">
            <span class="text-success fs-1 fw-semibold px-2"> ${ a.btn } </span>
        </li>
    `
}

for( let obj of dataPlayList ){
    playListMenu.insertAdjacentHTML('beforeend', createMenuItem( obj ))
}