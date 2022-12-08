import React from "react";
import { useState, useEffect } from "react";
import service from "../api/apiHandler";
import CustomPopup from "../components/Nav/ContactUs/ContactUs";
import PropTypes from "prop-types";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    getBookings();
  }, []);

  function getBookings() {
    service
      .get("/api/bookings")
      .then(({ data }) => {
        setBookings(data);
      })
      .catch(console.error);
  }

  async function cancelBooking(id) {
    await service.delete(`/api/bookings/${id}`);
    getBookings();
  }

  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = () => {
    setVisibility(false);
  };

  return (
    <div>
      <h3>Selected Cars</h3>
      <ul>
        {bookings.map((booking) => {
          const { car } = booking;
          return (
            <li key={car._id}>
              <p>{car.make}</p>

              <button>Make a reservation</button>
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

      <ul>
        {bookings.map(({ car }) =>
          car.bookings === true ? <li key={car.id}>{car.make}</li> : null
        )}
      </ul>
      <button onClick={(e) => setVisibility(!visibility)}>Rent a Car</button>

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Contact Us"
      >
        <h1>You can contact us 24/7</h1>
        <h2>Rent the car of your dreams+33612345678</h2>
      </CustomPopup>
    </div>
  );
};

export default Bookings;
