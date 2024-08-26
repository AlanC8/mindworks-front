"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("access");
        if (token) {
          const response = await axios.get(
            "http://localhost:3001/api/v1/auth/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUsername(response.data.username);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="w-full py-4">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-gray-800">MindWorks</h1>
        {username && (
          <span className="text-gray-800 hidden md:inline">
            Welcome, {username}
          </span>
        )}
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-800 md:hidden focus:outline-none"
        >
          <FaBars />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="/trainings" className="text-gray-700 hover:text-blue-500">
            Training
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1" onClick={toggleMenu}></div>
        <div
          className={`flex flex-col w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="self-end p-4 text-gray-700 focus:outline-none"
          >
            <FaTimes />
          </button>
          <nav className="flex flex-col space-y-2 p-4">
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="/trainings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Training
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              About Us
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
          </nav>
          <div className="mt-auto p-4 border-t border-gray-200">
            {username ? (
              <span
                onClick={() => router.push("/profile")}
                className="text-gray-800"
              >
                Logged in as {username}
              </span>
            ) : (
              <a
                href="/login"
                className="block text-center text-blue-500 hover:underline"
              >
                Log In
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
