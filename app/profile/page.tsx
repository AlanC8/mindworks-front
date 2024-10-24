"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaSave } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("access");
        if (token) {
          const response = await axios.get("http://localhost:3001/api/v1/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(response.data);
        } else {
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("access");
      if (token) {
        const response = await axios.put("http://localhost:3001/api/v1/auth/update", userData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.user);
        setEditMode(false);
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update profile.");
    }
  };

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <p className="text-red-500 font-semibold text-lg">Failed to load user data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Profile</h1>
        <div className="space-y-6">
          <ProfileItem label="Username" value={userData.username} name="username" editMode={editMode} onChange={handleChange} />
          <ProfileItem label="Email" value={userData.email} name="email" editMode={editMode} onChange={handleChange} />
          <ProfileItem label="Gender" value={userData.gender} name="gender" editMode={editMode} onChange={handleChange} />
          <ProfileItem label="Age" value={userData.age} name="age" editMode={editMode} onChange={handleChange} />
          <ProfileItem label="Education" value={userData.education} name="education" editMode={editMode} onChange={handleChange} />
          <ProfileItem label="Work" value={userData.work} name="work" editMode={editMode} onChange={handleChange} />
        </div>
        <div className="mt-8 text-center">
          {editMode ? (
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
              onClick={handleSave}
            >
              <FaSave className="inline-block mr-2" />
              Save Changes
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
              onClick={() => setEditMode(true)}
            >
              <FaEdit className="inline-block mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

type ProfileItemProps = {
  label: string;
  value: string;
  name: string;
  editMode: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProfileItem = ({ label, value, name, editMode, onChange }: ProfileItemProps) => (
  <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-blue-100 rounded-lg p-4 shadow-md">
    <div className="flex items-center w-full justify-between">
      <div>
        <span className="text-lg font-medium text-gray-700">{label}</span>
        {editMode ? (
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="mt-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        ) : (
          <span className="block text-lg text-gray-900 font-semibold mt-1">{value}</span>
        )}
      </div>
    </div>
  </div>
);

export default Profile;
