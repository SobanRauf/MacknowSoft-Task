import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { users } from "../../utils/data/DummyData";

type User = {
  name: string;
  image: string;
  status: string;
};

type UsersState = {
  users: User[];
};

const initialState: UsersState = {
  users: users,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
