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
import { schedules } from "../../API";
import schedule from "./schedule";

const home = () => {
  return (
    <Wrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
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

          {/* workouts */}
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
                {schedules.map((schedule) =>
                  schedule.olahraga.map((workout, index) => (
                    <Task
                      key={index}
                      imgUri={workout.imgUri}
                      time={workout.waktu}
                      title={workout.gerakan}
                      schedule={
                        index === 0
                          ? "completed"
                          : index === 1
                          ? "upcoming"
                          : "uncompleted"
                      }
                    />
                  ))
                )}
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
            {schedules.map((schedule) =>
              schedule.makanan.map((makan, index) => (
                <Meals
                  key={index}
                  imgUri={makan.imgUri}
                  title={makan.menu}
                  time={makan.waktu}
                  schedule={index === 0 ? "done" : "upcoming"}
                />
              ))
            )}
          </ScrollView>
        </View>
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
