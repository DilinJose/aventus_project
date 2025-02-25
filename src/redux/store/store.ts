import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slice/counterSlice'
import LoginSlice from '../slice/loginSlice'
import VideoListSlice from '../slice/videoListSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: LoginSlice,
        videoList: VideoListSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch