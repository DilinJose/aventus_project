import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store';
import { getRelativeTime } from '../../utils/time';

const VideoDetails = () => {
    const selectedVideo = useSelector((state: RootState) => state.videoList.videoDetails);
    
    if (!selectedVideo) {
        return <div className="w-full h-full flex items-center justify-center">
            <p className="text-lg text-gray-500">No video selected</p>
        </div>;
    }
    
    return (
        <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="w-full">
                <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
                    <video
                        src={selectedVideo.video_link}
                        controls
                        className="w-full h-full object-cover"
                        poster="/api/placeholder/640/360"
                    />
                </div>
                
                <div className="mt-4 w-full">
                    <h2 className="text-xl md:text-2xl font-semibold">{selectedVideo.title}</h2>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-4">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="font-medium">{selectedVideo.channel_title}</p>
                                <p className="text-sm text-gray-600">@{selectedVideo.channel_name}</p>
                            </div>
                        </div>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>
                    
                    <div className="mt-4 bg-gray-100 p-4 rounded-lg w-full">
                        <p className="text-sm font-medium">{getRelativeTime(selectedVideo.created_date)} • {Math.floor(Math.random() * 50) + 1}K views</p>
                        <p className="mt-2 whitespace-pre-wrap">{selectedVideo.description}</p>
                    </div>
                </div>

                <div className="mt-8 w-full">
                    <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
                    {/* Related videos content will go here */}
                </div>
            </div>
        </div>
    )
}

export default VideoDetails