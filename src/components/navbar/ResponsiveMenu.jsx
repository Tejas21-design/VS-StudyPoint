import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gradient-to-b from-violet-950 to-violet-900 px-8 pb-6 pt-24 text-white transition-all duration-300 md:hidden`}
    >
      {/* User / Logo Section */}
      <div className="flex items-center gap-3 border-b border-violet-700 pb-4">
                    <img
                    src={Logo}
                    alt="Vedant Study Point Logo"
                    className="h-10 w-10 object-contain"
                    />
        <div>
          <h1 className="font-bold text-lg">Vedant Study Point</h1>
          <p className="text-sm text-violet-400">Your Calm Space to Study & Succeed</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-8">
        <ul className="space-y-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-violet-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-violet-300 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-violet-300 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-violet-300 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-violet-700 pt-4 text-sm text-violet-300">
        © 2025 Vedant Study Point. All Rights Reserved.
      </div>
    </div>
  );
};

export default ResponsiveMenu;
