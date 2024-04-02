import React from 'react'

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto scroll-m-28" id="about">
        <div className="py-8 mx-4">
            <h2 className="text-2xl font-medium text-primary font-Shrikhand text-center mb-6">About Us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto justify-center">
                <div className="col-span-1 rounded-t-3xl lg:rounded-t-none lg:rounded-s-3xl border-primary border-t-2 lg:border-t-0 lg:border-l-2 px-3 py-6 flex justify-center items-center gap-5 shadow-lg">
                    <h1 className="font-medium font-Shrikhand text-primary h1">MINTY</h1>
                </div>

                <div className="col-span-2 rounded-b-3xl lg:rounded-b-none lg:rounded-e-3xl border-primary border-b-2 lg:border-b-0 lg:border-r-2 px-3 py-6 flex justify-center items-center gap-5 shadow-lg">
                    <p className="text-primary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut autem id! Totam vero alias, in quae sunt assumenda beatae facere. Praesentium mollitia aspernatur quaerat 
                        distinctio et unde inventore, esse libero. Blanditiis eveniet ipsum quis aliquam ex esse dolor? Ipsa eaque debitis placeat aliquam accusantium architecto obcaecati. Ratione ea 
                        quam rem esse non fuga neque quo quidem sapiente itaque mollitia aliquam, recusandae et illum praesentium totam culpa nisi in cumque quaerat exercitationem. Necessitatibus, libero 
                        incidunt. Inventore autem hic quas unde esse exercitationem eligendi harum recusandae odit dicta voluptas ratione molestiae eveniet atque, tempore eaque voluptatibus molestias veritatis. 
                        Quas, nulla voluptatem?
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About