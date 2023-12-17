import React from 'react'

const BrandSupport = () => {
  return (
    <section className="py-8 px-6 bg-slate-50 pb-20">
        <div className='container mx-auto flex flex-col gap-10 items-center'>
            <div className='text-center mt-10'>
                <h3 className='font-bold text-4xl p-8'>Marcas Aliadas</h3>
                <p>Elegimos los mejores proveedores para que pueda estar seguro de la calidad.</p>
            </div>
            <div className='flex justify-center items-center gap-4 rounded-xl  shadow-md shadow-violet-700 mb-8 '>
                <div className='p-4'>
                    <img src="public\logo-intel-brand.svg" alt="intel-logo" width='150' height='150' />
                </div>
                <div className='p-4'>
                    <img src="https://compuzeus.com/wp-content/uploads/2023/08/2.png" alt="nod=logo" width='150' height='150' />
                </div>    
                <div className='p-4'>
                    <img src="https://compuzeus.com/wp-content/uploads/2023/08/mercado-pago.png" alt="mercado-pago-logo" width='150' height='150' />
                </div>
                <div className='p-4'>
                    <img src="public\logo-amd-brand.svg" alt="amd-logo" width='150' height='150' />
                </div>
                <div className='p-4'>
                    <img src="public\logo-asus-brand.svg" alt="asus-logo" width='150' height='150' />     
                </div > 
                <div className='p-4'>
                    <img src="public\logo-nvidia-brand.svg" alt="nvidia-logo" width='150' height='150' />
                </div>
  
            </div>

        </div>

    </section>
  )
}

export default BrandSupport