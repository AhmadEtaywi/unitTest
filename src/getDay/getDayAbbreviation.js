const getDayAbbreviation = (day) => {
  let abbreviation;
  switch (day) {
    case "Monday":
      abbreviation = "Mon";
      break;
    case "Tuesday":
      abbreviation = "Tue";
      break;
    case "Wednesday":
      abbreviation = "Wed";
      break;
    case "Thursday":
      abbreviation = "Thu";
      break;
    case "Friday":
      abbreviation = "Fri";
      break;
    case "Saturday":
      abbreviation = "Sat";
      break;
    case "Sunday":
      abbreviation = "Sun";
      break;
    default:
      abbreviation = "Invalid day";
  }
  return abbreviation;
};

module.exports = getDayAbbreviation;
