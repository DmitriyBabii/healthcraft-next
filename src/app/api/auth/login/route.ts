import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
   try {
      const reqBody = await req.json();
      const res = await axios.post(`${process.env.API_URL}/login`, reqBody);
      
      return NextResponse.json(res.data, {
         status: 200,
         headers: {
            Authorization: res.headers['authorization'],
         },
      });
   } catch (error) {
      console.log(error);
      return NextResponse.json(
         { error, message: 'Can`t fetch login' },
         { status: 400 }
      );
   }
}
