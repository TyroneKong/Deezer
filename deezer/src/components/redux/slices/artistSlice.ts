import { createSlice } from "@reduxjs/toolkit";


const initialStateValue:object = []


export const Artist = createSlice({

    name:"artist",
    initialState:{
        artist:initialStateValue,

    },
    reducers:{
        setArtist:(state, {payload})=>{
            state.artist = payload
        }
    }



})


export const {setArtist} = Artist.actions

export default Artist.reducer