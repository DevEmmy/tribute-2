import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Tribute from './Components/Tribute';
import Gallery from './Components/Gallery';
import audio from './Components/images/audio.mpeg'
function App() {
    const audioRef = useRef()
  const [play, setPlay] = useState(true)

  const playAudio = ()=>{
    if(play){
      audioRef?.current?.play()
    }
  }
  return (
    <div onScroll={playAudio}>
      <Header />
      <Banner />
      <Gallery />
      <Tribute />

      <audio src={audio} ref={audioRef} autoPlay="" loop controls muted={false} onLoad={playAudio}/>
    </div>
    
  );
}

export default App;
