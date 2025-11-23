import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvSerialsReducer from "./tvSerialSlice";
import gptReducer from "./GptSlice";
import configReducer from "./ConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvSerials: tvSerialsReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
