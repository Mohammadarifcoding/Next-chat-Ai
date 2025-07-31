"use client"

import { Ellipsis } from 'lucide-react';
import React, { useState } from 'react';

const DropDown = () => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    return (
            <div className="relative">
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Ellipsis />
      </button>
      {/* Dropdown Menu */}
      {
        isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 hidden z-20">
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
              <i data-lucide="edit" className="w-4 h-4" />
              <span>Rename conversation</span>
            </button>
            <hr className="my-1 opacity-10" />
            <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
              <i data-lucide="trash-2" className="w-4 h-4" />
              <span>Delete conversation</span>
            </button>
          </div>
        )
      }
    </div>
    );
};

export default DropDown;