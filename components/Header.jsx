import React from "react";
import "tailwindcss/tailwind.css";
const Header = () => {
  return (
    <div>
      <div class="bg-white">
        <header class="bg-[#FCF8F1] bg-opacity-30">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
              <div class="flex-shrink-0">
                <img
                  class="w-auto h-8 transform scale-x-[-1]"
                  src="https://previews.123rf.com/images/patrimonio/patrimonio0808/patrimonio080800057/3492716-hunter-shooting.jpg"
                  alt=""
                />
              </div>

              <button class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg
                  class="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  ></path>
                </svg>

                <svg
                  class="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div class="hidden lg:flex lg:items-end lg:justify-end lg:space-x-10">
                <a
                  href="registerTour"
                  title=""
                  class="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Тэмцээн{" "}
                </a>
                <a
                  href="/"
                  title=""
                  class="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Эхлэл{" "}
                </a>

                <a
                  href="/schedule"
                  title=""
                  class="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Хуваарь{" "}
                </a>
              </div>

              <a
                href="/Sign"
                title=""
                class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-indigo-900 hover:text-white focus:text-black focus:bg-indigo-500 font-semibold text-white bg-indigo-500 rounded-full"
                role="button"
              >
                {" "}
                Нэвтрэх{" "}
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
