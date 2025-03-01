import React from 'react'

const Page5 = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center border-b-[0.1px]'>
          <div className='h-full w-[63%] flex justify-end items-center py-10 pl-10 '>
        <div className="left-text w-[37%] flex flex-col items-start gap-8 ">
        <h1 className="text-[2.3vw] leading-none ">Our studio represents today's modern world: progressive, inclusive, and socially engaged.</h1>
        <p className="text-sm mt-26">Thirtysixstudio was founded by Gita Jagessar, a queer person of color and seasoned production director from Amsterdam. With over 13 years of experience in digital advertising, Gita has worked with renowned global brands such as Netflix, Converse, Travis Scott, Ben & Jerry’s, Adidas, Cash App, and many more.</p>
        <button className="relative px-4 py-1 border-[0.1px] text-xs rounded-full overflow-hidden transition-all duration-500 ease-in-out group">
            {/* Text with Background Gradient on Hover */}
            <span className="relative z-10 text-black transition-all duration-500 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#fd2c2a] to-[#f5940c] uppercase">
             Learn more
            </span>

            {/* Expanding Circle Animation */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:w-64 group-hover:h-64"></div>
          </button>
      </div>
        </div>
    </div>
  )
}

export default Page5