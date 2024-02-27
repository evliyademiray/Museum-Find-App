import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "N5erZHB5zWXGprA6KgoE3pOmfdZyFONihPXAxTCDYa0w9qAXdCFIdewkbNEK";

export const getData = createAsyncThunk("MüzeVerisi", async (name) => {
  const res = await axios.get(
    `https://www.nosyapi.com/apiv2/service/museum?city=${name}&apiKey=${API_KEY}`
  );
  console.log(res.data.data)
  return res;
});
const initialState = {
  isError: false,
  data: [],
  isLoading: false,
};

export const MuseumSlice = createSlice({
  name: "Müze",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      (state.isLoading = true)
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state) => {
      (state.isError = true), (state.isLoading = false);
    });
  },
});

export default MuseumSlice.reducer;
