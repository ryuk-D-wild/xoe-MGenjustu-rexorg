import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const Sidebar = () => {
    const navigate = useNavigate();
    const { createPlaylist } = useContext(PlayerContext); // Function to create a playlist in context
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm) {
            navigate(`/search?query=${searchTerm}`);
        }
    };

    const handleCreatePlaylist = async () => {
        const playlistName = prompt("Enter playlist name:");
        if (playlistName) {
            await createPlaylist(playlistName);
            alert(`Playlist "${playlistName}" created successfully!`);
        }
    };

    return (
        <div className="w-[25%] h-full p-4 flex flex-col gap-4 text-white hidden lg:flex bg-gradient-to-b from-gray-900 to-black shadow-lg shadow-blue-glow">
            <div className="bg-gradient-to-r from-red-700 to-red-900 h-[15%] rounded-lg flex flex-col justify-around shadow-blue-glow p-4">
                <div
                    onClick={() => navigate('/')}
                    className="flex items-center gap-4 pl-4 cursor-pointer hover:text-blue-300 transition duration-200"
                >
                    <img className="w-6" src={assets.home_icon} alt="Home" />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center mt-4 px-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        className="w-full p-2 bg-black rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="ml-2 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
                    >
                        <img className="w-4" src={assets.search_icon} alt="Search" />
                    </button>
                </div>
            </div>
            <div className="bg-gray-900 h-[85%] rounded-lg p-4 shadow-blue-glow">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-300 transition duration-200">
                        <img className="w-8" src={assets.stack_icon} alt="Library" />
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-5 cursor-pointer hover:text-blue-300" src={assets.arrow_icon} alt="Sort" />
                        <img className="w-5 cursor-pointer hover:text-blue-300" src={assets.plus_icon} alt="Add" onClick={handleCreatePlaylist} />
                    </div>
                </div>
                <div className="p-4 bg-gray-800 m-2 rounded-lg shadow-inner shadow-red-glow flex flex-col items-start gap-2">
                    <h1 className="text-lg font-semibold">Create Your First Playlist</h1>
                    <p className="text-gray-400 font-light">It's easy, we’ll help you get started.</p>
                    <button onClick={handleCreatePlaylist} className="px-4 py-2 bg-blue-600 text-white rounded-full mt-4 hover:bg-blue-700 transition duration-200">
                        Create Playlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
