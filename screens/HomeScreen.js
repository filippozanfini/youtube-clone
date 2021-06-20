import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Header from "../components/Header";
import Video from "../components/Video";
import { VIDEOS } from "../data/sample_data";

const HomeScreen = () => {
  const renderVideos = (itemData) => {
    return <Video item={itemData.item} />;
  };

  return (
    <View style={styles.screen}>
      <Header />
      <FlatList
        data={VIDEOS}
        renderItem={renderVideos}
        style={{ width: "100%" }}
        contentContainerStyle={{
          alignItems: "center",
          marginTop: 30,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#282828",
  },
});

export default HomeScreen;
