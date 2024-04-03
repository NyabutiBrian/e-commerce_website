import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import bag9 from '../../assets/images/products/bag9.webp'

const ProductDetails = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
        <div className="mx-4">
            {/* Breadcrumb */}
            <div className="container py-4 flex items-center gap-3">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#234645' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                </Link>
                <span className="text-sm text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width='0.6rem' fill='#234645' viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </span>
                <p className="text-primary font-medium font-Shrikhand">Product</p>
            </div>

            {/* Product Details */}
            <div className="grid lg:grid-cols-2 gap-4">

                {/* Left */}
                <div className="bg-contain bg-no-repeat bg-center py-44" style={{ backgroundImage: `url(${bag9})` }}>
                </div>

                {/* Right */}
                <div className="text-primary">
                    <h2 className="text-2xl font-medium font-Shrikhand uppercase mb-2">Bag 1</h2>
                    <div className="space-y-2">
                        <p className="space-x-2">
                            <span className="font-semibold">Availability: </span>
                            <span className="text-red-500">Few Units Available</span>
                        </p>
                        <p className="space-x-2">
                            <span className="font-semibold">Brand: </span>
                            <span>Apex</span>
                        </p>
                        <p className="space-x-2">
                            <span className="font-semibold">Category: </span>
                            <span>Sofa</span>
                        </p>
                        <p className="space-x-2">
                            <span className="font-semibold">SKU: </span>
                            <span>MINTY001</span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-Shrikhand mt-4">
                        <p className="text-xl text-primary font-semibold">Ksh 500</p>
                        {/* <p className="text-base text-gray-400 line-through">$55.00</p> */}
                    </div>

                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                        reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
                        consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.
                    </p>

                    <div className="mt-6 flex border-b border-primary/50 pb-5 pt-5">
                        <Link to="/order" className="bg-primary border border-primary text-white hover:text-secondary px-8 py-2 font-medium rounded-3xl flex items-center gap-2 transition duration-200 transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" fill="#FFFAFA" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg> 
                            Order
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <p className="text-sm font-medium">Share</p>
                        <a href="#" className="h-8 w-8 rounded-full border border-primary/50 flex items-center justify-center transition duration-200 transform hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#128C7E' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                        </a>
                    </div>
                </div>

                <Helmet>
                    <meta property="og:image" content={bag9} /> {/* Assuming bag9 is the image URL */}
                    <meta property="og:title" content="APEX Bag" />
                    <meta property="og:description" content="Explore our fashionable bags and meet your aspirations with Us! MINTY, Connecting new looks and design with enthusiastic lovers." />
                </Helmet>

            </div>
        </div>
    </section>
  )
}

export default ProductDetails