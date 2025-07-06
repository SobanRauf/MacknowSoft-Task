import { View, Text } from "react-native";
import React from "react";
import HomeView from "../Views/Home.view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/types";

export type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return <HomeView navigation={navigation} />;
}
