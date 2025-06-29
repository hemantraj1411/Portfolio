import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';



const Services = () => {
  return (
    <div id='Services' className='w-full px-[12%] py-10 scroll-mt-20 '>
        <h4 className='text-center mb-2 text-lg font-Ovo'>
            What I offer</h4>
            <h2 className='text-center text-5xl font-Ovo'>
                My Services
            </h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
              Hi, I'm Hemant from Patna,Bihar a passionate Full-Stack Web Developer and a final-year B.Tech Computer Science student. 
                    I specialize in building modern, scalable web applications & android application.    
            </p>
    
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 my-10">
  {serviceData.map(({ icon, title, description, link }, index) => (
    <div
      key={index}
      className="border border-gray-300 rounded-lg px-6 py-10 h-full 
                 cursor-pointer transform transition duration-500 
                 hover:-translate-y-1 hover:bg-purple-50 
                 hover:shadow-[4px_4px_0_#000] flex flex-col justify-between"
    >
      <div>
        <Image src={icon} alt={title} className="w-10 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-5">{description}</p>
      </div>
      <a
        href={link}
        className="flex items-center gap-2 text-sm mt-5 text-purple-700 hover:underline"
      >
        Read more <Image src={assets.right_arrow} alt="arrow" className="w-4" />
      </a>
    </div>
  ))}
</div>


    </div>
  )
}

export default Services