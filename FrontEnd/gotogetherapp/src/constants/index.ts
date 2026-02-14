import { Dimensions, Platform } from "react-native";

export const SECRET_KEY = "hacklamconcho";

export const IsAndroid = Platform.OS === "android";
export const IsIOS = Platform.OS === "ios";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
