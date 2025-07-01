import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="absolute top-2 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="Event Planner Logo" className="w-10 h-10" />
                        <h2 className="text-2xl font-bold text-white">Event Planner</h2>
                    </div>

                    {/* Main Menu */}
                    <div className="hidden md:flex gap-6">
                        <a href="/" className="text-white hover:text-blue-600 px-3 py-2 font-medium">Home</a>
                        <a href="/events" className="text-white hover:text-blue-600 px-3 py-2 font-medium">Events</a>
                        <a href="/add-event" className="text-white hover:text-blue-600 px-3 py-2 font-medium">Add Event</a>
                        <a href="/my-event" className="text-white hover:text-blue-600 px-3 py-2 font-medium">My Event</a>
                    </div>

                    {/* Sign In Button */}
                    <div className="hidden md:block">
                        <Link to="/login">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 transform hover:scale-105">
                                Sign In
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-blue-600 focus:outline-none transition duration-300" aria-label="Toggle menu">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm pb-3 px-4 shadow-lg">
                    <div className="flex flex-col space-y-3">
                        <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium border-b border-gray-100 mt-4">Home</a>
                        <a href="/events" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium border-b border-gray-100">Events</a>
                        <a href="/add-event" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium border-b border-gray-100">Add Event</a>
                        <a href="/my-event" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium border-b border-gray-100">My Event</a>
                        <a href="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium border-b border-gray-100">Sign In</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;