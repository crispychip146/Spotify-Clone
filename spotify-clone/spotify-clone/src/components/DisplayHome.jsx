import React from 'react'
import Navbar from './Navbar'
import { albumsData, artistsData,songsData,playlistData, podcastData } from '../assets/frontend-assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import ArtistItem from './ArtistItem'
import PlaylistItem from './PlaylistItem'
import PodcastItem from './PodcastItem'
const DisplayHome = () => {
  return (
    <>
        <Navbar />
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Made For You</h1>
          <div className='flex overflow-auto'>
          {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Listen Again</h1>
          <div className='flex overflow-auto'>
          {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Your Favorite Artists</h1>
          <div className='flex overflow-auto'>
          {artistsData.map((item,index)=>(<ArtistItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Playlists</h1>
          <div className='flex overflow-auto'>
          {playlistData.map((item,index)=>(<PlaylistItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Podcasts</h1>
          <div className='flex overflow-auto'>
          {podcastData.map((item,index)=>(<PodcastItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
        </div>
    </>
  )
}

export default DisplayHome