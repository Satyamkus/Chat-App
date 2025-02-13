import React from 'react'

import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram , Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-0 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/settings" className="hover:text-white">Settings</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white">Profile</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="size-5 hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="size-5 hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/satyam_kus91/" target="_blank" rel="noopener noreferrer">
                <Instagram className="size-5 hover:text-pink-500" />
              </a>
              <a href="https://www.linkedin.com/in/satyam-kus912/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-5 hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Satyam Kus All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




