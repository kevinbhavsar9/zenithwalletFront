import React, { useState, Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  withSpring,
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;
const SwipeBtn = ({ onToggle }) => {
  const [toogled, setToggled] = useState(false);
  const X = useSharedValue(0);

  const handleComplete = (isToggled) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
      onToggle(isToggled);
    }
  };

  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: (e) => {
      X.value = e.translationX;
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(setToggled)(true);
      }
    },
  });
  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: X.value }],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.8, 0],
          Extrapolate.CLAMP
        ),
        transform: [
          {
            translateX: interpolate(X.value, InterpolateXInput, [
              0,
              BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS,
              Extrapolate.CLAMP,
            ]),
          },
        ],
      };
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + X.value,
        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
  };
  return (
    <View style={styles.swipeCont}>
      <Animated.View
        style={[styles.colorWave, AnimatedStyles.colorWave]}
      ></Animated.View>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[AnimatedStyles.swipeable, styles.swipeable]}>
          <Image
            source={require("../assets/images/Transfer/Arrow.png")}
            style={{
              position: "absolute",
              top: 30,
              left: 30,
            }}
          />
        </Animated.View>
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        Swipe to complete
      </Animated.Text>
    </View>
  );
};
const styles = StyleSheet.create({
  colorWave: {
    position: "absolute",
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
    backgroundColor: "#26B8FE",
  },
  swipeCont: {
    // position: "absolute",
    // top: 100,
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    padding: BUTTON_PADDING,
    backgroundColor: "#221D3B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BUTTON_HEIGHT,
  },
  swipeable: {
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    backgroundColor: "#171429",
    left: BUTTON_PADDING,
    position: "absolute",
    zIndex: 3,
  },
  swipeText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    zIndex: 2,
  },
});

export default SwipeBtn;
