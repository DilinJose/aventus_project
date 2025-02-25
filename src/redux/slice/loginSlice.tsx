import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getData, postData } from '../../api/services'
import { toast } from 'react-toastify'

export interface LoginState {
    user: object;
    isLoading: boolean;
}

const initialState: LoginState = {
    user: {},
    isLoading: false
}

export const loginUserAction = createAsyncThunk(
    "LOGIN_ACTION",
    async ({ payload, navigate }: { payload: any; navigate: any }, { rejectWithValue }) => {
        try {
            const response: any = await postData("/auth/login", payload);
            console.log('response', response)
            if (response.data.status && response.data.status_code === 200) {
                toast.success('Login Successful');
                localStorage.setItem('token', response.data.data.token);
                navigate("/");
                return response.data.data;
            } else {
                toast.error('Login failed, check credentials');
                return rejectWithValue('Login failed');
            }
        } catch (error) {
            toast.error('An error occurred');
            return rejectWithValue(error);
        }
    }
);


export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAction.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
            })
            .addCase(loginUserAction.rejected, (state) => {
                state.isLoading = false; // Fix: Set to false
            })
    }
})

// Action creators are generated for each case reducer function
export const { } = LoginSlice.actions

export default LoginSlice.reducer