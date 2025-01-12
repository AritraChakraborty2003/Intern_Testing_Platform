export const compareTimeStrings = (storedTime, currTime) => {
  const storedTimeArr = storedTime.split(":");
  const currTimeArr = currTime.split(":");

  if (parseInt(storedTimeArr[0]) > parseInt(currTimeArr[0])) {
    if (parseInt(storedTimeArr[0]) - parseInt(currTimeArr[0]) <= 1) {
      return true;
    } else {
      return false;
    }
  } else if (parseInt(storedTimeArr[0]) === parseInt(currTimeArr[0])) {
    if (
      parseInt(storedTimeArr[1]) >= parseInt(currTimeArr[1]) &&
      parseInt(storedTimeArr[2]) >= parseInt(currTimeArr[2])
    ) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};

//Few Test Cases
// console.log(compareTimeStrings("14:55:58", "14:55:59"));
// console.log(compareTimeStrings("14:55:58", "14:55:56"));
// console.log(compareTimeStrings("13:55:58", "14:55:58"));
// console.log(compareTimeStrings("14:55:58", "13:59:59"));
// console.log(compareTimeStrings("13:59:59", "13:59:59"));
