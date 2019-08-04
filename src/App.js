import React from "react";
import { Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

// importing screens
import SplashScreen from "./components/SplashScreen";
import CategoryPage from "./components/CategoryPage";
import SettingsScreen from "./components/SettignsScreen";
import SubCategoryPage from "./components/SubCategoryPage";
import FontSettings from "./components/FontSettings";
export const MainStack = createBottomTabNavigator({
  Home: {
    screen: CategoryPage
  },
  Settings: {
    screen: SettingsScreen
  }
});

export const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  MainScreen: {
    screen: MainStack,
    navigationOptions: {
      header: null
    }
  },
  SubCategories: {
    screen: SubCategoryPage
  },
  FontSettings: {
    screen: FontSettings,
    navigationOptions: {
      title: "Font Size",
      headerStyle: {
        backgroundColor: "#01411cff"
      },
      headerTintColor: "white"
    }
  }
});

const App = createAppContainer(MainNavigator);

export default App;
