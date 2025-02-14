import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold text-gray-300 py-4 px-6 bg-gradient-to-r from-gray-900 to-black shadow-lg rounded-lg">
                <div className="flex items-center gap-4">
                    <img
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 bg-red-600 p-2 rounded-full cursor-pointer hover:bg-red-700 transition-all transform hover:scale-110 shadow-red-glow"
                        src={assets.arrow_left}
                        alt="Go Back"
                    />
                    <img
                        onClick={() => navigate(1)}
                        className="w-10 h-10 bg-red-600 p-2 rounded-full cursor-pointer hover:bg-red-700 transition-all transform hover:scale-110 shadow-red-glow"
                        src={assets.arrow_right}
                        alt="Go Forward"
                    />
                </div>
                <div className="flex items-center gap-6">
                    <p className="bg-red-600 text-white text-[15px] px-6 py-2 rounded-full cursor-pointer hover:bg-red-700 transition-all shadow-red-glow hidden md:block">
                        welcome baby
                    </p>
                    <p className="bg-gray-800 py-2 px-5 rounded-full text-[15px] cursor-pointer hover:bg-gray-700 transition-all shadow-red-glow">
                        Install App
                    </p>
                    <p className="bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-red-glow">
                        REX
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-6 px-6">
                <p className="bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer shadow-red-glow transition-all hover:bg-red-700">
                    All
                </p>
                <p className="bg-gray-800 text-gray-300 px-6 py-2 rounded-full cursor-pointer hover:bg-gray-700 shadow-red-glow transition-all">
                    Music
                </p>
                <p className="bg-gray-800 text-gray-300 px-6 py-2 rounded-full cursor-pointer hover:bg-gray-700 shadow-red-glow transition-all">
                    Podcasts
                </p>
            </div>
        </>
    );
};

export default Navbar;

