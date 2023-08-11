import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRandomNumber = createAsyncThunk(
  "randoms", // The URL to fetch
  async () => {
    const response = await fetch(
      "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
    );
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addTax: (state, action) => {
      state.value = state.value * (1 + action.payload / 100);
    },
  },
  extraReducers: {
    [fetchRandomNumber.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, increment, decrement, incrementByAmount, addTax } =
  counterSlice.actions;

export default counterSlice.reducer;
