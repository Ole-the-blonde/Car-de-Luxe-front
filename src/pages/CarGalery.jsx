import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import Car from "./Car";
import "../styles/carGalery.css";

const CarGalery = () => {
  const { currentUser, isLoading } = useAuth();
  const [cars, setCars] = useState([]);
  const [searchBrand, setSearchBrand] = useState("");

  const filterCars = () => {
    let carsFiltered = cars; //give the value of cars at line 9 to new variable

    if (searchBrand) {
      carsFiltered = carsFiltered.filter((car) =>
        car.brand.toLowerCase().includes(searchBrand.toLowerCase())
      );
    }

    return carsFiltered;
  };

  const fetchCars = async () => {
    const { data } = await service.get("/api/cars");
    setCars(data);
  };

  useEffect(() => {
    fetchCars();
    filterCars();
  }, []);

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className="cars">
      <div className="searchBar">
        <label>Search by brand:</label>
        <input
          value={searchBrand}
          onInput={(e) => {
            setSearchBrand(e.target.value);
          }}
        />
      </div>
      <section className="carsList">
        {filterCars().map((product) => {
          return <Car product={product} user={currentUser} />;
        })}
      </section>
    </div>
  );
};

export default CarGalery;
