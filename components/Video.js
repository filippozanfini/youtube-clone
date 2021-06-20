import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { Fontisto } from "@expo/vector-icons";

const Video = (props) => {
  return (
    <TouchableOpacity style={styles.video}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: props.item.coverUrl }}
        resizeMode="cover"
      >
        <View style={styles.durationView}>
          <Text style={{ color: "white" }}>{props.item.duration}</Text>
        </View>
      </ImageBackground>

      <View style={styles.infoVideo}>
        <Image
          style={styles.authorCover}
          source={{ uri: props.item.authorCover }}
        />
        <View
          style={{
            minWidth: "80%",
            maxWidth: "80%",
          }}
        >
          <Text
            style={{ fontSize: 18, color: "white", fontWeight: "600" }}
            numberOfLines={2}
          >
            {props.item.title}
          </Text>

          <View style={styles.dataContainer}>
            <Text style={{ fontSize: 16, color: "#777", marginRight: 5 }}>
              {props.item.author} •
            </Text>
            <Text style={{ fontSize: 16, color: "#777", marginRight: 5 }}>
              {props.item.views} •
            </Text>
            <Text style={{ fontSize: 16, color: "#777" }}>
              {props.item.date}
            </Text>
          </View>
        </View>
        <Fontisto name="more-v-a" color="#777" size={17} />
      </View>
      <View style={styles.separator} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  video: {
    justifyContent: "flex-start",
    height: 360,
    minWidth: "95%",
    maxWidth: "95%",
    marginTop: 5,
  },
  cover: {
    height: 250,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  authorCover: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 20,
  },
  infoVideo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  dataContainer: {
    flexDirection: "row",
    minWidth: "100%",
    marginTop: 5,
  },
  separator: {
    minWidth: "100%",
    maxWidth: "100%",
    height: 1,
    backgroundColor: "#444",
    marginTop: 20,
  },
  durationView: {
    backgroundColor: "black",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 40,
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default Video;
