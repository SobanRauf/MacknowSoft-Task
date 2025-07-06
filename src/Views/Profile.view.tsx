import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import TabContent from "../Components/ui/TabContent";
import { styles } from "../Styles/ProfileStyles";
import { Props } from "../Screens/ProfileScreen";
import { galleryImages } from "../utils/data/DummyData";

type HomeViewProps = {
  navigation: Props["navigation"];
};

const ProfileView = ({ navigation }: HomeViewProps) => {
  const [activeTab, setActiveTab] = useState<"video" | "gallery" | "like">(
    "gallery"
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={rf(3)} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.editIconBox}>
          <Ionicons name="pencil" size={rf(2.5)} color="#000" />
        </View>
      </View>

      {/* Profile Info - Horizontal Layout */}
      <View style={styles.profileBox}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/81.jpg" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Mackenzie</Text>
          <Text style={styles.username}>@mackenzie</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>325</Text>
              <Text style={styles.statLabel}>Friends</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>7.5k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>412</Text>
              <Text style={styles.statLabel}>Followings</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {["video", "gallery", "like"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
            onPress={() => setActiveTab(tab as typeof activeTab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View style={{ flex: 1 }}>
        <TabContent activeTab={activeTab} galleryImages={galleryImages} />
      </View>
    </View>
  );
};

export default ProfileView;
