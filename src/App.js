import { useState } from "react";
import SideMenu from "./Components/SideMenu";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "./Components/Orders";
import Income from "./Components/Income";
import Help from "./Components/Help";
import Products from "./Components/Products";
import Reviews from "./Components/Reviews";
import PageNotFound from "./Components/PageNotFound";
import Coupon from "./Components/Coupon";

const Routing = () => {
  return(
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/products" exact element={<Products />} />
      <Route path="/orders" exact element={<Orders />} />
      <Route path="/review" exact element={<Reviews />} />
      <Route path="/income" exact element={<Income />} />
      <Route path="/coupon" exact element={<Coupon />} />
      <Route path="/help" exact element={<Help />} />


      <Route path="*" exact element={<PageNotFound />} />
    </Routes>
  );
}

function App() {

  const [openSlider, setOpenSlider] = useState(false);

  return (
    <div className="row m-0 vh-100">
      <div className={`${openSlider ? 'slider-open' : 'slider-close'} col-md-8 d-lg-block col-lg-2 col-xl-2 side-nav-drag bg-dark text-light py-3 px-md-3 px-lg-2 px-xl-3`}>
        <SideMenu openSlider={openSlider} setOpenSlider={setOpenSlider} />
      </div>
      <div className="col-12 col-lg-10 col-xl-10 ps-sm-2 py-3 px-md-3 px-xl-5" style={{ backgroundColor: "antiquewhite" }}>
        <nav className="navbar p-0" >
          <div className="msg d-flex align-items-center">
            <button className="d-lg-none navbar-toggler" type="button" onClick={() => { setOpenSlider(!openSlider) }}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="login-message py-3 ms-4 ms-lg-0">
              <h3 className="h4 m-0"> Hello, Piyush Raj <i>👋</i></h3>
            </div>
          </div>
          <div className="search d-none d-md-block">
            <input type="search" name="search" id="search" className="form-control" placeholder="🔍 Searching..." />
          </div>
        </nav>
        <Routing />
      </div>
    </div>
  );
}

export default App;
