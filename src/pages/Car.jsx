import React from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
import "../styles/carGalery.css";

const Car = (props) => {
  const product = props.product;
  const currentUser = props.user;
  const navigate = useNavigate();

  const deleteCar = async (id) => {
    await service.delete(`/api/cars/${id}`);
    await fetchCars();
  };

  const reserveCar = async (id) => {
    await service.post(`/api/cars/${id}/reserve`);
    navigate("/favorites");
  };

  return (
    <div className="product" key={product._id}>
      <Link to={`/cars/${product._id}`}>
        <img src={product.image} alt={product.brand} />
      </Link>

      <div className="product-details">
        <p>{product.make}</p>

        {!currentUser?.isAdmin && (
          <button onClick={() => reserveCar(product._id)}>
            Select your Favorite
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
};

export default Car;
