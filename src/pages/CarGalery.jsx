import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";

const CarGalery = () => {
  const { currentUser, isLoading } = useAuth();
  const [cars, setCars] = useState([]);
  console.log(cars);
  const fetchCars = async () => {
    const { data } = await service.get("/api/cars");
    setCars(data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const deleteCar = async (id) => {
    await service.delete(`/api/cars/${id}`);
    await fetchCars();
  };

  if (isLoading) return <p>Loading....</p>;

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

              {!currentUser?.isAdmin && <button>Reserve</button>}
              {/* <pre>{JSON.stringify(currentUser, null, 2)}</pre> */}
              {currentUser?.isAdmin && (
                <>
                  <button onClick={() => deleteCar(product._id)}>Delete</button>
                  <Link to={`/car/${product._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarGalery;
