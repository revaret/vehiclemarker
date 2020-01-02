export const renderColor = status => {
  switch (status) {
    case 1:
      return "green";
    case 2:
      return "#4DA1A9";
    case 3:
      return "#FFA630";
    case 4:
      return "grey";
    case 5:
      return "red";
    default:
      return "green";
  }
};
