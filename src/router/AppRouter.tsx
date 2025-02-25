import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from '../pages/signIn/SignIn'
import Dashboard from '../pages/dashboard/Dashboard'
import VideoDetails from '../pages/videoDetails/VideoDetails'

const AppRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/video" element={<VideoDetails />} />


        </Routes>
    )
}

export default AppRouter