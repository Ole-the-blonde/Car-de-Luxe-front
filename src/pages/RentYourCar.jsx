import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../api/apiHandler";

const RentYourCar = (props) => {
  const [brand, setBrand] = useState("");
  const [deposit, setdeposit] = useState("");
  const [price, setPrice] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [power, setPower] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState("");

  // const [car, setCar] = useState({
  //   brand: '',
  //   deposit: '',
  // })
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // <== ADD
    e.preventDefault();

    const requestBody = { title, description };

    service
      .post("/api/rentcar", requestBody)
      .then((response) => {
        navigate("/profile");
        //Do something with the response
      })
      .catch((e) => console.error(e));

    // axios
    //   .post(`${import.meta.env.VITE_BACKEND_URL}/api/rentcar`, requestBody)
    //   .then((response) => {
    //     setTitle("");
    //     setDescription("");
    //   })
    //   .catch((error) => console.log(error));
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

        <label htmlFor="deposit">deposit:</label>
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
