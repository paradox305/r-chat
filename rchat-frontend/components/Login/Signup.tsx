import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp() {
  const [email, setSignUpEmail] = useState("");
  const [password, setSignUpPassword] = useState("");
  const [confirmPassword, setSignUpConfirmPassword] = useState("");
  const router = useRouter();
  const SignUp = async (email: any, password: any, confirmPassword: any) => {
    console.log(email, password, confirmPassword);
    let data = await axios
      .post(
        "http://localhost:3000/api/hello",
        { email: email, password: password, confirmPassword: confirmPassword },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        Cookies.set(
          "user",
          JSON.stringify({
            uid: response.data.uid,
            email: response.data.email,
            emailVerified: response.data.emailVerified,
            accessToken: response.data.accessToken,
          })
        );
        router.push("/login");
        return response.data;
      })
      .catch((error) => {
        // Throw an error
      });

    return data;
  };
  useEffect(() => {
    let loggedIn = Cookies.get("user");
    if (loggedIn) {
      router.push("/login");
      console.log("Logged in user", JSON.parse(loggedIn));
    }
  }, []);
  return (
    <section className="" style={{ minWidth: "500px", minHeight: "400px" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create my account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@company.com"
                  onChange={(e) => {
                    setSignUpEmail(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  onChange={(e) => {
                    setSignUpConfirmPassword(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={(e) => {
                  e.preventDefault();
                  SignUp(email, password, confirmPassword);
                }}
              >
                Filled the form? Click Here
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link href="/login"> Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

//
//     <div className="h-max w-96 flex pl-3 content-center pt-3 bg-[#94E8B4] bg-opacity-20 rounded-lg pb-3">
{
  /* <form action="submit"> */
}
{
  /* <h2 className="pb-2">Sign Up</h2> */
}
{
  /* <h3>Email</h3> */
}
{
  /* <Input */
}
//           width="1000"
//           height="600"
//           type="email"
//           name="email"
//           id="email-signup"
//           placeholder="abc@expample.com"
//           value={onChangeSignUpEmial}
//         />
{
  /* <h3>Password</h3> */
}
{
  /* <input type="password" name="password" id="password" /> */
}
{
  /* <h3>Confirm Password</h3> */
}
{
  /* <input type="password" name="confirm_password" id="confirm_password" /> */
}
{
  /* <br /> */
}
{
  /* <input type="submit" value="SignUp" className="p-2 " /> */
}
{
  /* </form> */
}
{
  /* </div> */
}
