import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const App = () => {
  //return <Redirect href="/(stack)/home" />;
  return <Redirect href="/home" />;

  /* return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl" style={{ fontFamily: "WorkSans-Black" }}>
          Hola mundo
        </Text>
        <Text className="text-3xl text-primary font-work-black ">
          Hola mundo
        </Text>
        <Text className="text-3xl text-secondary-100 font-work-medium ">
          Hola mundo
        </Text>
        <Text className="text-3xl  text-secondary-default font-work-light ">
          Hola mundo
        </Text>
        <Link href="/products">Products</Link>
      </View>
    </SafeAreaView>
  ); */
};

export default App;
