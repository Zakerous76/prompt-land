import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { connectToDB } from "@utils/database"
import User from "@models/user"

// to handle authentication
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // ensure db connection
      await connectToDB()

      try {
        const sessionUser = await User.findOne({ email: session.user.email })
        session.user.id = sessionUser?._id.toString()
      } catch (error) {
        console.error("Error fetching user in session callback:", error)
      }
      return session
    },
    async signIn({ profile }) {
      try {
        await connectToDB()
        // check if a user already exists
        const UserExists = await User.findOne({
          email: profile.email,
        })
        // if not, create a new user
        if (UserExists) {
          return true
        } else {
          const user = await User({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          })
          await user.save()
        }
        return true
      } catch (error) {
        return false
      }
    },
  },
})

export { handler as GET, handler as POST }
