export const getTarget = (link: string) => {

    console.log(link)
    
    if(isValidUrl(link)){

        try{
            // if(!link.includes('https://')){
            //     link = 'https://'+link;
            // }
            const url = new URL(link);
            return url.hostname.replace(/www\./i, '');
        } catch(error){
           return null
        }
    }else{
        return null
    }
}

function isValidUrl(url: string) {
    // A more comprehensive regex pattern for URL validation
    const urlPattern = /^(https:\/\/|http:\/\/).*\.[^.]+$/gm;
    return urlPattern.test(url);
  }
  

/* 
    link is valid
        https://link.com
        link.com

    link is invalid

*/