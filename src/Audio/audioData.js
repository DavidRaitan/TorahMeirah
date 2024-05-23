// src/audioData.js

import GetTodaysDaf from "./classes/gmara";
import GetTodaysMishnaChapter from "./classes/mishan";
import GetTodaysTanachChapter from "./classes/tanachAudio";


export const audioData = [
    { title: "Tanach", url: "" },
    { title: "Mishnah", url: "" },
    { title: "Rambam", url: "" },
    { title: "Gemara", url: "" },
  ];
  
  const today = new Date();
  const starting_date = new Date('2024-03-26');
  const daysPassed = Math.floor((today - starting_date) / (1000 * 60 * 60 * 24));
  
  audioData[0].url = GetTodaysTanachChapter()

  audioData[1].url = GetTodaysMishnaChapter()

  audioData[2].url = `https://www.chabad.fm/rambam/shiur${daysPassed}.mp3`;
  
  audioData[3].url = GetTodaysDaf().url1;
  

  
  

  