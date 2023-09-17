'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { getTarget } from '../actions/getTarget';

const LinkInput = () => {

    const [url, setUrl] = useState('');
    const [isError, setIsError]  = useState(false)
    const [error, setError] = useState('');
    const router = useRouter()
    const handleSubmit = (e: any) => {

        e.preventDefault();
        let updateUrl = url;

        if(!url.includes('https://') && !url.includes('http://')){
            updateUrl = `https://${url}`;
            setUrl(updateUrl)
        }
        const target = getTarget(updateUrl)
        if (target) {

            router.push(`/${target}`)
        } else{
            setIsError(true)
            setError("Please Enter a valid URL")
        }

    }
    return (


        <div className='flex flex-col gap-8 items-center py-2 relative'>
            
            <input
                type="text"
                className='border border-gray-400 py-4 px-2 rounded-lg'
                value={url}
                onChange={(e) => { 
                    setIsError(false)
                    setUrl(e.target.value) }}
                placeholder='Enter URL' />
            
           
        <div className={`
        transition-opacity
        trasnform
        duration-900
        h-full
        bg-neutral-200
        text-red-600
        py-2
        px-4
        text-center
        ${isError? 'block' : 'hidden'}
        ${isError ? 'opacity-100' : 'opacity-0'}' }
        `}>
          {error}
        </div>
    


            <button onClick={handleSubmit}
                className='bg-red-400 text-white font-bold text-xl py-2 px-4 rounded-lg' >
                GET SEO
            </button>
        </div>
    )
}

export default LinkInput
