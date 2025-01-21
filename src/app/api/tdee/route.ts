import { NextRequest } from 'next/server';

type TdeeResponse = {
   goalTdee: number;
};

export async function POST(req: NextRequest) {
   const reqBody = await req.json();
   const res = await fetch(`${process.env.API_URL}/api/tdee`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify(reqBody),
   });
   const data: TdeeResponse = await res.json();
   return Response.json(data);
}
