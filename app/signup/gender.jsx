import { View, Text } from "react-native";
import React from "react";
import SingupDropdown from "../../components/SingupDropdown";
import { genders } from "../../API";

const gender = () => {
  return (
    <View>
      <SingupDropdown
        heading={"What’s your gender?"}
        placeholder={"My gender is ..."}
        itemsValue={genders}
        page={"location"}
      />
    </View>
  );
};

export default gender;
