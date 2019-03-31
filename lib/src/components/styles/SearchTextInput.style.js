export function textStyle(fontSize, fontColor) {
  return {
    left: 24,
    bottom: 1,
    fontSize: fontSize || 13,
    color: fontColor || "#b3b6c3"
  };
}

export default {
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
};
