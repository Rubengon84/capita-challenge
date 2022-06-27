
// Function for returnin a random number between the range of the data endPoints, to use in the url request for getting random data.
const randomNumber = (endPoint) => {
  let range;
  switch (endPoint) {
    case "posts":
      range = 100;
      break;
    case "photos":
      range = 5000;
      break;
    case "comments":
      range = 500;
      break;
    case "users":
      range = 10;
      break;
    default:
      range = 100;
  }
  const number = Math.floor(Math.random() * range + 1);
  return number;
};

export default randomNumber;