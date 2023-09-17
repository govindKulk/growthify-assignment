'use state'

import React, { useState } from 'react'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import { titleMapping } from '@/app/utils/titleMapping'
import ResultCard from '../ResultCard'
import SectionHeader from '../SectionHeader'

const PageChecks = ({
    checks
}:{
    checks: Record<any, any>
}) => {


    const [showStats, setShowStats] = useState(false)
    const handleClick = () => {
        setShowStats(true)
    }
  return (
    <div className='py-4 my-2'>
    <div className='flex flex-col items-center justify-center '>
    <SectionHeader heading='More Stats'/>
    <span className='transition duration-500 text-amber-400 font-bold cursor-pointer hover:text-blue-400' onClick={handleClick}>
    <AiFillCaretDown  size={40} />
    </span>
    </div>

    {showStats && <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Object.keys(titleMapping).map((key_name, index) => {
            let {title, isCheck} = titleMapping[key_name];
            
            if(Object.keys(checks).includes(key_name)){

                let value = checks[key_name];
                return (
                    <ResultCard title={title} isCheck={isCheck} checkValue={isCheck ? value : null}
                    value={!isCheck ? value : null}
                    key={index}
                    />
                    )
            }
            
        })}
      
    </div>}

{showStats && <div className='flex justify-center my-4'>

    <span className='transition duration-500 text-amber-400 font-bold cursor-pointer hover:text-blue-400' onClick={() => setShowStats(false)}>
    <AiFillCaretUp  size={40} />
    </span>
</div>}
    </div>
  )
}

export default PageChecks
