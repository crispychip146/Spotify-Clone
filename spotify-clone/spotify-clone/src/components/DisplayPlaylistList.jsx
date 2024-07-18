import React from "react";
import AlbumItem from "./AlbumItem";
import PlaylistItem from "./PlaylistItem";
import { albumsData, playlistData } from "../assets/frontend-assets/assets";

const DisplayPlaylistList = () => {
  return (
    <>
      <div className="mb-4">
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="flex overflow-auto">
          {playlistData.map((item, index) => (
            <PlaylistItem
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

export default DisplayPlaylistList;
