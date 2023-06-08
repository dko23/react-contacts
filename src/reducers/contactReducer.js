import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    users: [
      { name: "Daniel", phone: "049934303", location: "Accra" },
      { name: "John", phone: "0894634303", location: "Kumasi" },
    ],
  },
  reducers: {
    contactUser: (state, action) => {
      state.users.push(action.payload);
    },
   
  },
});

export const { contactUser } = contactSlice.actions;
export default contactSlice.reducer;



