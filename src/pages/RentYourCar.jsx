import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
// import cloudinary from "../../../server/config/cloudinary";

const RentYourCar = (props) => {
  const [brand, setBrand] = useState("");
  const [deposit, setDeposit] = useState("");
  const [price, setPrice] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [power, setPower] = useState("");
  const [description, setDescription] = useState("");
  const [make, setMake] = useState("");
  const [formData, setFormData] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      brand,
      deposit,
      price,
      maxSpeed,
      power,
      description,
      make,
      /*   formData, */
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
    <div className="AddCar">
      <h3>Rent your Car</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          name="brand"
          value={brand}
          id="brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <div>
          <label htmlFor="picture">Picture</label>
          <input
            type="file"
            id="picture"
            name="picture"
            // value={picture.name || ""}
            onChange={setFormData}
          />
        </div>
        <label htmlFor="deposit">Deposit</label>
        <input
          type="text"
          name="deposit"
          value={deposit}
          id="deposit"
          onChange={(e) => setDeposit(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
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
        />{" "}
        <label htmlFor="make">Make</label>
        <input
          type="text"
          name="make"
          value={make}
          id="make"
          onChange={(e) => setMake(e.target.value)}
        />
        <label htmlFor="maxSpeed">Max Speed:</label>
        <input
          type="text"
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
  );
};

export default RentYourCar;
