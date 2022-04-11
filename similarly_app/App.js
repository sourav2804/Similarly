import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./Components/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      {/* Tab contains the Bottom tab navigator which has 
      2 pages ri8 now; A home page and a explore page*/}
      <Tabs />
    </NavigationContainer>
  );
}
