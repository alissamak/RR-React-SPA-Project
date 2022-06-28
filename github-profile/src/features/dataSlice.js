import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setData: (state, action) => {
            return {...state, apiData: action.payload}
        },
    }
})

export const {setData} = dataSlice.actions

export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://api.github.com/users/alissamak/${state.data}`)
        const rData = await response.json()
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer