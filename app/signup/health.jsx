import { View, Text } from "react-native";
import React from "react";
import SingupDropdown from "../../components/SingupDropdown";
import { genders } from "../../API";
import { countries } from "../../API";

const health = () => {
  return (
    <View>
      <SingupDropdown
        heading={"How’s your health?"}
        placeholder={"I am..."}
        itemsValue={countries}
        page={"done"}
      />
    </View>
  );
};

export default health;
