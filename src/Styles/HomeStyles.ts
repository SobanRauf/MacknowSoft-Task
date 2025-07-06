import { StyleSheet } from "react-native";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: rh(5),
    paddingHorizontal: rw(5),
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: rh(2),
  },
  userListContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: rh(2),
  },
  addButton: {
    backgroundColor: "#fde5dd",
    borderRadius: rw(3),
    paddingVertical: rh(4),
    paddingHorizontal: rw(1.5),
    marginRight: rw(2),
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#e76d58",
    fontSize: rf(2.2),
    fontWeight: "bold",
    transform: [{ rotate: "-90deg" }],
  },
  userListScroll: {
    alignItems: "center",
  },
  userCard: {
    alignItems: "center",
    marginHorizontal: rw(2),
    borderColor:"#e76d58",
    borderWidth:0.5,
    borderRadius:rw(3),
    paddingBottom:rw(1),
    backgroundColor:"white"
  },
  userImage: {
    width: rw(16),
    height: rw(16),
    borderRadius: rw(3),
    borderWidth: 1,
    borderColor: "#fcdede",
  },
  userName: {
    marginTop: rh(0.5),
    fontSize: rf(1.8),
  },
  postContainer: {
    flexDirection: "row",
    marginBottom: rh(3),
  },
  sideBar: {
    width: rw(15),
    alignItems: "center",
    paddingTop: rh(1),
  },
  avatar: {
    width: rw(10),
    height: rw(10),
    borderRadius: rw(5),
    marginBottom: rh(1),
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: rh(0.5),
  },
  iconLabel: {
    fontSize: rf(1.6),
    color: "#555",
  },
  postCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: rw(4),
    padding: rw(3),
  },
  postImage: {
    width: "100%",
    height: rh(25),
    borderRadius: rw(3),
    marginBottom: rh(1),
  },
  description: {
    fontSize: rf(2),
    color: "#333",
  },
});
