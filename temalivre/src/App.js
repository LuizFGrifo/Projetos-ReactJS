import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const musicRef = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  }, []);

  const musicClick = () => {
    const music = musicRef.current;
    if (music) {
      music.muted = false;
      music.play();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="rotating-image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="message">{!data ? 'Loading...' : data}</p>
        <button onClick={musicClick}>Play Music</button>
        <audio
          ref={musicRef}
          loop
          className="audio1"
        >
          <source src="/music/gira.mp3" type="audio/mpeg" />
        </audio>
      </header>
    </div>
  );
}

export default App;
