import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const [user, setUser] = useState<any>(null);
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const router = useRouter();
  const SignIn = (email: any, password: any) => {
    if (LoginEmail && LoginPassword && LoginPassword.length > 5) {
      axios
        .post(
          "http://localhost:3000/api/login",
          {
            email: email,
            password: password,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          Cookies.set("user", JSON.stringify(response.data));
          console.log(JSON.stringify(response.data));
          router.push("/chat");
        });
    }
  };
  useEffect(() => {
    let userCookie: any = Cookies.get("user");
    if (userCookie) {
      setUser(JSON.parse(userCookie));
      router.push("/chat");
    }
  });
  return (
    <div>
      {user ? (
        <h1>
          I am logged in from:<br></br> {user.email}
        </h1>
      ) : (
        <div className="min-h-screen dark:bg-gray-900 p-3 rounded-md">
          <section className="flex justify-center content-center mt-20">
            <div className="flex flex-col items-center justify-center w-96 ">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Login
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
                          setLoginEmail(e.target.value);
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
                          setLoginPassword(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={(e) => {
                        e.preventDefault();
                        SignIn(LoginEmail, LoginPassword);
                      }}
                    >
                      Log me In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
