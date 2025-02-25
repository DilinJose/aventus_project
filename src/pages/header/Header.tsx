import React, { useState } from 'react'
import {  FaBell, FaSearch, FaUser } from 'react-icons/fa'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: any) => {
        console.log('e', e)
    }
    return (
        <header className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-white transform rotate-45"></div>
                        </div>
                        <h1 className="text-xl font-bold hidden sm:block">YouTube</h1>
                    </div>
                </div>

                <form onSubmit={handleSearch} className="flex flex-1 max-w-xl mx-4">
                    <div className="relative flex flex-1">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-gray-100 border border-l-0 border-gray-300 px-4 rounded-r-full hover:bg-gray-200"
                        >
                            <FaSearch size={18} />
                        </button>
                    </div>
                </form>

                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-200 hidden sm:block">
                        <FaBell size={20} />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <FaUser size={16} />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header