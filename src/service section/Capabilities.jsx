import React from 'react'
import { capabilities } from '../constants'
import CapCard from '../components/CapCard'

const Capabilities = () => {
  return (
    <section className='bg-shades-300 p-px py-10 lg:pt-10 lg:pb-[100px] text-primary-700 pointer-events-none'>
        <div className='flex flex-col space-y-5 mb-20'>
            <h5 className='h5 text-center font-bold text-primary-400'>Our Core Capabilities</h5>
            <h1 className='text-center h2-small md:h2 lg:h1-small 3xl:h1 font-medium md:font-medium text-primary-800'>Our capabilities and expertise makes us stand out from the noise</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {capabilities.map((cap)=>(
                <CapCard key={cap.id} {...cap}/>
            ))}
        </div>
    </section>
  )
}

export default Capabilities