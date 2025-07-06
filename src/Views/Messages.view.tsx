import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../Styles/MessageStyles";
import { messages, users } from "../utils/data/DummyData";
import { Props } from "../Screens/MessagesScreen";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { generateCurrentWeekDates } from "../utils/functions/generateCurrentWeek";

type MessageViewProps = {
  navigation: Props["navigation"];
};

const MessagesView = ({ navigation }: MessageViewProps) => {
  const users = useSelector((state: RootState) => state.users.users);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(
    today.getDate().toString().padStart(2, "0")
  );
  const dates = generateCurrentWeekDates();
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={rf(3)} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Message</Text>
        <View style={styles.searchIconBox}>
          <Ionicons name="search" size={rf(2.5)} color="#000" />
        </View>
      </View>

      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateRow}
      >
        {dates.map((item, index) => {
          const isSelected = selectedDate === item.date;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.dateBox, isSelected && styles.dateBoxSelected]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text
                style={[styles.dayText, isSelected && styles.dayTextSelected]}
              >
                {item.day}
              </Text>
              <Text
                style={[styles.dateText, isSelected && styles.dateTextSelected]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>


      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.userScroll}
      >
        {users.map((user, index) => (
          <View key={index} style={styles.userItem}>
            <Image source={{ uri: user.image }} style={styles.userImage} />
            <View
              style={[
                styles.statusDot,
                {
                  backgroundColor:
                    user.status === "active" ? "#307ce1" : "#748391",
                },
              ]}
            />
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageCard,
              item.unread ? styles.messageUnread : null,
            ]}
          >
            <Image source={{ uri: item.image }} style={styles.messageImage} />
            <View style={styles.messageTextBox}>
              <View style={styles.messageHeader}>
                <Text style={styles.messageName}>{item.name}</Text>
                <Text style={styles.messageTime}>{item.time}</Text>
              </View>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
            {item.unread && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{item.unread}</Text>
              </View>
            )}
          </View>
        )}
        contentContainerStyle={{ paddingBottom: rh(12) }}
        showsVerticalScrollIndicator={false}
      />


      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={rf(3)} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default MessagesView;
