import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='bg-[#F3F1EC] min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Left coil decoration */}
      <div className='absolute left-0 top-1/2 transform -translate-y-1/2 items-center hidden md:block'>
        <Image
          src="/landingPage/Hero/hero_middle.svg"
          alt="decorative coil"
          width={300}
          height={300}
          className='object-contain'
        />
      </div>

      {/* Right coil decoration */}
      <div className='absolute right-0 top-1/2 transform -translate-y-1/2 items-center hidden md:block'>
        <Image
          src="/landingPage/Hero/hero_middle.svg"
          alt="decorative coil"
          width={300}
          height={300}
          className='object-contain scale-x-[-1]'
        />
      </div>

      {/* Main content - using the hero_center.svg */}
      <div className='w-full max-w-3xl mx-auto px-4 relative'>
        <div className='bg-[#CFD7D4] rounded-xl p-10 shadow-md'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='md:w-1/2 space-y-4'>
              <h1 className='text-3xl font-medium text-[#285D60]'>Ready to Streamline Your Compliance?</h1>
              <p className='text-gray-500 leading-relaxed'>
                Schedule a free consultation to see how Mosey transforms business compliance.
              </p>
              <button className='bg-[#C74E5C] text-white font-medium p-2 rounded-lg'>
                Schedule a free consultation
              </button>
            </div>
            <Image
              src="/landingPage/Hero/hero_center.svg"
              alt="center decoration"
              width={300}
              height={200}
              className='object-contain hidden md:block'
            />
          </div>
        </div>
      </div>

      {/* Connection lines at the bottom */}
      <div className='absolute bottom-0 left-0 w-full'>
        <div className='flex justify-between'>
          <div>
            <Image
              src="/landingPage/Hero/hero_bottom.svg"
              alt="decorative coil"
              width={500}
              height={500}
              className='object-contain'
            />
          </div>
          <div>
            <Image
              src="/landingPage/Hero/hero_bottom.svg"
              alt="decorative coil"
              width={500}
              height={500}
              className='object-contain scale-x-[-1]'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
