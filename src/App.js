// src/App.js
import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import AudioPlayer from './AudioPlayer';

function App() {
  const [showAboutUs, setShowAboutUs] = useState(true);

  const toggleComponent = () => {
    setShowAboutUs((prevShowAboutUs) => !prevShowAboutUs);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Torah Meirah</h1>
        <button onClick={toggleComponent} className="toggle-button">
          {showAboutUs ? 'About' : 'Audio Classes'}

        </button>
      </header>
      <main className="App-main">
        {showAboutUs ? <AudioPlayer/>:  <AboutUs />}

      </main>
    </div>
  );
}

export default App;









// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [text, setText] = useState('Text A');

//   const toggleText = () => {
//     setText((prevText) => (prevText === 'Text A' ? 'Text B' : 'Text A'));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{text}</p>
//         <button onClick={toggleText}>Toggle Text</button>
//       </header>
//     </div>
//   );
// }

// export default App;
