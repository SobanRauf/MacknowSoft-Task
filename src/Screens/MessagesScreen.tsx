import { View, Text } from "react-native";
import React from "react";
import MessagesView from "../Views/Messages.view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/types";

export type Props = NativeStackScreenProps<RootStackParamList, "Messages">;

export default function MessagesScreen({ navigation }: Props) {
  return <MessagesView navigation={navigation} />;
}
