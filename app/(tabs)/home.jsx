import { View, Text, ScrollView } from "react-native";
import React from "react";
import Greating from "../../components/Greating";
import Upcoming from "../../components/Upcoming";
import WorkoutCard from "../../components/WorkoutCard";
import Meals from "../../components/MealsCard";
import { TouchableOpacity } from "react-native";

const home = () => {
  return (
    <ScrollView
      style={{
        padding: 35,
      }}
    >
      <View>
        <Greating />
      </View>
      <View>
        <Upcoming />
      </View>

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
          Today's Workouts
        </Text>
        <TouchableOpacity
          style={{ fontSize: 15, fontFamily: "lato", color: "grey" }}
        >
          See all
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 20 }}>
        <ScrollView horizontal>
          <WorkoutCard
            imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
            title="Warm Up"
            time="7:20 AM - 7:30 AM"
            status={true}
            page="yaa"
          />
          <WorkoutCard
            imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
            title="iyh"
            time="9:20 AM - 7:30 AM"
            status={false}
            page="yaa"
          />
        </ScrollView>
      </View>
      <View style={{ marginBottom: 20 }}>
        <ScrollView horizontal>
          <WorkoutCard
            imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
            title="Warm Up"
            time="7:20 AM - 7:30 AM"
            status={false}
            page="yaa"
          />
          <WorkoutCard
            imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
            title="iyh"
            time="9:20 AM - 7:30 AM"
            status={true}
            page="yaa"
          />
        </ScrollView>
      </View>
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
          style={{ fontSize: 15, fontFamily: "lato", color: "grey" }}
        >
          See all
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal>
          <Meals
            imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
            title="Breakfast"
            time="Oat Meal"
            status={false}
            page="yaa"
          />
          <Meals
            imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
            title="Breakfast"
            time="Oat Meal"
            status={false}
            page="yaa"
          />
          <Meals
            imageUri="https://www.w3schools.com/html/pic_trulli.jpg"
            title="Breakfast"
            time="Oat Meal"
            status={false}
            page="yaa"
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default home;
