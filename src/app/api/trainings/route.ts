import { TrainingCollection } from '@/app/types/response';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
   try {
      const res = await axios.get<TrainingCollection[]>(
         `${process.env.API_URL}/api/trainings/collections`
      );
      return NextResponse.json(res.data);
   } catch (error) {
      return NextResponse.json(
         { error, message: 'Failed to fetch trainings' },
         { status: 404 }
      );
   }
}
