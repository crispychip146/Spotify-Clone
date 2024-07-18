import React from "react";
import { songsData } from "../assets/frontend-assets/assets";
import SongItem from "./SongItem";

const DisplayLikedSongs = () => {
  return (
    <>
      <div className="mb-4">
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
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

export default DisplayLikedSongs;
