import React from 'react'

const SectionHeader = ({
    heading
}: {heading: string}) => {
  return (
    <div className='text-center font-bold text-2xl py-4'>
      {heading}
    </div>
  )
}

export default SectionHeader
