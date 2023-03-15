import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMotorcycles } from "../redux/motorcycles/motorcycles";
import bike from "../images/bike.png";

function Home() {
  const dispatch = useDispatch();
  const motorcycle = useSelector((state) => state.motorcycles);

  useEffect(() => {
    dispatch(getMotorcycles());
  }, []);

  return (
    <div className="lg:w-10/12 md:w-10/12 bg-white mx-0 md:mx-40 lg:mx-56">
      <div
        className="
        w-full bg-center bg-no-repeat h-96 bg-cover
        align-middle justify-center
        flex-col
        flex items-center text-center mb-10"
          style={{ backgroundImage: `url(${bike})` }}
        >
          <h1 className="text-blue-500 text-5xl font-bold ">Welcome to Targie</h1>
      </div>
      <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10
      ">
        {motorcycle && motorcycle.message ? (
          motorcycle.message.map((url) => (
            <img
              src={url}
              key={url}
              alt="dogs"
              className="object-cover w-full h-48"
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
