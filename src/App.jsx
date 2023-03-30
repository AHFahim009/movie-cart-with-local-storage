import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./COMPONENTS/HEADER/Header";
import Home from "./COMPONENTS/HOME/Home";
import SideCart from "./COMPONENTS/SIDE CART/SideCart";

const App = () => {
  const [watchTime, setWatchTime] = useState("");
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("movieTime"));

    if (previousWatchTime) {
      const totalTime = previousWatchTime + time;

      localStorage.setItem("movieTime", totalTime);
      setWatchTime(totalTime);
    } else {
      localStorage.setItem("movieTime", time);
      setWatchTime(time);
    }

    // const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    // if (previousWatchTime) {
    //   const totalWatchTime = previousWatchTime + time;
    //   localStorage.setItem("watchTime", totalWatchTime);
    // } else {
    //   localStorage.setItem("watchTime", time);
    // }
  };
  return (
    <div className="px-3 container">
      <div className="mb-3 m-auto">
        <Header></Header>
      </div>
      <div className=" px-3 main  row  ">
        <div className="home-container col-lg-8   ">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>

        <div className="side-cart  col-lg-4 card ">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;
