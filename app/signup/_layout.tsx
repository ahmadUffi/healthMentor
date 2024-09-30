import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { FormHandler } from './formHandler';

export default function RootLayout() {
  return (
      <FormHandler>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="name" options={{ headerShown: false }} />
          <Stack.Screen name="age" options={{ headerShown: false }} />
          <Stack.Screen name="gender" options={{ headerShown: false }} />
          <Stack.Screen name="location" options={{ headerShown: false }} />
          <Stack.Screen name="activities" options={{ headerShown: false }} />
          <Stack.Screen name="health" options={{ headerShown: false }} />
        </Stack>
      </FormHandler>
        
  );
}
