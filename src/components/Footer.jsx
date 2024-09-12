import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400  w-full py-10 px-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className=''>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <p className="text-sm mb-4">
              Empowering organizations with secure, easy-to-use online voting.
            </p>
            <p className="text-sm">
            All rights reserved  &copy; {new Date().getFullYear()} Kura. 
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div >
            <h3 className="text-white text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="space-x-4 mb- flex flex-row md:justify-center justify-start">
             <div>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
             </div>
              
              <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </a>
              </div>
              
              <div>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
