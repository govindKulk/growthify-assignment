import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError, AxiosResponse } from 'axios';
import { data } from "autoprefixer";
interface IParams {
    taskId: string[]
}

export async function GET (request: NextRequest, {params}: {params: IParams}){
    const {taskId} = params;


    try{
        
        const login = process.env.DATAFORSEO_LOGIN;
        const password = process.env.DATAFORSEO_PASSWORD;

        const credentials = Buffer.from(`${login}:${password}`).toString('base64');

    
       
      
    
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
        }

        const taskResponse = await axios.get(`https://api.dataforseo.com/v3/on_page/summary/${taskId[0]}`,{headers})

    

        return NextResponse.json({
           taskResponse: taskResponse.data
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