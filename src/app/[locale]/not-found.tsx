'use client';

import NotFound from 'next/error';

export default function NotFoundPage() {
   return <NotFound statusCode={404} />;
}
