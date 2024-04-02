import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = '190200239916-8jiv12ararcke69coc24op55vb2lg9co.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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'

const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({account, profile}) {
            if (!profile?.email) {
                throw new Error('No profile')
            }

            return true
        }
        // }, 
        // session,
        // async jwt({ token, user, account, profile}) {
        //     if (profile) {
        //         const user = await
        //     }
        //     return token
        // }
    }
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST}