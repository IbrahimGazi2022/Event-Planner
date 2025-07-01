import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#122343] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img
                                src="/images/logo.png"
                                alt="Company Logo"
                                className="h-10 w-10"
                            />
                            <h2 className="ml-2 text-2xl font-bold">Event Planner</h2>
                        </div>
                        <p className="text-gray-400">
                            We create unforgettable experiences through exceptional event planning and management services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Important Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Our Team</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Gallery</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Corporate Events</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Wedding Planning</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Conference Management</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Exhibition Planning</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Virtual Events</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Information</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Khulna Sadar, khulna 9100, Bangladesh</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+880 1732 570530</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>coder.ibrahimgazi@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Event Planner | All rights reserved - {' '}
                        <a
                            href="https://ibrahim-the-coder.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Ibrahim The - Coder
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;