import NextAuth from "next-auth";
const config = {
  providers: [],
};

export const { signOut, signin, auth, handLers } = NextAuth(config);
