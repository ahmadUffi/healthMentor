import { View, Text } from "react-native";
import React from "react";
import TaskSchedule from "../../components/TaskSchedule";
import Wrapper from "../../components/Wrapper";
import { ScrollView } from "react-native";
import { Colors } from "../../constants/Colors";
import Calander from "../../components/Calander";

const schedule = () => {
  return (
    <Wrapper>
      <View style={{ marginTop: 30 }}>
        <Text
          style={{ fontFamily: "latoBlack", fontSize: 26, marginBottom: 18 }}
        >
          Wednesday, 13 September 2024
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
            marginVertical: 23,
          }}
        >
          <Calander day={"S"} tgl={"10"} active={false} />
          <Calander day={"M"} tgl={"11"} active={false} />
          <Calander day={"T"} tgl={"12"} active={false} />
          <Calander day={"W"} tgl={"13"} active={true} />
          <Calander day={"T"} tgl={"14"} active={false} />
          <Calander day={"F"} tgl={"15"} active={false} />
          <Calander day={"S"} tgl={"16"} active={false} />
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 18 }}>
          Wednesday, 13 September 2024
        </Text>
      </View>

      {/* Meals */}
      <View>
        <View style={{ position: "relative", width: 80, zIndex: 99 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 26,
              marginBottom: 18,
              position: "relative",
              zIndex: 90,
            }}
          >
            Meals
          </Text>
          <View
            style={{
              position: "absolute",
              backgroundColor: Colors.greenSecondary,
              width: "80%",
              height: "40%",
              zIndex: 1,
              left: -12,
            }}
          />
        </View>
        <View
          style={{
            height: 430,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ display: "flex", gap: 14 }}>
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
            </View>
          </ScrollView>
        </View>
      </View>
      {/* akhir Meals */}
      {/* Workouts */}
      {/* Meals */}
      <View style={{ marginVertical: 43 }}>
        <View style={{ position: "relative", width: 160, zIndex: 99 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 26,
              marginBottom: 18,
              position: "relative",
              zIndex: 90,
            }}
          >
            Workouts
          </Text>
          <View
            style={{
              position: "absolute",
              backgroundColor: Colors.greenSecondary,
              width: "38%",
              height: "40%",
              zIndex: 1,
              left: -12,
            }}
          />
        </View>
        <View
          style={{
            height: 430,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ display: "flex", gap: 14 }}>
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
              <TaskSchedule schedule={"tomorrow"} Kcal={"+ 200 Kcal"} />
            </View>
          </ScrollView>
        </View>
      </View>
    </Wrapper>
  );
};

export default schedule;
