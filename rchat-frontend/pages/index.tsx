import Image from "next/image";
import { Inter } from "next/font/google";
import SignUp from "@/components/Login/Signup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
      <div className="flex  h-10 w-full"></div>
      <div className="flex justify-center content-center mt-20 ">
        <SignUp />
      </div>
    </div>
  );
}
