import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "../api/apiHandler";

const CarGalery = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await service.get("/api/cars");
      setCars(data);
    };
    fetchCars();
  }, []);

  return (
    <div className="cars">
      {cars.map((product) => {
        return (
          <div className="product" key={product._id}>
            <Link to={`/cars/${product._id}`}>
              <img src={product.image} alt={product.brand} />
            </Link>

            <div className="product-details">
              <p>{product.make}</p>

              <button>Reserve</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarGalery;
