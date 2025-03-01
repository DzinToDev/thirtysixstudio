import React from 'react'

const Page7 = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center pl-20 py-12 border-b-[0.1px] text-black relative '>
        <div className='h-full w-[60vw] flex justify-between py-10 pl-10'>
            <h1 className='text-lg'>04 - TALK TO US</h1>
        <div className="left-text sm:w-[41%] flex flex-col items-start gap-8 ">
            <h1 className='text-base'>Talent</h1>
        <h1 className="text-[2.3vw] leading-none ">Thirtysixstudio is seeking talented collaborators.</h1>
        <p className="text-sm mt-32">If you are a multi-talented individual with exceptional communication skills, eager to elevate your digital craft together with us, we want to hear from you.</p>
        <p className="text-sm">We specifically welcome progressive people who value high-quality work and workplace well-being equally. At Thirtysixstudio, we believe that one can only exist in the presence of the other.</p>
        <button className="relative px-4 py-1 border-[0.1px] rounded-full overflow-hidden transition-all duration-500 ease-in-out group">
            {/* Text with Background Gradient on Hover */}
            <span className="relative z-10 text-black text-xs font-['PPN-Med'] transition-all duration-500 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#fd2c2a] to-[#f5940c] uppercase">
              drop us a link
            </span>

            {/* Expanding Circle Animation */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-64 group-hover:h-64"></div>
          </button>

      </div>
        </div>

    </div>
  )
}

export default Page7