export const CompareDateStrings = (expiryDate, currDate) => {
  const expiryArr = expiryDate.split(" ");
  const currArr = currDate.split(" ");

  if (
    expiryArr[0] == currArr[0] &&
    expiryArr[1] == currArr[1] &&
    expiryArr[2] == currArr[2]
  ) {
    return true;
  }

  return false;
};

//Test Cases:

// console.log(
//   CompareDateStrings("12 Jan 2025 15:05:34 GMT", "12 Jan 2022 15:05:34 GMT")
// ); //Expected: false;

// console.log(
//   CompareDateStrings("12 Jan 2025 15:05:34 GMT", "12 Jan 2025 15:05:34 GMT")
// ); //Expected: true;

// console.log(
//   CompareDateStrings("10 Jan 2025 15:05:34 GMT", "12 Jan 2025 15:05:34 GMT")
// ); //Expected: true;
