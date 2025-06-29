import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


const About = ({isDarkMode}) => {
  return (
    <div id="About" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
        <h4 className='text-center text-5xl font-Ovo'>About me</h4>

<div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 '>
  <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
    <Image src ={assets.user_image} alt='user' className='w-full rounded-3xl' /> 
  </div>
  <div className='flex-1'>
  <p className='mb-10 max-w-2xl font-Ovo'>I'm currently in the final year of my B.Tech in Computer Science and 
     actively preparing for placements. Over the past few years, I've developed 
     strong hands-on experience with both frontend and backend technologies.
     I enjoy turning ideas into real-world applications — from responsive UIs 
     to backend APIs and database integrations and I’m continuously 
     learning to stay up-to-date with the latest in web development.</p>

     <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
  {infoList.map(({ icon, iconDark, title, description }, index) => (
    <li
  key={index}
  className={`border border-gray-400 rounded-xl p-6 cursor-pointer transform transition duration-500 hover:-translate-y-1 hover:bg-purple-50 ${
    isDarkMode
      ? 'hover:shadow-[4px_4px_0_#fff]' // white shadow in dark mode
      : 'hover:shadow-[4px_4px_0_#000]' // black shadow in light mode
  }`}
>
  <Image src={isDarkMode ? iconDark || icon : icon} alt={title} className="w-7 mt-3" />
  <div>
    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
    <p className="text-gray-600 text-sm dark:text-gray-300">{description}</p>
  </div>
</li>

  ))}
</ul>

<h4 className='my-6 text-grey-700 font-Ovo'>Tools I use</h4>
<ul className='flex items-center gap-3 sm:gap-5'>
  {toolsData.map((tool, index)=>(
    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
    key={index}>
    <Image src={tool} alt='Tool'/>
    
    </li>
  ))}
</ul>
  </div>
</div>
</div>
)
}

export default About