import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError, AxiosResponse } from 'axios';
import { data } from "autoprefixer";
interface IParams {
    link: string[]
}

export async function GET (request: NextRequest, {params}: {params: IParams}){
    const {link} = params;
    console.log(link);

    try{
        
        const login = process.env.DATAFORSEO_LOGIN;
        const password = process.env.DATAFORSEO_PASSWORD;

        const credentials = Buffer.from(`${login}:${password}`).toString('base64');

        console.log("login", login)
      console.log("password", password)
      console.log("credentials", credentials)
       
        const postData = [
            {
                target: link[0],
                max_crawl_pages: 10
            }
        ]   
    
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
        }
    
        const url = 'https://api.dataforseo.com/v3/on_page/task_post';
    
        const response = await axios.post(
            url,
            postData,
            {headers}
        )

        const taskId = response.data.tasks[0].id

        await new Promise((resolve) => setTimeout(resolve, 7000));

        const taskResponse = await axios.get(`https://api.dataforseo.com/v3/on_page/summary/${taskId}`,{headers})



        return NextResponse.json({
            auth: taskResponse.data
        })
    }catch(error: any){

        if (error.response) {
            console.error('HTTP Status:', error.response.status);
            console.error('Response Data:', error.response.data);
          }

        return NextResponse.json({
           error: error.message
        })
    }

}