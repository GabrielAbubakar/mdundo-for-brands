import Image from "next/image";
import React, { useState, useRef } from "react";
import PlayIcon from '../../public/assets/images/PlayIcon.svg'
import PauseIcon from '../../public/assets/images/PauseIcon.svg'
import styles from '../../styles/AudioPlayer.module.scss'


const AudioPlayer = ({ audioLink }) => {

    const audioPlayer = useRef()

    const [isPlaying, setIsPlaying] = useState(false)

    const [currentTime, setCurrentTime] = useState(0)
    const [seekValue, setSeekValue] = useState(0)

    const playPause = () => {

        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }

        setIsPlaying(!isPlaying)
    };

    const onPlaying = () => {
        setCurrentTime(audioPlayer.current.currentTime);
        setSeekValue(
            (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
        );
    };


    return (
        <div className={styles.audioBox}>
            <audio
                onTimeUpdate={onPlaying}
                ref={audioPlayer}
                src={audioLink}>
            </audio>
            <button onClick={playPause}>
                <Image
                    src={isPlaying ? PauseIcon : PlayIcon}
                    alt='play/pause button' />
            </button>
            <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={seekValue}
                onChange={(e) => {
                    if (audioPlayer.current.duration === true) {
                        const seekto = audioPlayer.current.duration * (e.target.value / 100);
                        audioPlayer.current.currentTime = seekto;
                        setSeekValue(e.target.value);
                    } else {
                        console.log('audio not fetched successfully');
                    }
                }}
            />
        </div>
    );
};

export default AudioPlayer;