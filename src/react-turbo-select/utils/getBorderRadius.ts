export const getBorderRadius = (
  borderRadius: "none" | "tiny" | "small" | "medium" | "large" | "huge"
) => {
  switch (borderRadius) {
    case "none":
      return "0px";
    case "tiny":
      return "8px";
    case "small":
      return "10px";
    case "medium":
      return "12px";
    case "large":
      return "14px";
    case "huge":
      return "16px";
    default:
      return "12px";
      break;
  }
};
