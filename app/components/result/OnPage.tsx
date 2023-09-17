'use client'
import React, { useEffect } from 'react'
import { titleMapping } from '@/app/utils/titleMapping';
import ResultCard from '../ResultCard';
import SectionHeader from '../SectionHeader';
interface OnPageProps {
    pageMetrics: Record<string, any>;
}

const OnPage: React.FC<OnPageProps> = ({
    pageMetrics
}) => {

  
   delete pageMetrics.checks;   
    
  return (

    <div className='py-4 my-2 bg-amber-100 '>
        <SectionHeader heading='OnPage Summary'/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        
      {
        Object.keys(pageMetrics).map((key_name) => {
            let translation = titleMapping[key_name] || {tilte: key_name, isCheck: false    };
            let title = translation.title;
            let value = pageMetrics[key_name]
            let isCheck = translation.isCheck;
                // if(!title || !value){
                //     return (
                //         <div key={key_name}></div>
                //     )
                // }
            return (
                <ResultCard
                align='center' 
                title={title ? title : key_name} value={!isCheck ? value : null} isCheck={isCheck} checkValue={value} key={key_name}/>
            )
        })
      }
    </div>
    </div>
  )
}

export default OnPage
