import { View, Text, StyleSheet } from "react-native";
import HeaderSign from "./HeaderSign";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonSignup from "./ButtonSignup";
import { Link } from "expo-router";

const SingupDropdown = ({
  placeholder,
  itemsValue,
  heading,
  action,
  subText,
  subText2,
  page,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    itemsValue.map((item) => ({ label: item, value: item }))
  );
  return (
    <View>
      <View>
        <HeaderSign />
      </View>
      <View
        style={{
          padding: 30,
          display: "flex",
          justifyContent: "space-between",
          height: 900,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Text style={styles.heading}>{heading}</Text>
          <DropDownPicker
            placeholder={placeholder}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              borderWidth: 0,
              height: 54,
              marginTop: 50,
            }}
            containerStyle={{ borderWidth: 0 }}
            dropDownContainerStyle={{
              borderWidth: 0,
            }}
            labelStyle={{}}
          />
          <Text
            style={{
              marginTop: 24,
              color: "#696868",
              fontSize: 16,
            }}
          >
            {subText}
            <Text style={{ color: "#58D68F" }}> {action} </Text>
            {subText2}
          </Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <ButtonSignup page={page} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontFamily: "latoBold",
  },
});
export default SingupDropdown;
