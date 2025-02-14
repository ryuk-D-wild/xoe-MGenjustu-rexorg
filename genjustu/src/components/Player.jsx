import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
    const {
        track,
        seekBar,
        seekBg,
        playStatus,
        play,
        pause,
        time,
        previous,
        next,
        seekSong,
        audioRef, // Assuming this ref points to the audio element
    } = useContext(PlayerContext);

    const [volume, setVolume] = useState(0.5); // Initialize volume to 50%

    // Adjust volume of the audio element whenever the `volume` state changes
    useEffect(() => {
        if (audioRef?.current) {
            audioRef.current.volume = volume;
        }
    }, [volume, audioRef]);

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    return track ? (
        <div className="h-[15%] bg-gradient-to-br from-gray-900 to-black text-cyan-300 px-6 py-4 flex justify-between items-center shadow-2xl rounded-xl">
            {/* Track Info */}
            <div className="hidden lg:flex items-center gap-6">
                <img className="w-16 rounded-lg shadow-lg neon-glow" src={track.image} alt="album-cover" />
                <div>
                    <p className="text-lg font-bold tracking-wide">{track.name}</p>
                    <p className="text-xs text-gray-400">{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center">
                <div className="flex gap-6">
                    <img className="w-6 hover:scale-110 transition-transform cursor-pointer neon-glow" src={assets.shuffle_icon} alt="Shuffle" />
                    <img onClick={previous} className="w-6 hover:scale-110 transition-transform cursor-pointer neon-glow" src={assets.prev_icon} alt="Previous" />
                    {playStatus ? (
                        <img onClick={pause} className="w-8 neon-glow cursor-pointer transition-transform hover:scale-110" src={assets.pause_icon} alt="Pause" />
                    ) : (
                        <img onClick={play} className="w-8 neon-glow cursor-pointer transition-transform hover:scale-110" src={assets.play_icon} alt="Play" />
                    )}
                    <img onClick={next} className="w-6 neon-glow cursor-pointer transition-transform hover:scale-110" src={assets.next_icon} alt="Next" />
                    <img className="w-6 neon-glow cursor-pointer transition-transform hover:scale-110" src={assets.loop_icon} alt="Loop" />
                </div>
                <div className="flex items-center gap-4 mt-2">
                    <p className="text-xs">{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-700 h-1 rounded-full cursor-pointer neon-bar">
                        <hr ref={seekBar} className="h-1 bg-cyan-500 w-0 rounded-full" />
                    </div>
                    <p className="text-xs">{track.duration}</p>
                </div>
            </div>

            {/* Volume Control */}
            <div className="hidden lg:flex items-center gap-3 opacity-75">
                <img className="w-5 neon-glow cursor-pointer" src={assets.speaker_icon} alt="Speaker" />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 bg-gray-700 neon-bar"
                />
                <img className="w-5 neon-glow cursor-pointer" src={assets.mini_player_icon} alt="Mini Player" />
                <img className="w-5 neon-glow cursor-pointer" src={assets.zoom_icon} alt="Zoom" />
            </div>
        </div>
    ) : null;
};

export default Player;
