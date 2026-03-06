import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({

  secret: "mysupersecret",

  providers: [

    // Google Login
    GoogleProvider({
      clientId: "882508647296-gno0q4p2h2fvnl114rt2o83s9mpfqhkp.apps.googleusercontent.com",
      clientSecret: "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",
    }),

    // Email + Password Login
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {

        // Admin login
        if (
          credentials.email === "dip@gmail.com" &&
          credentials.password === "dip@gmail.com"
        ) {
          return {
            id: "admin",
            name: "Admin",
            email: "dip@gmail.com",
            image: "https://i.pravatar.cc/150"
          }
        }

        return null
      }
    })
  ],

  pages: {
    signIn: "/login"
  },

  session: {
    strategy: "jwt"
  },

  callbacks: {

    // Runs when user signs in
    async signIn({ user, account }) {

      if (account.provider === "google") {

        console.log("Google User Logged In:")
        console.log(user)

        /*
        Example user object:

        {
          name: "DIPTA ACHARJEE",
          email: "diptoraj1635@gmail.com",
          image: "https://lh3.googleusercontent.com/..."
        }
        */

      }

      return true
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
      }
      return session
    }

  },

  debug: true

})

export { handler as GET, handler as POST }