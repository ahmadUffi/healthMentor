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
                <Task
                  schedule={"completed"}
                  imgUri={
                    "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
                <Task
                  schedule={"upcoming"}
                  imgUri={
                    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
                <Task
                  schedule={"incomplete"}
                  imgUri={
                    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
                <Task
                  schedule={"completed"}
                  imgUri={
                    "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
                <Task
                  schedule={"upcoming"}
                  imgUri={
                    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
                <Task
                  schedule={"incomplete"}
                  imgUri={
                    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
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
              imageUri={
                "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              page="yaa"
              schedule={"completed"}
            />
            <Meals
              imageUri="https://images.unsplash.com/photo-1613747526070-31ccc300ec07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              schedule={"upcoming"}
            />
            <Meals
              imageUri="https://images.unsplash.com/photo-1611754431702-20dc7dd004a2?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
