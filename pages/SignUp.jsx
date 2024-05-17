import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import Head from "next/head";
const SignUp = () => {
  return (
    <div>
      <Header />
      <section class="">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-75 ">
          <div class="max-w-3xl mx-auto mt-2 overflow-hidden  rounded-md shadow-md lg:mt-20 ">
            <div class="">
              <div class="lg:col-span-3">
                <div class="p-6 sm:p-10 bg-gray-200">
                  <h3 class="text-2xl font-semibold text-black">
                    Send us a message
                  </h3>

                  <form action="#" method="POST" class="mt-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Your name{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder=""
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Your email{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <input
                            type="email"
                            name=""
                            id=""
                            placeholder=""
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Phone number{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <input
                            type="tel"
                            name=""
                            id=""
                            placeholder=""
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Company name{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder=""
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-2">
                        <label
                          for=""
                          class="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Message{" "}
                        </label>
                        <div class="mt-2.5 relative">
                          <textarea
                            name=""
                            id=""
                            placeholder=""
                            class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>

                      <div class="sm:col-span-2">
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SignUp;
