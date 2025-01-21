import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
   try {
      const reqBody = await req.json();

      const res = await fetch(`${process.env.API_URL}/api/auth/signin`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(reqBody),
      });

      if (!res.ok) {
         return NextResponse.json(
            { error: 'Такий користувач вже існує' },
            { status: 400 }
         );
      }

      return NextResponse.json({}, { status: 200 });
   } catch (error) {
      return NextResponse.json(
         { error },
         { status: 500 }
      );
   }
}
