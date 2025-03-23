import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null,
    addTrandingMovies:null,
    addPopularMovies:null,
  },
  reducers:{
    addNowPlayingMovies : (state, action) =>{
      state.nowPlayingMovies = action.payload;
    },
    addTrandingMovies : (state, action) =>{
      state.addTrandingMovies= action.payload;
    },
    addPopularMovies: (state, action) =>{
      state.addPopularMovies = action.payload;
    },
    addTrailerMovie : (state, action) =>{
      state.trailerVideo = action.payload;
    },
    addUpCommingMovies : (state, action) =>{
      state.upCommingMovies = action.payload;
    }

  }
})
export const {addNowPlayingMovies, addTrailerMovie, addPopularMovies, addTrandingMovies, addUpCommingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
