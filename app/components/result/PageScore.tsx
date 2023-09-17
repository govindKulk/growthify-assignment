import React from 'react'
import SectionHeader from '../SectionHeader'

const PageScore = ({
  score
}: { score: number }) => {

  let borderClass = '';
  // switch(score){
  //   case score > 90:
  //     borderClass = 'rounded-[100%]';
  //     break;
    
  //   case score 

  // }
  return (
    <div className='flex flex-col items-center gap-4 px-2'>
      <SectionHeader heading='Page Score' />
      <div className='
      text-3xl font-bold border-[6px] border-lime-500
      rounded-[100%]
      inline-flex items-center justify-center
      shadow-lg
      bg-neutral-100
      text-lime-500
      text-center
      p-8
      max-w-[200px]
      mx-auto
      '>
        {score}
      </div>

      <p className='w-1/2 mx-auto  px-2 text-lg text-center'>
        Shows how website is optimized on a 100-point scale
        this field shows how website is optimized considering critical on-page issues and warnings detected
      </p>
    </div>
  )
}

export default PageScore
