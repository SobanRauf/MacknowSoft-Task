import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { styles } from "../../Styles/HomeStyles";
import {
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const RenderPost = ({ item, navigation }: any) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.sideBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={{ uri: item.user }} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <FontAwesome name="heart" size={rf(2.2)} color="red" />
          <Text style={styles.iconLabel}>{item.likes / 1000}k</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="comment" size={rf(2.2)} color="gray" />
          <Text style={styles.iconLabel}>{item.comments}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="share" size={rf(2.2)} color="gray" />
          <Text style={styles.iconLabel}>{item.shares / 1000}k</Text>
        </View>
      </View>
      <View style={styles.postCard}>
        <Image source={{ uri: item.image }} style={styles.postImage} />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};
export default RenderPost;
