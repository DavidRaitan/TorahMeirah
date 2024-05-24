// import React from 'react';
// import { audioData } from './Audio/audioData';
// import './AudioPlayer.css';
// import AudioBar from './Audio/bar';

// function AudioPlayer() {
//   return (
//     <>
//       <div>
//         <h1 className='page'>Audio Player</h1>
//         <ul className='items'>
//           {audioData.map((audio, index) => (
//             <li key={index}>
//               <h3 className='audio_titles'>{audio.title}</h3>
//               <AudioBar audioUrl={audio.url} />
//             </li>
//           ))}
//         </ul>
//       </div>
//       <p className='foot'>{'\u2722'} Made by El Tzano {'\u2722'}</p>
//     </>
//   );
// }

// export default AudioPlayer;



//   audioPlayer.js
import React from 'react';
import { audioData } from './Audio/audioData';
import './AudioPlayer.css';
import AudioBar from './Audio/bar';

function AudioPlayer() {
  return (
    <>
      <div>
        <h1 className='page'>Audio Player</h1>
        <ul className='items'>
          {audioData.map((audio, index) => (
            <li key={index}>
              <h3 className='audio_titles'>{audio.title}</h3>
              <AudioBar audioUrl={audio.url} />
            </li>
          ))}
        </ul>
        <p className='page-footer'>{'\u2722'} Made by El Tzano {'\u2722'}</p> {/* Ensuring footer is placed after the list */}
      </div>
    </>
  );
}

export default AudioPlayer;
