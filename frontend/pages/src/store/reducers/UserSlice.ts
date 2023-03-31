import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IComp } from "../../models/IUser"

interface UserState {
    comps: IComp[];
    isLoading: boolean;
    error: string;    
    count: number;
}

const initialState = {
    users: [],
    isLoading: false,
    error: "",
    count: 1000
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       usersFetching(state) {
            state.isLoading = true
       },
       usersFetchingSuccess(state : any, action: PayloadAction<IComp[]>) {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
       },
       usersFetchingError(state : any, action: PayloadAction<IComp[]>) {
            state.isLoading = false;
            state.error = action.payload
       }
    }
})

export default userSlice.reducer