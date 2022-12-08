import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import { useParams } from "react-router-dom";

const EditCar = () => {
  const params = useParams();
  const [car, setCar] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    service
      .patch(`/api/cars/${params.id}`, car)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    service.get(`/api/cars/${params.id}`).then((res) => {
      setCar(res.data);
    });
  }, []);

  if (!car) return <p>Loading...</p>;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="brand">Brand:</label>
      <input
        type="text"
        name="brand"
        value={car.brand}
        id="brand"
        onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
      />
      <label htmlFor="deposit">Deposit</label>
      <input
        type="text"
        name="deposit"
        value={car.deposit}
        id="deposit"
        onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
      />
      <label htmlFor="price">Price:</label>
      <input
        type="text"
        name="price"
        value={car.price}
        id="price"
        onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
      />
      <label htmlFor="power">Power</label>
      <input
        type="text"
        name="power"
        value={car.power}
        id="power"
        onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
      />{" "}
      <label htmlFor="make">Make</label>
      <input
        type="text"
        name="make"
        value={car.make}
        id="make"
        onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
      />
      <label htmlFor="maxSpeed">Max Speed:</label>
      <input
        type="text"
        name="maxSpeed"
        value={car.maxSpeed}
        id="maxSpeed"
        onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={car.description}
        id="description"
        onChange={(e) => setCar({ ...car, [e.target.name]: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditCar;
