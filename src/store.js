import { configureStore } from "@reduxjs/toolkit";
import MuseumSlice from "./Redux/MuseumSlice";

const store = configureStore({
    reducer:{MuseumSlice}
})

export default store;