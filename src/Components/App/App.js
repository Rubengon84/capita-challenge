import { useState, useEffect } from "react";
import css from "./App.module.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import randomNumber from "../../HelperFunctions";

function App() {
  // States for the logic of the App
  const [endPoint, setEndPoint] = useState("posts"); // State to keep the endpoints of the url for making the data requests.
  const [buttonClicked, setButtonClicked] = useState(true); // State for triggering useEffect every time is clicked.
  const [data, setData] = useState(null); // State to save the state to show on the main component.

  // Function to toggle the value of the state everytime the button is clicked.
  function handleClickButton() {
    setButtonClicked(!buttonClicked);
  }

  // Function to get the value of the select-input when is changed.
  function handleChange(e) {
    setEndPoint(e.target.value);
  }

  // useEffec for sending the Fetch request to the API.
  useEffect(() => {
    // Create the url with the endpoints and the random number getting from the randomBumber function.
    const url = "https://jsonplaceholder.typicode.com/";
    let apiUrl = `${url}${endPoint}/${randomNumber(endPoint)}`;
    // Function for getting the data from the API.
    async function getData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setData(data);
    }
    if (endPoint) {
      getData();
    }
  }, [endPoint, buttonClicked]);

  return (
    <div className={css.App}>
      <Header
        handleChange={handleChange}
        handleClickButton={handleClickButton}
      />
      <Main data={data} endPoint={endPoint} />
      <Footer />
    </div>
  );
}

export default App;
