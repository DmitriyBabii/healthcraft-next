import {} from 'next-auth';

declare module 'next-auth' {
   interface Session {
      user: User;
   }

   interface User {
      jwt: string;
   }
}
