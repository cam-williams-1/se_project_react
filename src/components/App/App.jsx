import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// for more sensitive applications, storing the apiKey here is a security risk
import { coordinates, apiKey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { getItems, addItem, removeItem } from "../../utils/api.js";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile.jsx";

// Contexts
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit.jsx";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true, // need to refactor for night
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    } else {
      setCurrentTemperatureUnit("F");
    }
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const onAddItem = (inputValues) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weatherType,
    };

    addItem(newCardData)
      .then((data) => {
        // passing data to state so that it includes the id created from the DB
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const deleteItemHandler = (item) => {
    const filteredArr = clothingItems.filter((clothingItem) => {
      return clothingItem._id !== item._id;
    });

    removeItem(item._id)
      .then(() => {
        setClothingItems(filteredArr);
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []); // empty array ensures useEffect will call on page load

  useEffect(() => {
    if (!activeModal) return; // only adds listener is modal is active

    const onEsc = (e) => {
      if (e.key === "Escape") closeActiveModal();
    };

    document.addEventListener("keydown", onEsc);

    // removes the listener when effect cleans up
    return () => document.removeEventListener("keydown", onEsc);
  }, [activeModal, closeActiveModal]); // Only re-run when these values change

  return (
    // Wrapping the entire JSX app so everything has this context
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          closeActiveModal={closeActiveModal}
          onAddItem={onAddItem}
        ></AddItemModal>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
          deleteItemHandler={deleteItemHandler}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
