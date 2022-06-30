import * as React from "react";
import {NavigatonContainer} from "@react-navigation/native"
import DrawerNavigator from "./navigation/DrawerNavigator"
import Calender from "./Screens/Calender";
import HomeScreen from "./Screens/HomeScreen";
import SetTimes from "./Screens/SetTimes";
import Settings from "./Screens/Settings";


export default function App() {
  return (
    <NavigatonContainer>
    <DrawerNavigator/>
    </NavigatonContainer>
  );
}


