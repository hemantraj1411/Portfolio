import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Work =  ({isDarkMode}) => {
  return (
    <div id='Work'className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>
            My portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>
                My latest work
            </h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
           Welcome to my web devlopment portfolio! Explore a coolection of projects 
           showcasing my expertise in web and android devlopment.
            </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10 px-4 sm:px-6 md:px-8">
  {workData.map((project, index) => (
    <div
      key={index}
      className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
                 relative cursor-pointer group transition duration-500 shadow-sm 
                 hover:shadow-[4px_4px_0_#000]"
      style={{ backgroundImage: `url(${project.bgImage})` }}
    >
      <div
        className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                   -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                   duration-300 group-hover:bottom-7"
      >
        <div>
          <h2 className="font-semibold text-gray-800 text-base">{project.title}</h2>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
        <div className='border rounded-full border-black w-9 aspect-square flex
        items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 
        tansition'>
          <Image src={assets.send_icon} alt="send icon" className="w-5" />
        </div>
      </div>
    </div>
  ))}
  </div>
  <a 
  href="" 
  className={`w-max flex items-center justify-center gap-2
    ${isDarkMode ? 'text-white border-white bg-[#2a1a3f]' : 'text-gray-700 border-gray-700 hover:bg-lightHover'}
    border-[0.5px] rounded-full py-3 px-10 mx-auto my-20
    duration-500`}
>
  Show more 
  <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
</a>

  </div>
  )
}

export default Work