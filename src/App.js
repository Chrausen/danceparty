import './App.css';
import YouTube from "react-youtube";
import {useEffect, useState} from "react";

let opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        controls: 0,
        disablekb: true,
        iv_load_policy: 3,
        showinfo: 0,
        modestbranding: 1,
        autoplay: 1,
        fs: 0,
        start: 15
    }
}

const youtubeList = [
    'PzP1XC51kro',
    '2DUnhKARTYc',
    'EQPRFqHKZhg',
    'pY6HWA68kk4',
    'BErcwoPU1Xo'
]


function App() {
    const [currentID, setCurrentID] = useState('')

    useEffect(() => {
        nextSong()
        setCurrentID(youtubeList[getRandomInt(youtubeList.length)])
    }, [])

    function nextSong() {
        setCurrentID(youtubeList[getRandomInt(youtubeList.length)])
    }

    function _onReady(event, number) {
            event.target.setVolume(0);
            event.target.playVideo();

    }

    return (
        <div className="App">
            <div onClick={nextSong} className="overlay"/>
            <div className="youtubewrapper" >
                <YouTube
                    containerClassName="App"
                    videoId={currentID}
                    opts={opts}
                    onReady={(e) => _onReady(e, 1)}
                    onEnd={nextSong}
                />
            </div>
        </div>
    );
}




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


export default App;
