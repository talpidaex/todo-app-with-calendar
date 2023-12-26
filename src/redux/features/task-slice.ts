import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  username: string;
  uid: string;
  date: string;
};

const initialState = {
  username: "",
  uid: "",
  date: "",
} as InitialState;

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    dummyAction: (state, action: PayloadAction<string>) => {
      console.log("dummy action");
    },
  },
});

export const { dummyAction } = taskSlice.actions;
export default taskSlice.reducer;
