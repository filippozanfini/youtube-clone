import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/youtubelogo.png")}
          resizeMode="contain"
        />
        <View style={styles.btnsContainer}>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <FontAwesome5 name="video" color="white" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 20 }}>
            <Ionicons name="md-search" color="white" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.profilePic}
              source={require("../assets/profilepic.jpg")}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    marginTop: 40,
  },
  logo: {
    width: 130,
    height: 130,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  profilePic: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#444",
  },
});

export default Header;
