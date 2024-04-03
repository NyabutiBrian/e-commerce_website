import React, { useEffect } from 'react'
// import { Helmet, HelmetProvider } from 'react-helmet-async';

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
        {/* <HelmetProvider>
            <Helmet defer={false}>
                <meta property="og:image" content="https://minty-body-glamour.vercel.app/assets/bag2-NNQiZTyr.webp"/>
                <meta property="og:title" content="MINTY | BEST | AFFORDABLE | FASHION | BAGS" />
                <meta property="og:description" content="Explore our fashionable bags and meet your aspirations with Us! MINTY, Connecting new looks and design with enthusiastic lovers." />
            </Helmet>
        </HelmetProvider> */}

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