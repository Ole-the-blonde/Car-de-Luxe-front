import React from "react";
import { useState, useEffect } from "react";
import service from "../api/apiHandler";
import CustomPopup from "../components/Nav/ContactUs/ContactUs";

const Favorites = () => {
  const [Favorites, setFavorites] = useState([]);
  console.log(Favorites);

  useEffect(() => {
    getFavorites();
  }, []);

  function getFavorites() {
    service
      .get("/api/Favorites")
      .then(({ data }) => {
        setFavorites(data);
      })
      .catch(console.error);
  }

  async function cancelBooking(id) {
    await service.delete(`/api/Favorites/${id}`);
    getFavorites();
  }

  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = () => {
    setVisibility(false);
  };

  return (
    <div className="favourite-page">
      <h3>Selected Cars</h3>
      <ul>
        {Favorites.map((booking) => {
          const { car } = booking;
          return (
            <li key={car._id}>
              <h2>{car.make}</h2>
              <div className="card">
                <img src={car.image} alt={car.make} />
                <CustomPopup
                  onClose={popupCloseHandler}
                  show={visibility}
                  title="Contact Us"
                >
                  <h1>You can contact us 24/7</h1>
                  <h2>Rent the car of your dreams +33612345678</h2>
                </CustomPopup>
              </div>

              <button
                onClick={() => {
                  cancelBooking(booking._id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={(e) => setVisibility(!visibility)}>Contact us</button>
    </div>
  );
};

export default Favorites;
