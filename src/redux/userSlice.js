import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  user: null,
};
// gom action, constans, reducer vào 1 chung nơi gọi là slice
let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // định nghĩa các action
    setLogin: (state, action) => {
      state.user = action.payload;
      //   ko cần return về object mới khi dùng toolkit
    },
    removeLogin: (state, actio) => {
      state.user = null;
    },
  },
});

export let { setLogin, removeLogin } = userSlice.actions;
export default userSlice.reducer;
