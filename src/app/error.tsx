'use client';

import Error from 'next/error';

export default function F() {
   return (
      <html>
         <body>
            <Error statusCode={500} />
         </body>
      </html>
   );
}
