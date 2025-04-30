import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
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
          onPress={() => router.push("/products")}
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

        <Link href="/products" asChild>
          <CustomButton color="primary">Products</CustomButton>
        </Link>
        {/* <Link href="/products">products</Link>
        <Link href="/profile">profile</Link>
        <Link href="/settings">setting</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
