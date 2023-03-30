import React, { useEffect, useState } from "react";

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);
  const [breakTime, setBreakTime] = useState(0);
  useEffect(() => {
    const getMovieTime = localStorage.getItem("movieTime");
    setTime(getMovieTime);
    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
  }, [watchTime]);

  const handleBreakTime = (bt) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);
  };
  return (
    <div className="position-sticky fixed-top">
      <h1>My Cart</h1>

      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input type="text" value={time} disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <button
        onClick={() => handleBreakTime(15)}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </button>
      <button className="w-25 btn-circle bg-warning btn btn-info">20</button>
      <button className="w-25 btn-circle m-1 bg-danger btn btn-info">25</button>
      <input type="text" value={breakTime} disabled />
      <button className="mt-5 btn btn-info w-100">Complete</button>
    </div>
  );
};

export default SideCart;
