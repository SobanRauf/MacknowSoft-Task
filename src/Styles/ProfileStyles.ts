import { StyleSheet } from "react-native";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  editIconBox: {
    backgroundColor: "#fff",
    padding: rw(2),
    borderRadius: rw(2),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: rh(2),
    paddingHorizontal: rw(2),
  },
  profileImage: {
    width: rw(24),
    height: rw(30),
    borderRadius: rw(5),
    marginRight: rw(4),
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: rf(2.4),
    fontWeight: "bold",
    marginBottom: rh(0.5),
  },
  username: {
    fontSize: rf(1.8),
    color: "#888",
    marginBottom: rh(1.5),
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: rh(2),
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: rf(2.2),
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: rf(1.6),
    color: "#666",
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: rh(2),
    backgroundColor: "#fceee9",
    paddingVertical: rh(1.2),
    borderRadius: rw(3),
  },
  tabItem: {
    paddingHorizontal: rw(6),
    paddingVertical: rh(1.5),
    borderRadius: rw(3),
  },
  tabItemActive: {
    backgroundColor: "#ff7043",
  },
  tabText: {
    fontSize: rf(1.9),
    color: "#666",
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  galleryImage: {
    width: rw(42),
    height: rw(55),
    borderRadius: rw(3),
    marginBottom: rh(2),
  },
  emptyStateBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyStateText: {
    fontSize: rf(2),
    color: "#999",
  },
  skeletonBox: {
    width: rw(42),
    height: rw(42),
    borderRadius: rw(3),
    marginBottom: rh(2),
    backgroundColor: '#e0e0e0',
    opacity: 0.6,
  },
});
