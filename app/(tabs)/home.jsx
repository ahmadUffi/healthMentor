import { View, Text, ScrollView } from "react-native";
import React from "react";
import Greating from "../../components/Greating";
import Upcoming from "../../components/Upcoming";
import Todayswork from "../../components/Todayswork";

const home = () => {
  return (
    <ScrollView
      style={{
        padding: 35,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <View>
        <Greating />
      </View>
      <View>
        <Upcoming />
      </View>
      <Todayswork />
    </ScrollView>
  );
};

export default home;
