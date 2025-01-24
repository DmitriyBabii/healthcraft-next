'use client';

import NotFound from 'next/error';

export default function NotFoundPage() {
   return (
      <html lang="en">
         <body>
            <NotFound statusCode={404} />
         </body>
      </html>
   );
}
