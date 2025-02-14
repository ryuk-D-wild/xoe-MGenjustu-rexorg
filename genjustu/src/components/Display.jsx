import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Display = () => {
    const { albumsData } = useContext(PlayerContext);

    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.split("/").pop() : "";
    const bgColor = isAlbum ? albumsData.find((x) => x._id === albumId)?.bgColour || '#b22222' : "#b22222"; // Dark red fallback for better contrast

    useEffect(() => {
        if (displayRef.current) {
            displayRef.current.style.background = isAlbum
                ? `linear-gradient(to bottom right, ${bgColor}, #8b0000)` // Darker shades for contrast
                : `#8b0000`;
        }
    }, [bgColor, isAlbum]);

    return (
        <div
            ref={displayRef}
            className="w-full m-2 p-6 pt-4 rounded-lg text-white overflow-auto shadow-blue-glow accessible-border lg:w-[75%] lg:ml-0"
        >
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((x) => x._id === albumId)} />} />
            </Routes>
        </div>
    );
};

export default Display;
