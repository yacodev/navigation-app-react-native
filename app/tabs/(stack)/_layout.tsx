import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        //headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home screen",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products screen",
          animation: "ios_from_right",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile screen",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings screen",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
