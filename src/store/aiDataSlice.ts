// aiDataSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AIResponse } from "../types";

interface AIState {
  data: AIResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: AIState = {
  data: null,
  loading: false,
  error: null,
};

const aiDataSlice = createSlice({
  name: "aiData",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<AIResponse>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  aiDataSlice.actions;

export default aiDataSlice.reducer;
