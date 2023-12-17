import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="py-8 px-6 bg-slate-50 text-black">
      <div className="container mx-auto flex justify-between gap-10 items-center">
        <div className='flex flex-col gap-7'>
          <h2 className='text-violet-900 uppercase text-6xl font-bold'>La mejor tienda de tecnología</h2>
          <p>
            Encuentra los mejores productos tecnológicos al mejor precio.
            Tenemos una amplia selección de productos para todos los gustos y necesidades.
            Ofrecemos envíos a todo Arequipa y garantía de satisfacción.
          </p>
          <div>
            <Link to='/products' className='inline p-2 border-2 border-black text-lg font-bold text-center hover:text-violet-900 hover:uppercase  hover:underline hover:border-violet-900'>Comience a comprar hoy mismo!!</Link>   
          </div>
        </div>
        <div>
          <img src="public\img-hero.svg" alt="" />
        </div>
      </div>
    </section>

  )
}

export default Home