import React, { useState, useEffect } from "react";
import axios from "axios";
function HomeCard() {
  const [actors, setActors] = useState();
  const [err, setErr] = useState("");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setActors(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        setErr(err);
        // console.log(err);
      });
  }, []);
  if (!actors) return <p>loading</p>;

  return (
    <div className=" grid grid-cols-3  gap-10 justify-between items-center my-10">
      {actors
        .filter((alive) => alive.status === "Alive")
        .map((data) => {
          return (
            <div
              key={data.id}
              className="justify-between w-80 items-center bg-gray-100 shadow hover:shadow-lg"
            >
              <img
                src={data.image}
                alt="actors"
                className="w-full h-44 object-cover"
              />
              <div className="flex justify-between items-center p-6">
                <p>{data.name}</p>
                <p>{data.gender}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default HomeCard;
