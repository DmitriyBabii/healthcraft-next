import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
   const reqBody = await req.json();
   const auth = req.headers.get('Authorization');

   console.log(reqBody);

   const res = await fetch(`${process.env.API_URL}/api/food`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
         Authorization: `${process.env.AUTH_PREFIX} ${auth}`,
      },
      body: JSON.stringify(reqBody),
   });

   console.log("res", res)

   if (res.ok) {
      return NextResponse.json({}, { status: 200 });
   } else {
      const data = await res.json();
      console.log(data);
      return NextResponse.json(data, { status: 400 });
   }
}
