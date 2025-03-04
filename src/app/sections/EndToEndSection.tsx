import React from 'react'

function EndToEndSection() {
  return (
    <div id="aboutUs">
      <div className='bg-[#F5EDDC] p-10 md:p-10 '>
        <div className='flex flex-col space-y-4 md:space-y-10 mt-10 md:mt-20'>  
          <div className='text-2xl font-bold md:text-6xl text-[#180D51] text-start md:text-center  md:leading-[80px]'>
            End-to-End Marketing Solutions:<br className='md:block hidden'  /> 
            {" "}From Brand Awareness to Revenue {" "}<br className='md:block hidden' /> 
            Growth.
          </div>
          <p className='text-[#180D51] text-md text-start md:text-center md:text-2xl leading-relaxed md:leading-loose'>
            We deliver AI-powered, tailored brand and marketing solutions that solve your toughest<br /> 
            marketing challenges without the overhead of<br className="block sm:hidden" /> an in-house team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EndToEndSection
