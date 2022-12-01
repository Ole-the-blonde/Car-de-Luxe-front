import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../api/apiHandler";

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCar = async () => {
      const result = await service.get(`/api/cars/${id}`);
      setCar(result.data);
    };
    fetchCar();
  }, []);

  return <>{car && <h1>{car.brand}</h1>}</>;
};

export default CarDetails;
