import React from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from "react-native";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import { styles } from "../../Styles/ProfileStyles";

interface Props {
  activeTab: "video" | "gallery" | "like";
  galleryImages: string[];
}

const TabContent = ({ activeTab, galleryImages }: Props) => {
  if (activeTab === "gallery") {
    return (
      <FlatList
        data={galleryImages}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: rh(10) }}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.galleryImage} />
        )}
      />
    );
  }

  return (
    <View style={styles.emptyStateBox}>
      <Text style={styles.emptyStateText}>
        {activeTab === "video" ? "No Videos Available" : "No Likes Yet"}
      </Text>
    </View>
  );
};

export default TabContent;
