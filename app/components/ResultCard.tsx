import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdCancel} from 'react-icons/md'

interface ResultCardProps {
    title: string;
    value?: string | null;
    align?: 'left' | 'center';
    isCheck?: boolean;
    checkValue?: boolean;
}
const ResultCard: React.FC<ResultCardProps> = ({
    title,
    value,
    align,
    isCheck,
    checkValue
}) => {
  return (
    <div className={`flex flex-col 
    ${align === 'center' ? 'text-center' : 'text-left'}
    border border-neutral-500
    p-4 rounded-lg shadow-lg
    bg-neutral-100 m-2 gap-4
    h-full
    items-center
    justify-center
    `}>

      <div className={`font-bold text-xl text-blue-500 ${isCheck ? 'flex flex-row justify-between items-center': ''} `}>
        
        {title}
        <span className='text-lime-500'>

        {isCheck && (checkValue ? <AiFillCheckCircle size={40}/> : <MdCancel
        color='red' size={40}
        /> )}
        </span>
        </div>
      <p className='font-medium text-base'>{value}</p>

    </div>
  )
}

export default ResultCard
