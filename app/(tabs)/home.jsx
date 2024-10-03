import { View, Text, ScrollView } from "react-native";
import React from "react";
import Greating from "../../components/Greating";
import Upcoming from "../../components/Upcoming";
import WorkoutCard from "../../components/WorkoutCard";
import Meals from "../../components/Meals";
import { TouchableOpacity } from "react-native";
import Todayswork from "../../components/Todayswork";
import { StyleSheet } from "react-native";
import Task from "../../components/Task";
import Wrapper from "../../components/Wrapper";

const home = () => {
  return (
    <Wrapper>
      <ScrollView>
        <View>
          <Greating />
        </View>
        <View>
          <Upcoming />
        </View>

        {/* todays Work */}
        <View>
          <View style={styles.wrapTitleWorkout}>
            <Text style={{ fontSize: 20, fontFamily: "latoBold" }}>
              Today's Workouts
            </Text>
            <TouchableOpacity
              style={{ fontSize: 15, fontFamily: "latoReguler", color: "grey" }}
            >
              <Text>See all </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  height: 280,
                  gap: 23,
                }}
              >
                <Task schedule={"completed"} />
                <Task schedule={"upcoming"} />
                <Task schedule={"incomplete"} />
                <Task schedule={"completed"} />
                <Task schedule={"upcoming"} />
                <Task schedule={"incomplete"} />
                <Task schedule={"completed"} />
                <Task schedule={"upcoming"} />
                <Task schedule={"incomplete"} />
              </View>
            </ScrollView>
          </View>
        </View>

        {/* akhir todays work */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "latoBold" }}>
            Today's Meals
          </Text>
          <TouchableOpacity
            style={{ fontSize: 15, fontFamily: "latoReguler", color: "grey" }}
          >
            <Text> See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Meals
              imageUri={"https://www.w3schools.com/html/pic_trulli.jpg"}
              page="yaa"
              schedule={"completed"}
            />
            <Meals
              imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
              schedule={"upcoming"}
            />
            <Meals
              imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
              schedule={"incomplete"}
            />
          </ScrollView>
        </View>
        {/* <Todayswork /> */}
      </ScrollView>
    </Wrapper>
  );
};

export default home;

const styles = StyleSheet.create({
  wrapTitleWorkout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
