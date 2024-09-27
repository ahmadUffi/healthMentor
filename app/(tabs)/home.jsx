import { View, Text, ScrollView } from "react-native";
import React from "react";
import Greating from "../../components/Greating";
import Upcoming from "../../components/Upcoming";

const home = () => {
  return (
    <ScrollView
      style={{
        padding: 35,
      }}
    >
      <View>
        <Greating />
      </View>
      <View>
        <Upcoming />
      </View>
    </ScrollView>
  );
};

export default home;
