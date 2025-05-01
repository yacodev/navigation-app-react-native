import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View>
        <CustomButton
          color="primary"
          onPress={() => router.push("/products")}
          className="mt-2"
        >
          Products
        </CustomButton>
        <CustomButton
          color="secondary"
          onPress={() => router.push("/profile")}
          className="mt-2"
        >
          Profiless
        </CustomButton>

        <CustomButton
          color="tertiary"
          onPress={() => router.push("/settings")}
          className="mt-2"
        >
          Ajustes
        </CustomButton>

        <CustomButton
          color="primary"
          variant={"text-only"}
          onPress={() => router.push("/products")}
        >
          test
        </CustomButton>

        <CustomButton color="primary" onPress={() => onToggleDrawer()}>
          Abrir menu
        </CustomButton>

        {/* <Link href="/products" asChild>
          <CustomButton color="primary">Products</CustomButton>
        </Link> */}
        {/* <Link href="/products">products</Link>
        <Link href="/profile">profile</Link>
        <Link href="/settings">setting</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
