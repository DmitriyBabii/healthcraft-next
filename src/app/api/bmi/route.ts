import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
   const reqBody = await req.json();
   const res = await fetch(`${process.env.API_URL}/api/bmi`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify(reqBody),
   });
   const data = await res.json();
   return Response.json(data);
}
