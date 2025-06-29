import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = ({isDarkMode})=> {
  return (
    <div className='w-11/12  max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
          <div>
      <Image 
        src={assets.profile_img} 
        alt="Profile" 
        width={128} 
        height={128} 
        className="rounded-full object-cover"
      />
    </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Hemant Raj  <Image src={assets.hand_icon} alt='' className='w-6'/></h3> 
            <h1 className=' text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                 full stack web devloper </h1>
                 <p>
                    Hi, I'm Hemant from Patna,Bihar a passionate Full-Stack Web Developer and a final-year B.Tech Computer Science student. 
                    I specialize in building modern, scalable web applications.
                    </p>
                    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                        <a href="#contact"
                        className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>contact me  
                        <Image src={assets.right_arrow_white} alt=''
                        className='w-4'/></a>


   <a href="/sample-resume.pdf" download 
   className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white text-black hover:bg-gray-100 transition dark:text-black">
  My Resume
  <Image 
    src={assets.download_icon} 
    alt="Download Icon" 
    width={16}
    height={16}
    className="w-4 h-4 object-contain"
  />
</a>

                    </div>
                 
    </div>
  )
}

export default Header