import { View, Text, Pressable, PressableProps } from "react-native";
import React, { forwardRef, Ref } from "react";

interface Props extends PressableProps {
  children: string;
  color: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contained",
      className,
    }: Props,
    ref: Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary-default",
      tertiary: "bg-tertiary",
    };

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    };

    if (variant === "text-only") {
      return (
        <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          className={`p-3 `}
          ref={ref}
        >
          <Text
            className={`text-center ${textColor[color]} font-work-medium ${className}`}
          >
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        onPress={onPress}
        ref={ref}
        onLongPress={onLongPress}
        className={`p-3 rounded-md ${btnColor[color]} active:opacity-90 ${className}`}
      >
        <Text className="text-center text-white">{children}</Text>
      </Pressable>
    );
  }
);

export default CustomButton;
