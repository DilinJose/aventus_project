import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getData } from '../../api/services'


export interface VideoListType {
    id: number;
    title: string;
    description: string;
    is_active: boolean;
    thumbnail: string;
    video: string;
    video_link: string;
    created_date: string;
    modified_date: string;
    channel_name: string;
    channel_title: string;
    channel_description: string;
}

interface ResultDataType {
    data: VideoListType[];
}



interface ResultType {
    count: number;
    links: { next: string, previous: string };
    results: ResultDataType;
}

export interface LoginState {
    videoDetails: VideoListType;
    videoList: ResultType;
    isLoading: boolean;
}

const initialState: LoginState = {
    videoDetails: {
        id: 0,
        title: "",
        description: "",
        is_active: false,
        thumbnail: "",
        video: "",
        video_link: "",
        created_date: "",
        modified_date: "",
        channel_name: "",
        channel_title: "",
        channel_description: "",
    },
    videoList: {
        count: 0,
        links: { next: "", previous: "" },
        results: []
    },
    isLoading: false
}

export const getVideoList = createAsyncThunk(
    "GET_VIDEO_LIST",
    async (payload: { search?: string, page?: number, limit?: number }, { rejectWithValue }) => {
        const { search, page, limit } = payload;
        try {
            const response: any = await getData(`/feeds/get-videos?page=${page}&limit=${limit}`, payload);
            if (response.data.status && response.data.status_code === 200) {
                return response.data.data;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const VideoListSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setVideoDetails: (state, action) => {
            state.videoDetails = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getVideoList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVideoList.fulfilled, (state, action) => {
                state.isLoading = false
                state.videoList = action.payload
            })
            .addCase(getVideoList.rejected, (state) => {
                state.isLoading = false; // Fix: Set to false
            })
    }
})

// Action creators are generated for each case reducer function
export const { setVideoDetails } = VideoListSlice.actions

export default VideoListSlice.reducer