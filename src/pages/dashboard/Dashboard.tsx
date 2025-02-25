// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from '../../redux/store/store'
// import { getVideoList, VideoListType } from '../../redux/slice/videoListSlice';
// import {
//     FaHome,
//     FaCompass,
//     FaClock,
//     FaThumbsUp,
//     FaBars,
//     FaTimes,
//     FaBell,
//     FaUser,
//     FaSearch,
//     FaChevronLeft,
//     FaChevronRight
// } from 'react-icons/fa';
// const categories = [
//     "All", "Gaming", "Cooking", "Science", "Travel",
//     "Technology", "Health", "Fashion", "Music", "Education"
// ];

// const Dashboard = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const [videos, setVideos] = useState<VideoListType[]>([]);
//     const [activeCategory, setActiveCategory] = useState("All");
//     const [searchQuery, setSearchQuery] = useState("");
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [selectedVideo, setSelectedVideo] = useState(null);
//     const videoListdata = useSelector((state: RootState) => state.videoList.videoList)
//     const videoData = videoListdata.results.data

//     useEffect(() => {
//         const payload = {
//             page: 1,
//             limit: 10
//         }
//         dispatch(getVideoList(payload))
//     }, [])


//     // Function to format date to relative time
//     const getRelativeTime = (dateString) => {
//         const date = new Date(dateString);
//         const now = new Date();
//         const diff = now.getTime() - date.getTime();

//         const days = Math.floor(diff / (1000 * 60 * 60 * 24));

//         if (days === 0) return "Today";
//         if (days === 1) return "Yesterday";
//         if (days < 7) return `${days} days ago`;
//         if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
//         if (days < 365) return `${Math.floor(days / 30)} months ago`;
//         return `${Math.floor(days / 365)} years ago`;
//     };

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const handleVideoSelect = (video) => {
//         setSelectedVideo(video);
//         window.scrollTo(0, 0);
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         // Filter videos based on search query
//         if (searchQuery) {
//             const filtered = videoData.filter(
//                 video => video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     video.channel_name.toLowerCase().includes(searchQuery.toLowerCase())
//             );
//             setVideos(filtered);
//         } else {
//             setVideos(videoData);
//         }
//     };

//     const handleCategoryClick = (category) => {
//         setActiveCategory(category);
//         if (category === "All") {
//             setVideos(videoData);
//         } else {
//             // This is just a simulation - in a real app you'd filter by actual categories
//             const filtered = videoData.filter(
//                 video => video.channel_name.toLowerCase().includes(category.toLowerCase())
//             );
//             setVideos(filtered.length > 0 ? filtered : videoData);
//         }
//     };

//     return (
//         <div className="flex flex-col min-h-screen bg-gray-100">
//             {/* Header */}
//             <header className="sticky top-0 z-10 bg-white shadow-sm">
//                 <div className="flex items-center justify-between px-4 py-2">
//                     <div className="flex items-center space-x-4">
//                         <button
//                             onClick={toggleSidebar}
//                             className="p-2 rounded-full hover:bg-gray-200"
//                         >
//                             <FaBars size={20} />
//                         </button>
//                         <div className="flex items-center space-x-1">
//                             <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//                                 <div className="w-4 h-4 bg-white transform rotate-45"></div>
//                             </div>
//                             <h1 className="text-xl font-bold hidden sm:block">YouTube</h1>
//                         </div>
//                     </div>

//                     <form onSubmit={handleSearch} className="flex flex-1 max-w-xl mx-4">
//                         <div className="relative flex flex-1">
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                             />
//                             <button
//                                 type="submit"
//                                 className="bg-gray-100 border border-l-0 border-gray-300 px-4 rounded-r-full hover:bg-gray-200"
//                             >
//                                 <FaSearch size={18} />
//                             </button>
//                         </div>
//                     </form>

//                     <div className="flex items-center space-x-4">
//                         <button className="p-2 rounded-full hover:bg-gray-200 hidden sm:block">
//                             <FaBell size={20} />
//                         </button>
//                         <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
//                             <FaUser size={16} />
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             <div className="flex flex-1">
//                 {/* Sidebar */}
//                 <aside
//                     className={`fixed top-0 left-0 z-20 w-64 h-full bg-white transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//                         } md:translate-x-0 md:static md:w-20 lg:w-64 pt-16 shadow-md overflow-hidden`}
//                 >
//                     <div className="md:hidden absolute top-4 right-4">
//                         <button
//                             onClick={toggleSidebar}
//                             className="p-2 rounded-full hover:bg-gray-200"
//                         >
//                             <FaTimes size={20} />
//                         </button>
//                     </div>

//                     <nav className="p-2">
//                         <ul className="space-y-1">
//                             <li>
//                                 <a href="#" className="flex items-center justify-center lg:justify-start p-3 rounded-lg hover:bg-gray-100">
//                                     <FaHome size={20} />
//                                     <span className="ml-4 hidden lg:block">Home</span>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="flex items-center justify-center lg:justify-start p-3 rounded-lg hover:bg-gray-100">
//                                     <FaCompass size={20} />
//                                     <span className="ml-4 hidden lg:block">Explore</span>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="flex items-center justify-center lg:justify-start p-3 rounded-lg hover:bg-gray-100">
//                                     <FaClock size={20} />
//                                     <span className="ml-4 hidden lg:block">History</span>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="flex items-center justify-center lg:justify-start p-3 rounded-lg hover:bg-gray-100">
//                                     <FaThumbsUp size={20} />
//                                     <span className="ml-4 hidden lg:block">Liked Videos</span>
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </aside>

//                 {/* Main Content */}
//                 <main className="flex-1 p-4 md:ml-0">
//                     {selectedVideo ? (
//                         <div className="mb-8">
//                             <div className="aspect-video bg-black rounded-lg overflow-hidden">
//                                 <video
//                                     src={selectedVideo.video_link}
//                                     controls
//                                     className="w-full h-full"
//                                     poster="/api/placeholder/640/360"
//                                 />
//                             </div>
//                             <div className="mt-4">
//                                 <h2 className="text-xl font-semibold">{selectedVideo.title}</h2>
//                                 <div className="flex items-center justify-between mt-2">
//                                     <div className="flex items-center">
//                                         <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
//                                         <div>
//                                             <p className="font-medium">{selectedVideo.channel_title}</p>
//                                             <p className="text-sm text-gray-600">@{selectedVideo.channel_name}</p>
//                                         </div>
//                                     </div>
//                                     <button className="bg-red-600 text-white px-4 py-2 rounded-full font-medium">
//                                         Subscribe
//                                     </button>
//                                 </div>
//                                 <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//                                     <p className="text-sm font-medium">{getRelativeTime(selectedVideo.created_date)} • 10K views</p>
//                                     <p className="mt-2">{selectedVideo.description}</p>
//                                 </div>
//                             </div>

//                             <div className="mt-8">
//                                 <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
//                             </div>
//                         </div>
//                     ) : null}

//                     {/* Categories Scrollbar */}
//                     <div className="mb-6 overflow-x-auto py-2 -mx-4 px-4 whitespace-nowrap sticky top-14 bg-white z-10 flex items-center">
//                         <button className="p-1 mr-2 rounded-full bg-gray-100 hidden sm:block">
//                             <FaChevronLeft size={16} />
//                         </button>
//                         {categories.map((category, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => handleCategoryClick(category)}
//                                 className={`px-3 py-1 mx-1 rounded-full text-sm font-medium ${activeCategory === category
//                                         ? 'bg-black text-white'
//                                         : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                                     }`}
//                             >
//                                 {category}
//                             </button>
//                         ))}
//                         <button className="p-1 ml-2 rounded-full bg-gray-100 hidden sm:block">
//                             <FaChevronRight size={16} />
//                         </button>
//                     </div>

//                     {/* Video Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                         {videos.map((video) => (
//                             <div
//                                 key={video.id}
//                                 className="rounded-lg overflow-hidden cursor-pointer"
//                                 onClick={() => handleVideoSelect(video)}
//                             >
//                                 <div className="aspect-video bg-gray-200 relative">
//                                     <img
//                                         src="/api/placeholder/320/180"
//                                         alt={video.title}
//                                         className="w-full h-full object-cover"
//                                     />
//                                     <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
//                                         3:45
//                                     </div>
//                                 </div>
//                                 <div className="p-2">
//                                     <div className="flex">
//                                         <div className="w-9 h-9 rounded-full bg-gray-300 mr-2 flex-shrink-0"></div>
//                                         <div>
//                                             <h3 className="font-medium line-clamp-2">{video.title}</h3>
//                                             <p className="text-sm text-gray-600 mt-1">{video.channel_title}</p>
//                                             <p className="text-xs text-gray-500">
//                                                 {Math.floor(Math.random() * 50) + 1}K views • {getRelativeTime(video.created_date)}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </main>
//             </div>
//         </div>)
// }

// export default Dashboard


import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    FaHome,
    FaCompass,
    FaClock,
    FaThumbsUp,
    FaBars,
    FaTimes,
    FaBell,
    FaUser,
    FaSearch,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import { getVideoList, setVideoDetails, VideoListType } from '../../redux/slice/videoListSlice';
import { RootState } from '../../redux/store/store';
import Header from '../header/Header';
import { getRelativeTime } from '../../utils/time';
import { useNavigate } from 'react-router';

// Categories for filter bar
const categories = [
    "All", "Gaming", "Cooking", "Science", "Travel",
    "Technology", "Health", "Fashion", "Music", "Education"
];

const YoutubeClone = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const videoListdata = useSelector((state: RootState) => state.videoList.videoList);
    const videoData = videoListdata?.results?.data || [];

    const [filteredVideos, setFilteredVideos] = useState<VideoListType[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Initial data fetch
    useEffect(() => {
        const payload = {
            page: currentPage,
            limit: 10
        };
        dispatch(getVideoList(payload));
    }, [dispatch, currentPage]);

    // Update filtered videos when videoData changes
    useEffect(() => {
        if (videoData && videoData.length > 0) {
            setFilteredVideos(videoData);
        }
    }, [videoData]);

    const handleVideoSelect = (video: VideoListType) => {
        dispatch(setVideoDetails(video))
        navigate("/video")
    };



    const handleCategoryClick = useCallback((category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilteredVideos(videoData);
        } else {
            const filtered = videoData.filter(
                video => video.channel_name.toLowerCase().includes(category.toLowerCase())
            );
            setFilteredVideos(filtered.length > 0 ? filtered : videoData);
        }
    }, [videoData]);

    const loadMoreVideos = useCallback(() => {
        setCurrentPage(prevPage => prevPage + 1);
    }, []);


    // If data is still loading
    if (!videoData || videoData.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex">
                {/* Main Content */}
                <main className="flex-1 p-4 md:ml-0">
                    {/* Categories Scrollbar */}
                    <div className="mb-6 overflow-x-auto py-2 -mx-4 px-4 whitespace-nowrap sticky top-14 bg-white z-10 flex items-center">
                        <button className="p-1 mr-2 rounded-full bg-gray-100 hidden sm:block">
                            <FaChevronLeft size={16} />
                        </button>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                className={`px-3 py-1 mx-1 rounded-full text-sm font-medium ${activeCategory === category
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                        <button className="p-1 ml-2 rounded-full bg-gray-100 hidden sm:block">
                            <FaChevronRight size={16} />
                        </button>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredVideos.map((video) => (
                            <div
                                key={video.id}
                                className="rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                                onClick={() => handleVideoSelect(video)}
                            >
                                <div className="aspect-video bg-gray-200 relative">
                                    <video
                                        src={video.video_link}
                                        poster={video.thumbnail}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onMouseEnter={(e) => e.target.play()}
                                        onMouseLeave={(e) => {
                                            e.target.pause();
                                            e.target.currentTime = 0;
                                        }}
                                        muted
                                    />
                                </div>
                                <div className="p-2">
                                    <div className="flex">
                                        <div className="w-9 h-9 rounded-full bg-gray-300 mr-2 flex-shrink-0"></div>
                                        <div>
                                            <h3 className="font-medium line-clamp-2">{video.title}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{video.channel_title}</p>
                                            <p className="text-xs text-gray-500">
                                                {Math.floor(Math.random() * 50) + 1}K views • {getRelativeTime(video.created_date)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* </div> */}

                    {/* Load More Button */}
                    {videoListdata?.links?.next && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={loadMoreVideos}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </main>
            </div >
        </div >
    );
};

export default YoutubeClone;