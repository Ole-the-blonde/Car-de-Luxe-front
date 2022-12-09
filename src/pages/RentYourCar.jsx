import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
import FileUpload from "./FileUpload";
import "../styles/addCar.css";

const RentYourCar = (props) => {
  const [brand, setBrand] = useState("");
  const [deposit, setDeposit] = useState("");
  const [price, setPrice] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [power, setPower] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [make, setMake] = useState("");
  const [transmission, setTransmission] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      brand,
      make,
      power,
      image,
      maxSpeed,
      transmission,
      price,
      deposit,
      description,
    };

    service
      .post("/api/rentcar", requestBody)
      .then((response) => {
        navigate("/profile");
        //Do something with the response
      })
      .catch((e) => console.error(e));
  };

  return (
    <section className="addCarContainer">
      <div className="addCar">
        <h2>Rent your Car</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            name="brand"
            value={brand}
            id="brand"
            onChange={(e) => setBrand(e.target.value)}
          />
          <label>Image:</label>
          <FileUpload setImage={setImage} />
          <label htmlFor="make">Make</label>
          <input
            type="text"
            name="make"
            value={make}
            id="make"
            onChange={(e) => setMake(e.target.value)}
          />
          <label htmlFor="deposit">Deposit</label>
          <input
            type="number"
            name="deposit"
            value={deposit}
            id="deposit"
            onChange={(e) => setDeposit(e.target.value)}
          />

          <label htmlFor="transmission">Transmission</label>
          <select
            name="transmission"
            id="transmission"
            onChange={(e) => {
              setTransmission(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="power">Power</label>
          <input
            type="text"
            name="power"
            value={power}
            id="power"
            onChange={(e) => setPower(e.target.value)}
          />
          <label htmlFor="maxSpeed">Max Speed:</label>
          <input
            type="number"
            name="maxSpeed"
            value={maxSpeed}
            id="maxSpeed"
            onChange={(e) => setMaxSpeed(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default RentYourCar;
