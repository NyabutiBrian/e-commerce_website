import React, { useEffect } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';

import ProductOrder from '../layouts/order/ProductOrder';
import RecommendedProducts from '../layouts/category/RecommendedProducts';

const Order = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <Header />

        <ProductOrder />
        <RecommendedProducts />

        <Footer />
    </>
  )
}

export default Order