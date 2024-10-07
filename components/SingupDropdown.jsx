import { View, Text, StyleSheet, Dimensions } from "react-native";
import HeaderSign from "./HeaderSign";
import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonSignup from "./ButtonSignup";
import { useFormData } from "../app/signup/formHandler";

const { height } = Dimensions.get("window");

const SingupDropdown = ({
  placeholder,
  itemsValue,
  heading,
  action,
  subText,
  subText2,
  page,
  currentPageName,
}) => {
  const { data, updateData } = useFormData();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    itemsValue.map((item) => ({ label: item, value: item }))
  );

  useEffect(() => {
    setValue(data[currentPageName]);
  }, [data, currentPageName]);

  // Check if a value is selected to enable/disable the button
  const isDisabled = !value;

  return (
    <View style={{ height }}>
      <View>
        <HeaderSign />
      </View>
      <View
        style={{
          padding: 30,
          display: "flex",
          justifyContent: "space-around",
          height,
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
            onChangeValue={(value) => {
              updateData(currentPageName, value);
            }}
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
          <ButtonSignup page={page} isDisabled={isDisabled} /> 
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
