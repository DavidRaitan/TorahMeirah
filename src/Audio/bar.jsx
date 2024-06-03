import '../css/audioBar.css';
import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function AudioBar({ audioUrl, onError = null }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedData = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadeddata', handleLoadedData);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('loadeddata', handleLoadedData);
        }
      };
    }
  }, [audioRef.current]);

  useEffect(() => {
    const handleError = () => {
      if (onError) {
        onError();
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('error', handleError);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, [audioUrl, onError]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changePlaybackSpeed = (speed) => {
    setPlaybackSpeed(speed);
    audioRef.current.playbackRate = speed;
    setDropdownVisible(false);
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const clickPercentage = clickPosition / progressBar.clientWidth;
    const newTime = clickPercentage * duration;
    audioRef.current.currentTime = newTime;
  };

  const playbackSpeedOptions = [
    { value: 0.75, label: '0.75x' },
    { value: 1, label: 'Normal' },
    { value: 1.2, label: '1.2x' },
    { value: 1.5, label: '1.5x' },
    { value: 1.7, label: '1.7x' },
    { value: 2, label: '2x' },
    { value: 2.2, label: '2.2x' },
    { value: 2.5, label: '2.5x' },
    { value: 2.7, label: '2.7x' },
    { value: 3, label: '3x' },
  ];

  const timePassed = formatTime(currentTime);
  const timeRemaining = formatTime(duration - currentTime);

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioUrl} type="audio/mpeg"></audio>
      <div className="controls">
        <div className="playback-controls">
          <button onClick={toggleAudio} className="play-pause">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div className="time-passed">{timePassed}</div>
          <div className="progress-bar" onClick={handleProgressBarClick}>
            <div
              className="progress"
              style={{
                width: `${(currentTime / duration) * 100}%`,
              }}
            ></div>
            <div
              className="progress-dot"
              style={{
                left: `${(currentTime / duration) * 100}%`,
              }}
            ></div>
          </div>
          <div className="time-remaining">{timeRemaining}</div>
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setDropdownVisible(!dropdownVisible)}>
            {playbackSpeed.toFixed(2)}x
          </button>
          <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
            {playbackSpeedOptions.map((option, i) => (
              <button
                key={i}
                onClick={() => changePlaybackSpeed(option.value)}
                className={playbackSpeed === option.value ? 'selected' : ''}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioBar;
