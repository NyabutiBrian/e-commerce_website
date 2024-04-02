import React, { useEffect } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';

import Hero from '../layouts/index/Hero';
import Features from '../layouts/index/Features';
import Categories from '../layouts/index/Categories';
import Products from '../layouts/index/Products';
import About from '../layouts/index/About';

const Landing = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
      
  return (
    <>
        <Header />

        <Hero />
        <Features />
        <Categories />
        <Products />
        <About />

        <Footer />
    </>
  )
}

export default Landing