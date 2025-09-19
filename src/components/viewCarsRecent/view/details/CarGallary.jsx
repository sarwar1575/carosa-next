"use client";
import React, { useState } from "react";
import carData from "../../../../data/CarShowcase";

// Sidebar images (public/assets/... se)
const sidebarItems = [
  { name: "Exterior", icon: "/assets/carImage/exterior.avif" },
  { name: "Interior", icon: "/assets/carImage/interior.avif" },
  { name: "Tyres", icon: "/assets/cardimages/tyres-icon.jpg" },
  { name: "Attractions", icon: "/assets/cardimages/attraction-icon.jpg" },
  { name: "Videos", icon: "/assets/cardimages/videos-icon.jpg" },
];

const CarGallery = () => {
  const [activeTab, setActiveTab] = useState("Exterior");

  return (
    <div className="flex h-screen border rounded-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-24 bg-blue-900 flex flex-col items-center py-4 space-y-4">
        {sidebarItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`flex flex-col items-center p-2 rounded-lg w-full transition ${
              activeTab === item.name
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-800"
            }`}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-12 h-12 rounded-md object-cover mb-1 border border-white"
            />
            <span className="text-xs text-white">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {activeTab !== "Videos" ? (
            carData[activeTab].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${activeTab} ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow"
              />
            ))
          ) : (
            carData.Videos.map((item, i) =>
              item.type === "youtube" ? (
                <iframe
                  key={i}
                  src={item.src}
                  className="w-full h-60 rounded-lg shadow"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  key={i}
                  src={item.src}
                  alt={`Video Thumbnail ${i + 1}`}
                  className="w-full h-60 object-cover rounded-lg shadow"
                />
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CarGallery;
