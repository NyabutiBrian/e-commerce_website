import React from 'react'

import banner from '../../assets/images/banner-bg.webp'

const Hero = () => {
  return (
    <section id="hero">
        <div className="bg-cover bg-no-repeat bg-center py-52" style={{ backgroundImage: `url(${banner})` }}>
            <div className="max-w-screen-xl mx-auto">
                <div className="mx-4 zoom-in-bg">
                    <div className="h1 text-primary font-medium mb-4 uppercase">
                        <h1>Best <span className="font-Shrikhand text-4xl md:text-5xl">collection</span></h1>
                        <h1><span className="font-Shrikhand text-4xl md:text-5xl">Body</span> glamour</h1>
                    </div>
                    <p className="text-pg max-w-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                        accusantium perspiciatis, sapiente
                        magni eos dolorum ex quos dolores odio
                    </p>
                    <div className="mt-12">
                        <a href="#categories" className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-3xl hover:bg-transparent hover:text-primary">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero