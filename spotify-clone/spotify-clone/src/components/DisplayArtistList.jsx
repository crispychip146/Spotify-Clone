import React from "react";
import { artistsData } from "../assets/frontend-assets/assets";
import ArtistItem from "./ArtistItem";


const DisplayArtistList = () => {
  return (
    <>
      <div className="mb-4">
        <div className="flex overflow-auto">
          {artistsData.map((item, index) => (
            <ArtistItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayArtistList;