import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { users } from "../utils/data/DummyData";
import { styles } from "../Styles/HomeStyles";
import { Props } from "../Screens/HomeScreen";
import RenderPost from "../Components/ui/RenderPost";
import { usePosts } from "../hooks/usePost";
import usePostsWithFetch from "../hooks/usePostsWithFetch";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import useAddUser from "../hooks/useAddUser";

type HomeViewProps = {
  navigation: Props["navigation"];
};

const HomeView = ({ navigation }: HomeViewProps) => {
  const users = useSelector((state: RootState) => state.users.users);
  const { data: posts, isLoading, isError } = usePosts();
  
  // API using fetch
  const { postsWithFetch, loading, error } = usePostsWithFetch();

  if (isLoading) return <ActivityIndicator size="large" color="#000" />;
  if (isError) return <Text>Error loading posts</Text>;
  const { handleAddUser } = useAddUser();
  return (
    <View style={styles.container}>
      {/* {loading && <ActivityIndicator size="large" color="#000" />}
      {error && <Text>Error loading posts : {error}</Text>} */}

      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
          <Ionicons name="menu" size={rf(3)} color="#000" />
        </TouchableOpacity>
        <Ionicons name="search" size={rf(3)} color="#000" />
      </View>

      {/* Horizontal Scrollable User List */}
      <View style={styles.userListContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
          <Text style={styles.addButtonText}>ADD+</Text>
        </TouchableOpacity>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.userListScroll}
        >
          {users.map((user, index) => (
            <View key={index} style={styles.userCard}>
              <Image source={{ uri: user.image }} style={styles.userImage} />
              <Text style={styles.userName}>{user.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Post Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <RenderPost item={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: rh(5) }}
      />
    </View>
  );
};

export default HomeView;
