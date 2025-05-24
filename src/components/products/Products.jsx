import React from 'react'
import Card from '../card/Card'

function Products() {
  return (
    <>
    <div className='min-h-screen text-white grid'>

         <div className='flex justify-center  mt-5 p-2 motion-rotate-in-loop motion-opacity-in-0 motion-translate-x motion-blur-in-md motion-duration-[2s]'>
            <h1 className='bg-gradient-to-r from-[#ad68de] to-[#4E0FAB] bg-clip-text text-transparent font-goth text-4xl'>PRODUCTS</h1>
        </div>
        {/* CARD */}
        <div className='grid grid-cols-1 sm:grid-cols-4 w-full justify-items-center sm:gap-3 motion-rotate-in-loop motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md motion-duration-[2s]'>
           <Card />
        </div>
        <div className='grid'>
        <div className='place-self-center mt-5 bg-inherit rounded-full text-red-300 p-5 border border-red-100 motion-rotate-in-loop motion-opacity-in-0 motion-translate-x-in-50 motion-blur-in-md motion-duration-[2s]'>
            !Note: This website does not support online purchasing, visit the store to explore the world of products.
        </div>

        </div>
    </div>
       
    </>
  )
}

export default Products

