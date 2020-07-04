

import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer } from "react-navigation";

import Sayfa1 from "./src/pages/Sayfa1";
import Sayfa2 from "./src/pages/Sayfa2";
import Sayfa3 from "./src/pages/Sayfa3";
import Detay from "./src/pages/Detay";



const AppNavigator = createStackNavigator({
  Sayfa1: {
    screen: Sayfa1
  },
  Sayfa2: {
    screen: Sayfa2
  },
  Sayfa3: {
    screen: Sayfa3
  },
  Detay: {
    screen: Detay
  }
});

export default createAppContainer(AppNavigator);