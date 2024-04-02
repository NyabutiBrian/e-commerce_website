import React from 'react'
import { Link } from 'react-router-dom'

import bag1 from '../../assets/images/products/bag1.webp'
import bag2 from '../../assets/images/products/bag2.webp'
import bag3 from '../../assets/images/products/bag3.webp'
import bag4 from '../../assets/images/products/bag4.webp'

const Products = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
        <div className="py-16 mx-4">
            <h2 className="text-2xl font-medium text-primary font-Shrikhand text-center mb-6">New Arrivals</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">

                {/* Product 1 */}
                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden group transition duration-200 transform hover:scale-105">
                    <div className="relative bg-cover bg-no-repeat bg-center py-44" style={{ backgroundImage: `url(${bag1})` }}>
                    </div>

                    <div className="py-4 px-4 text-primary ">
                        <div>
                            <p className="font-medium mb-2">Bag 1</p>
                        </div>
                        <div className="mb-1">
                            <p className="text-xl font-semibold">Ksh 500 /=</p>
                        </div>
                    </div>

                    <Link to="/product" className="block w-full py-4 text-center text-white font-medium primary-grad-to-br rounded-b-3xl hover:text-secondary transition">Order Now</Link>
                </div>

               {/* Product 2 */}
                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden group transition duration-200 transform hover:scale-105">
                    <div className="relative bg-cover bg-no-repeat bg-center py-44" style={{ backgroundImage: `url(${bag2})` }}>
                    </div>

                    <div className="py-4 px-4 text-primary ">
                        <div>
                            <p className="font-medium mb-2">Bag 2</p>
                        </div>
                        <div className="mb-1">
                            <p className="text-xl font-semibold">Ksh 500 /=</p>
                        </div>
                    </div>

                    <Link to="/product" className="block w-full py-4 text-center text-white font-medium primary-grad-to-br rounded-b-3xl hover:text-secondary transition">Order Now</Link>
                </div>

                {/* Product 3 */}
                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden group transition duration-200 transform hover:scale-105">
                    <div className="relative bg-cover bg-no-repeat bg-center py-44" style={{ backgroundImage: `url(${bag3})` }}>
                    </div>

                    <div className="py-4 px-4 text-primary ">
                        <div>
                            <p className="font-medium mb-2">Bag 3</p>
                        </div>
                        <div className="mb-1">
                            <p className="text-xl font-semibold">Ksh 500 /=</p>
                        </div>
                    </div>

                    <Link to="/product" className="block w-full py-4 text-center text-white font-medium primary-grad-to-br rounded-b-3xl hover:text-secondary transition">Order Now</Link>
                </div>

                {/* Product 4 */}
                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden group transition duration-200 transform hover:scale-105">
                    <div className="relative bg-cover bg-no-repeat bg-center py-44" style={{ backgroundImage: `url(${bag4})` }}>
                    </div>

                    <div className="py-4 px-4 text-primary ">
                        <div>
                            <p className="font-medium mb-2">Bag 4</p>
                        </div>
                        <div className="mb-1">
                            <p className="text-xl font-semibold">Ksh 500 /=</p>
                        </div>
                    </div>

                    <Link to="/product" className="block w-full py-4 text-center text-white font-medium primary-grad-to-br rounded-b-3xl hover:text-secondary transition">Order Now</Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Products