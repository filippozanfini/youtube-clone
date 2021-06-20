import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../screens/HomeScreen";
import { MaterialIcons } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons name="home" color={tabInfo.tintColor} size={28} />
          );
        },
      },
    },
    Trending: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons
              name="local-fire-department"
              color={tabInfo.tintColor}
              size={28}
            />
          );
        },
      },
    },
    Subscribtions: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons
              name="subscriptions"
              color={tabInfo.tintColor}
              size={28}
            />
          );
        },
      },
    },
    Activity: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons
              name="notifications"
              color={tabInfo.tintColor}
              size={28}
            />
          );
        },
      },
    },
    Library: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons name="folder" color={tabInfo.tintColor} size={28} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      style: {
        backgroundColor: "#282828",
        height: 60,
      },
    },
  }
);

export default createAppContainer(TabNavigator);
