import React, { useEffect, useRef } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData,artistsData } from '../assets/frontend-assets/assets'
import DisplayArtist from './DisplayArtist'
import DisplayPlaylist from './DisplayPlaylist'
import DIsplayPodcast from './DIsplayPodcast'
import DisplayPlaylistList from './DisplayPlaylistList'
import DisplayLikedSongs from './DisplayLikedSongs'
import DisplayArtistList from './DisplayArtistList'

const Display = () => {


      const displayRef =useRef();
      const location =useLocation();

      const isAlbum=location.pathname.includes('album');
      const albumId=isAlbum?location.pathname.slice(-1):"";
      const bgColor =albumsData[Number(albumId)].bgColor;

      // const isArtist=location.pathname.includes('artist');
      // const artistId=isArtist?location.pathname.slice(-1):"";

      // const isPlaylist=location.pathname.includes('playlist');
      // const playlistId=isArtist?location.pathname.slice(-1):"";
      useEffect(()=>{
        if(isAlbum)
        {
          displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`
        }
        else
        {
          displayRef.current.style.background=`#121212`;
        }
      })

  return (
    <div ref={displayRef} className='w-[100%] h-[97%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w[75%] '>
        <Routes>
            <Route path='/' element={<DisplayHome />} />
            <Route path='/album/:id' element={<DisplayAlbum />} />
            <Route path='/artist/:id' element={<DisplayArtist />} />
            <Route path='/playlist/:id' element={<DisplayPlaylist />} />
            <Route path='/podcast/:id' element={<DIsplayPodcast />} />
            <Route path='/playlist' element={<DisplayPlaylistList />} />
            <Route path='/likedsongs' element={<DisplayLikedSongs />} />
            <Route path='/artists' element={<DisplayArtistList />} />
        </Routes>
    </div>
  )
}

export default Display