"use client"
import React from 'react'
import Image from 'next/image'
import Tilt from "react-parallax-tilt"
const HeroImage = () => {
  return <Tilt>
    <div className='hidden lg:block'>
        <Image src="/images/hero.png" width={700} height={1000} alt="Hero"/>
    </div>
  </Tilt>
}

export default HeroImage
