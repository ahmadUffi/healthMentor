import { View, Text, ScrollView } from "react-native";
import React from "react";
import Task from "./Task";

const Todayswork = () => {
  return (
    <ScrollView
      style={{ marginVertical: 18 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ma
    >
      <Task />
      <Task />
      <Task />
    </ScrollView>
  );
};

export default Todayswork;
