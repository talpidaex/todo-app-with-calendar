import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  taskName: string;
  taskStatus: "completed" | "incomplete";
};

type SchedulesType = {
  [day: string]: {
    tasks: Task[];
  };
};

const schedules: SchedulesType[] = [];

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    schedules,
  },
  reducers: {
    dummyAction: (state, action: PayloadAction<string>) => {
      console.log("dummy action");
    },
    setTaskToDate: (state, action: PayloadAction<SchedulesType>) => {
      state.schedules = [...state.schedules, action.payload];
    },
  },
});

export const { dummyAction, setTaskToDate } = taskSlice.actions;
export default taskSlice.reducer;
