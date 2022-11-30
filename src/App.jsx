import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import CarGalery from "./pages/CarGalery";
import RentYourCar from "./pages/RentYourCar";
import Favorites from "./pages/Favorites";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import LoggedOut from "./components/LoggedOut/LoggedOut";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarGalery />} />
        <Route path="/rentcar" element={<RentYourCar />} />
        <Route element={<LoggedOut />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          {/* All routes after the PrivateRoute require the user to be loggedIn */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
