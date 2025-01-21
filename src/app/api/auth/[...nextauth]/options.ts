import axios from 'axios';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
   providers: [
      CredentialsProvider({
         name: 'Credentials',
         credentials: {
            email: {
               label: 'email',
               type: 'text',
               placeholder: 'Email',
            },
            password: {
               label: 'password',
               type: 'password',
               placeholder: 'Password',
            },
         },
         async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
               return null;
            }

            const response = await axios.post(
               'http://localhost:3000/api/auth/login',
               {
                  email: credentials.email,
                  password: credentials.password,
               }
            );

            if (response.status !== 200) {
               return null;
            }

            // console.log(response.headers.getAuthorization());

            const jwt = response.headers['authorization']
               .replace(process.env.AUTH_PREFIX as string, '')
               .trim();
            const data = response.data;

            if (jwt) {
               return {
                  ...data,
                  jwt,
                  email: credentials.email,
                  name: `${data.name} ${data.surname}`,
               };
            }

            return null;
         },
      }),
   ],

   session: {
      strategy: 'jwt',
   },

   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            token.jwt = user.jwt; // 🔥 Додаємо jwt до токена
         }
         return token;
      },

      async session({ session, token }) {
         if (token) {
            session.user.jwt = token.jwt as string;
         }
         return session;
      },
   },

   secret: process.env.NEXTAUTH_SECRET,
};
