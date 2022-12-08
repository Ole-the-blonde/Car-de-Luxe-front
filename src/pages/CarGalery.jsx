import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";

const CarGalery = () => {
  const { currentUser, isLoading } = useAuth();
  const [cars, setCars] = useState([]);
  const [searchBrand, setSearchBrand] = useState("");
  const navigate = useNavigate();
  console.log(cars);

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

  const deleteCar = async (id) => {
    await service.delete(`/api/cars/${id}`);
    await fetchCars();
  };

  const reserveCar = async (id) => {
    await service.post(`/api/cars/${id}/reserve`);
    navigate("/bookings");
  };

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className="cars">
      <div>
        <label>Search by brand:</label>
        <input
          value={searchBrand}
          onInput={(e) => {
            setSearchBrand(e.target.value);
          }}
        />
      </div>
      {filterCars().map((product) => {
        return (
          <div className="product" key={product._id}>
            <Link to={`/cars/${product._id}`}>
              <img src={product.image} alt={product.brand} />
            </Link>

            <div className="product-details">
              <p>{product.make}</p>

              {!currentUser?.isAdmin && (
                <button onClick={() => reserveCar(product._id)}>
                  Make a reservation
                </button>
              )}

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
