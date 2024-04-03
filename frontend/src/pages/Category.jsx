import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

import CategoryProducts from '../layouts/category/CategoryProducts';
import Features from '../layouts/index/Features';
import RecommendedProducts from '../layouts/category/RecommendedProducts';

const Category = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <Helmet>
          <meta property="og:image" content="https://minty-body-glamour.vercel.app/assets/bag2-NNQiZTyr.webp"/>
          <meta property="og:title" content="MINTY | BEST | AFFORDABLE | FASHION | BAGS" />
          <meta property="og:description" content="Explore our fashionable bags and meet your aspirations with Us! MINTY, Connecting new looks and design with enthusiastic lovers." />
        </Helmet>

        <Header />

        <CategoryProducts />
        <Features />
        <RecommendedProducts />

        <Footer />
    </>
  )
}

export default Category