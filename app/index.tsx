import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    // <View>
    //   <Text>index page</Text>
    <Redirect href={"/signup/onboarding"} />
  );
}