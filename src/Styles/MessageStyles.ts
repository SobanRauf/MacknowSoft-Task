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
    paddingHorizontal: rw(5),
    paddingTop: rh(5),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: rh(2),
  },
  headerTitle: {
    fontSize: rf(2.5),
    fontWeight: "bold",
  },
  searchIconBox: {
    backgroundColor: "#fff",
    padding: rw(2),
    borderRadius: rw(2),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dateRow: {
    flexDirection: "row",
    marginBottom: rh(2),
  },
  dateBox: {
    backgroundColor: "white",
    borderRadius: rw(4),
    alignItems: "center",
    paddingVertical: rh(4),
    paddingHorizontal: rw(5),
    marginRight: rw(2),
    borderColor: "#e6dbdc",
    borderWidth: 1,
  },
  dateBoxSelected: {
    backgroundColor: "#ff7043",
  },
  dayText: {
    fontSize: rf(1.8),
    color: "#555",
  },
  dayTextSelected: {
    color: "#fff",
  },
  dateText: {
    fontSize: rf(2),
    fontWeight: "bold",
    color: "#000",
  },
  dateTextSelected: {
    color: "#fff",
  },
  userScroll: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: rh(2),
  },
  userItem: {
    alignItems: "center",
    marginRight: rw(4),
    position: "relative",
  },
  userImage: {
    width: rw(16),
    height: rw(16),
    borderRadius: rw(4),
    marginTop: rh(2),
  },
  statusDot: {
    width: rw(3.5),
    height: rw(3.5),
    borderRadius: rw(2),
    position: "absolute",
    bottom: rw(5),
    right: rw(0.5),
    borderWidth: 1,
    borderColor: "#fff",
  },
  userName: {
    fontSize: rf(1.6),
    marginTop: rh(0.5),
  },
  messageCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: rh(2),
    backgroundColor: "#fff",
    borderRadius: rw(2),
    padding: rw(3),
  },
  messageUnread: {
    backgroundColor: "#fde5dd",
  },
  messageImage: {
    width: rw(14),
    height: rw(14),
    borderRadius: rw(7),
    marginRight: rw(3),
  },
  messageTextBox: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  messageName: {
    fontWeight: "bold",
    fontSize: rf(2),
  },
  messageTime: {
    fontSize: rf(1.6),
    color: "#999",
  },
  messageText: {
    fontSize: rf(1.7),
    color: "#666",
  },
  unreadBadge: {
    backgroundColor: "#ff7043",
    borderRadius: rw(3),
    paddingHorizontal: rw(1.5),
    paddingVertical: rh(0.3),
    alignItems: "center",
    justifyContent: "center",
  },
  unreadText: {
    color: "#fff",
    fontSize: rf(1.5),
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    bottom: rh(3),
    right: rw(5),
    backgroundColor: "#ff7043",
    padding: rw(4),
    borderRadius: rw(4),
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
