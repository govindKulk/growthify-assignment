'use client'

import { useParams } from 'next/navigation'
import summary from '@/app/utils/dummySummary.json'
import { getTarget } from '../actions/getTarget'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { titleMapping } from '../utils/titleMapping'
import SiteInfo from '../components/result/SiteInfo'
import PageScore from '../components/result/PageScore'
import OnPage from '../components/result/OnPage'
import PageChecks from '../components/result/PageChecks'


const HomePage = () => {

  const {url} = useParams();
  const [results, setresults] = useState<any[]>([])
  const [domain_info, setDomainInfo] = useState<Record<any,any>>({})
  const [hasFetched, sethasFetched] = useState(false)
  const [siteInfo, setSiteInfo] = useState<Record<any, any>>({})

  const [page_metrics, setPageMetrics] = useState<Record<any, any>>({})
  const [onpage_score, setOnPageScore] = useState(0)

  
  useEffect(() => {
    
    const getLink = async () => {

      const res =  await axios.get(`/api/seo/${url[0]}`);
      console.log("api", res.data)
      setresults(res.data.auth.tasks[0].result)
      const {name, cms, server, ssl_info} = res.data.auth.tasks[0].result[0].domain_info
      setSiteInfo({name, cms, server, ssl_info})
      setPageMetrics(res.data.auth.tasks[0].result[0].page_metrics);
      setOnPageScore(res.data.auth.tasks[0].result[0].page_metrics.onpage_score)

      sethasFetched(true)
    }

    // console.log(summary.tasks[0].result)
    getLink();
    // getTaskId(url[0]);

  }, [url])

  // const results = summary.tasks[0].result;
  
 
  
  

  if(!hasFetched){
    return 
  }
  else{
    return (
    <div>
      <SiteInfo siteName={siteInfo.name} cmsName={siteInfo.cms} serverName={siteInfo.server} sslInfo={siteInfo.ssl_info}/>

      <PageScore score={Number(Math.round(onpage_score))} />

      <OnPage pageMetrics={{...page_metrics}}/>

      <PageChecks checks={{...page_metrics.checks}}/>


    </div>
  )
}

}

export default HomePage
