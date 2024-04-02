import React, { useEffect } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';

import ProductDetails from '../layouts/product/ProductDetails';
import Categories from '../layouts/index/Categories';

const Product = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <Header />

        <ProductDetails />
        <Categories />

        <Footer />
    </>
  )
}

export default Product