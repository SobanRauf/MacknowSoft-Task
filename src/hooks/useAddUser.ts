import { View, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

export default function useAddUser() {
  const dispatch = useDispatch();
  const handleAddUser = () => {
    const newUser = {
      name: "Julie",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      status: "active",
    };
    dispatch(addUser(newUser));
  };
  return { handleAddUser };
}
