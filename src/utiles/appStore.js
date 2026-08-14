import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"; // ✅ Yeh add karo

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer, // ✅ Yeh add karo
  },
});

export default appStore;