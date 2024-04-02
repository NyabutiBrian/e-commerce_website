import React, { useEffect } from 'react'

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
        <Header />

        <CategoryProducts />
        <Features />
        <RecommendedProducts />

        <Footer />
    </>
  )
}

export default Category