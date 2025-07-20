import React from 'react'
import Image from 'next/image'
import { assets, contactList, toolsData } from '@/assets/assets'

function Contact() {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
      <p className='text-center mb-12 max-w-2xl mx-auto mt-5 font-Ovo'>
        You can reach me through my official channels.
      </p>
        <div className="flex justify-center items-center w-full">
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl'>
                {contactList.map(({icon, title, description, link}, index)=>(
                <li key={index}>
                    <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black flex items-center gap-4 min-w-0 w-full min-h-[80px]'
                    >
                    <Image src={icon} alt={title} className='w-7 flex-shrink-0'/>
                    <span className='text-gray-700 truncate'>{description}</span>
                    </a>
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Contact
