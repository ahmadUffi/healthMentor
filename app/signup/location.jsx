import { View, Text } from "react-native";
import React from "react";
import SingupDropdown from "../../components/SingupDropdown";
import { genders } from "../../API";
import { countries } from "../../API";

const location = () => {
  return (
    <View>
      <SingupDropdown
        heading={"Where do you live?"}
        placeholder={"I Live in..."}
        itemsValue={countries}
        page={"goal"}
        subText={"*Tip : type your general location,or tap"}
        action={"here"}
        subText2={"to use your GPS."}
      />
    </View>
  );
};

export default location;
