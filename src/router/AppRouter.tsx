import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from '../pages/signIn/SignIn'
import Dashboard from '../pages/dashboard/Dashboard'
import VideoDetails from '../pages/videoDetails/VideoDetails'

const AppRouter = () => {
    return (
        <Routes>

            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/video" element={<VideoDetails />} />


        </Routes>
    )
}

export default AppRouter