import { View, Text } from "react-native";
import React from "react";
import ProfileView from "../Views/Profile.view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/types";

export type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation }: Props) {
  return <ProfileView navigation={navigation} />;
}
