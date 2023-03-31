import axios from "axios"
import { AppDispatch } from "../store"
import { IComp } from "../../models/IUser"
import { userSlice } from "./UserSlice"



export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IComp[]>("http://127.0.0.1:8000/api/comps/")
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (e : any) {
        dispatch(userSlice.actions.usersFetchingError(e.message));
    }
}