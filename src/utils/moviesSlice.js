import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null,
    addPopularMovies:null,
  },
  reducers:{
    addNowPlayingMovies : (state, action) =>{
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) =>{
      state.addPopularMovies = action.payload;
    },
    addTrailerMovie : (state, action) =>{
      state.trailerVideo = action.payload;
    }
  }
})
export const {addNowPlayingMovies, addTrailerMovie, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
