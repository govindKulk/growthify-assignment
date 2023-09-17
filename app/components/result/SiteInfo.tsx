import React from 'react'
import ResultCard from '../ResultCard';
import SectionHeader from '../SectionHeader';




type SiteInfoProps = {
    siteName: string;
    cmsName: string;
    serverName: string;
    sslInfo: Record<string, any>;
}

const SiteInfo: React.FC<SiteInfoProps> = ({
    siteName,
    cmsName,
    serverName,
    sslInfo
}) => {
  return (
    <div className='bg-amber-100 py-4 min-h-screen flex items-center flex-col justify-center '>

     <div className='text-center font-bold text-3xl justify-start'>
        Showing Results For {siteName}
     </div>
     <SectionHeader heading='Site Details'/>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto content-center gap-4'>
  <div className='sm:max-w-[400px] row-span-1'>
    <ResultCard title='CMS' value={cmsName} />
  </div>
  <div className='sm:max-w-[400px] row-span-1'>
    <ResultCard title='Server' value={serverName} />
  </div>
  <div className='sm:max-w-[400px] row-span-1'>
    <ResultCard
      title='SSL Certificate'
      value={sslInfo.certificate_issuer}
      isCheck
      checkValue={true}
    />
  </div>
  <div className='sm:max-w-[400px] row-span-1'>
    <ResultCard title='Total Pages' value={'15'} align='center' />
  </div>
</div>


    </div>
  )
}

export default SiteInfo
