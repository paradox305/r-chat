// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// Import the functions you need from the SDKs you need
import { createUserWithEmailAndPassword } from "firebase/auth";

import { firebase_auth } from "@/utils/firebaseInit";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const auth = firebase_auth;
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    await createUserWithEmailAndPassword(
      auth,
      req.body.email,
      req.body.password
    )
      .then((userCredential) => {
        // Signed in
        const user: any = userCredential.user;
        // ...
        return res.status(200).json({
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          accessToken: user.stsTokenManager.accessToken,
        });
      })
      .catch((error) => {
        const errorMessage = error.message.split("/")[1].split(")")[0];
        return res.status(400).json({
          error: error.message,
          errorMessage: errorMessage,
        });
      });
  } else {
    return res.status(404).json({ error: "Request Unauthorized" });
  }
}
