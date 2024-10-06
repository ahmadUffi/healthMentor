import { View, Text } from "react-native";
import React from "react";
import SingupDropdown from "../../components/SingupDropdown";
import { goals } from "../../API";

const goal = () => {
  return (
    <View>
      <SingupDropdown
        heading={"What’s your goal?"}
        placeholder={"I Want to..."}
        itemsValue={goals}
        page={"activities"}
        currentPageName={"goal"}
      />
    </View>
  );
};

export default goal;
