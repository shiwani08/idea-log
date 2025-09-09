"use client";

import React from "react";
import Image from "next/image";

const LocationSideBar = () => {
  return (
    <div className="height-auto space-y-4">
        <div>
            Location
        </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium">
          {/* Location */}
        </label>
        <select id="location" className="w-full border rounded p-2">
          <option>Wellington Central, Wellington</option>
        </select>
      </div>

      <div>
        <label htmlFor="workspace" className="block text-sm font-medium">
          {/* Workspace */}
        </label>
        <select id="workspace" className="w-full border rounded p-2">
          <option>Workspace</option>
        </select>
      </div>

      <div className="h-[60vh] overflow-y-scroll space-y-4">
        <div className="rounded-lg overflow-hidden border-2 border-orange-400">
          <div className="relative">
            <Image
              src="/images/download.jpeg"
              alt="image"
              width={400}
              height={200}
              className="w-full h-32 object-cover"
            />

            {/* Badge overlay */}
            <div className="absolute bottom-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Time Slots Available
            </div>
          </div>

          {/* Title below image */}
          <div className="p-2 text-center">
            <h3 className="text-orange-500 font-serif">Conference Room</h3>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border-2 border-orange-400">
          <div className="relative">
            <Image
              src="/images/download.jpeg"
              alt="image"
              width={400}
              height={200}
              className="w-full h-32 object-cover"
            />

            {/* Badge overlay */}
            <div className="absolute bottom-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              22 Seats Available
            </div>
          </div>

          {/* Title below image */}
          <div className="p-2 text-center">
            <h3 className="text-orange-500 font-serif">Hot Desks</h3>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border-2 border-orange-400">
          <div className="relative">
            <Image
              src="/images/download.jpeg"
              alt="image"
              width={400}
              height={200}
              className="w-full h-32 object-cover"
            />

            {/* Badge overlay */}
            <div className="absolute bottom-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              No Availability
            </div>
          </div>

          {/* Title below image */}
          <div className="p-2 text-center">
            <h3 className="text-orange-500 font-serif">Meeting Room A</h3>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border-2 border-orange-400">
          <div className="relative">
            <Image
              src="/images/download.jpeg"
              alt="image"
              width={400}
              height={200}
              className="w-full h-32 object-cover"
            />

            {/* Badge overlay */}
            <div className="absolute bottom-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Time Slots Available
            </div>
          </div>

          {/* Title below image */}
          <div className="p-2 text-center">
            <h3 className="text-orange-500 font-serif">Conference Room</h3>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-orange-400">
          <div className="relative">
            <Image
              src="/images/download.jpeg"
              alt="image"
              width={400}
              height={200}
              className="w-full h-32 object-cover"
            />

            {/* Badge overlay */}
            <div className="absolute bottom-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Time Slots Available
            </div>
          </div>

          {/* Title below image */}
          <div className="p-2 text-center">
            <h3 className="text-orange-500 font-serif">Conference Room</h3>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-orange-400">
          <div className="relative">
            <Image
              src="/images/download.jpeg"
              alt="image"
              width={400}
              height={200}
              className="w-full h-32 object-cover"
            />

            {/* Badge overlay */}
            <div className="absolute bottom-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Time Slots Available
            </div>
          </div>

          {/* Title below image */}
          <div className="p-2 text-center">
            <h3 className="text-orange-500 font-serif">Conference Room</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSideBar;
