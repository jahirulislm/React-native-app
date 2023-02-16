import React from "react";

import { FlatList, View, Text, SafeAreaView } from "react-native";
import ImagesBackground from "./components/ImagesBackground";
import ActionCard from "./components/ActionCard";


function App() {
  return (
      <View>
        <Text>App-2 is running to test more components of React-native</Text>

        {/* <ImagesBackground /> */}

        <ActionCard/>
      </View>
  )
}

export default App;

