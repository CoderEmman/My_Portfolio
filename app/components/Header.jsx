import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Emman Torrecampo <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Software developer</h1>    
      <p className='max-w-exl mx-auto font-Ovo'>I am a graduating student from Mapúa Malayan Colleges Laguna, taking up Bachelor of Science in Computer Science</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="/TorrecampoEmman_PracticumReport.pdf" download className='px-10 py-3 boerder border-white rounded-full bg-black text-white flex items-center gap-2'>practicum report <Image src={assets.download_icon_white} alt='' className='w-4'/></a>
        <a href="/TorrecampoEmman_CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header
