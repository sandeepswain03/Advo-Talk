import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div className='bg-[#F3F1EC] relative overflow-hidden min-h-screen'>
      <Image
        src="/landingPage/Feature/hero_middle_left.svg"
        alt="decorative coil"
        width={100}
        height={100}
        className='absolute top-0 left-0 object-contain hidden md:block scale-y-[-1]'
      />
      <Image
        src="/landingPage/Feature/hero_middle_right.svg"
        alt="decorative coil"
        width={100}
        height={100}
        className='absolute top-0 right-0 object-contain hidden md:block scale-y-[-1]'
      />
    </div>
  )
}

export default page