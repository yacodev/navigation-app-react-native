import React from "react";
import { Stack, useNavigation } from "expo-router";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop());
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        //headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack!)}
          />
        ),
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
