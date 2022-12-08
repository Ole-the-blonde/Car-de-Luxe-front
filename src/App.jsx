import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import CarGalery from "./pages/CarGalery";
import RentYourCar from "./pages/RentYourCar";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import LoggedOut from "./components/LoggedOut/LoggedOut";
import CarDetails from "./pages/CarDetails";
import FormSignUp from "./components/Forms/FormSignUp";
import FormSignIn from "./components/Forms/FormSignIn";
import EditCar from "./pages/EditCar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarGalery />} />
        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="*" element={<NotFound />} />
        <Route element={<LoggedOut />}>
          <Route path="/signin" element={<FormSignIn />} />
          <Route path="/signup" element={<FormSignUp />} />
        </Route>
        <Route element={<PrivateRoute />}>
          {/* All routes after the PrivateRoute require the user to be loggedIn */}
          <Route path="/rentcar" element={<RentYourCar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings" element={<Bookings />} />
        </Route>

        <Route path="/car/:id/edit" element={<EditCar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
