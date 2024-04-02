import React from 'react'
import { Link } from 'react-router-dom'

import bag10 from '../../assets/images/category/bag10.webp'
import bag11 from '../../assets/images/category/bag11.webp'
import bag12 from '../../assets/images/category/bag12.webp'

const Categories = () => {
  return (
    <section className="max-w-screen-xl mx-auto scroll-m-28" id="categories">
        <div className="py-8 mx-4">
            <h2 className="text-2xl font-medium text-primary font-Shrikhand text-center mb-6">Categories</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="relative rounded-tr-3xl rounded-bl-3xl overflow-hidden group bg-cover bg-no-repeat bg-center py-32" style={{ backgroundImage: `url(${bag10})` }}>
                    <Link to="/category" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-Shrikhand font-medium group-hover:bg-opacity-60 transition">Category 1</Link>
                </div>
                <div className="relative rounded-tr-3xl rounded-bl-3xl overflow-hidden group bg-cover bg-no-repeat bg-center py-32" style={{ backgroundImage: `url(${bag11})` }}>
                    <Link to="/category"className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-Shrikhand font-medium group-hover:bg-opacity-60 transition">Category 2</Link>
                </div>
                <div className="relative rounded-tr-3xl rounded-bl-3xl overflow-hidden group bg-cover bg-no-repeat bg-center py-32" style={{ backgroundImage: `url(${bag12})` }}>
                    <Link to="/category"className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-Shrikhand font-medium group-hover:bg-opacity-60 transition">Category 3</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories