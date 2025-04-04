'use client'

import React from 'react'
import Navbar from '@/components/ladingPage/navbar/page'
import HeroSection from '@/components/ladingPage/heroSection/page'
import Features from '@/components/ladingPage/features/page'
import Tags from '@/components/ladingPage/tags/page'
import Footer from '@/components/ladingPage/footer/page'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Tags />
      <Features />
      <Footer />
    </>
  )
}

export default page