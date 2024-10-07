import { View, Text } from "react-native";
import React from "react";
import SingupDropdown from "../../components/SingupDropdown";
import { genders } from "../../API";
import { actvities } from "../../API";

const activities = () => {
  return (
    <View>
      <SingupDropdown
        heading={"How active are you on a daily basis?"}
        placeholder={"I Want to."}
        itemsValue={actvities}
        page={"health"}
        currentPageName={"activities"}
        subText={
          "*Tip : activities such as exercise, physically taxing job, or even walking around"
        }
      />
    </View>
  );
};

export default activities;
