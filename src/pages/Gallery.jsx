import React from 'react'
import transition from '../transition'
import Slider from '../components/Slider'
import SliderRev from '../components/SliderRev'
import Menu from '../components/Menu'
import Hr from '../components/Hr'
import PhotoGallery from '../components/PhotoGallery'
import Grid from '../components/Grid'
import Footer from '../components/Footer'



function Gallery() {
  return (
    <div className="w-full h-auto top-[100vh] bg-[#f7e9e9]">
      <Menu />
      <h1 className="uppercase text-7xl flex justify-center items-center pt-20 tracking-tighter font-thin">Wildcamp
     </h1>
     <p className ="w-full text-3xl flex justify-center pt-5 tracking-tight font-thin"> wild nature </p>
      <Hr />
      <Slider/>
      <Hr/>
      <Grid/>
      <Hr />
      <PhotoGallery />
      <Hr />
      <SliderRev />
      <Footer/>
    </div>
  )
}

export default transition(Gallery)
