import { Platform } from "react-native";
import {
  ScreenWidth,
  isIPhoneXFamily
} from "@freakycoder/react-native-helpers";

export function container(props) {
  const { height, width, backgroundColor, borderRadius } = props;

  return {
    paddingLeft: 8,
    paddingRight: 8,
    height: height || 35,
    borderRadius: borderRadius || 10,
    backgroundColor: backgroundColor || "#fff",
    width: width || ScreenWidth * 0.93
  };
}

export function textInputStyle(fontSize, fontColor) {
  return {
    ...Platform.select({
      android: {
        padding: 0,
        margin: 0,
        borderWidth: 0
      },
      ios: {
        bottom: 1
      }
    }),
    marginLeft: 24,
    width: ScreenWidth * 0.7,
    fontSize: fontSize || 13,
    color: fontColor || "#b3b6c3"
  };
}

export function _shadowStyle(shadowColor) {
  return {
    ...Platform.select({
      ios: {
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowColor: shadowColor || "#757575",
        shadowOffset: { width: 2, height: 1 }
      },
      android: { elevation: 5 }
    })
  };
}

export function ifIPhoneXHeader(noExtraMargin) {
  if (noExtraMargin) return { marginTop: 16 };
  return {
    marginTop: isIPhoneXFamily() ? 44 : 16
  };
}

export default {
  containerGlue: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchStyle: {
    top: 2,
    flex: 1,
    flexDirection: "row"
  },
  textInputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    alignSelf: "center",
    alignContent: "center"
  }
};
