import React from "react";

import Header from "../components/Header";

const News = () => {
  return (
    <div>
      <Header />
      <div class="m-2 p-40">
        <div class="mb-4 grid grid-flow-col grid-cols-3 items-center border-0 border-b-2 border-gray-200 text-center text-base md:text-lg font-bold uppercase">
          <div>Quarterfinals</div>
          <div>Semifinals</div>
          <div>Finals</div>
        </div>
        <div class="grid grid-flow-col grid-cols-3 items-center">
          <div class="grid grid-flow-row grid-rows-3">
            <div class="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Urban</p>
                <p class="text-right">2</p>
              </div>
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold">Flax</p>
                <p class="text-right">1</p>
              </div>
            </div>
            <div class="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Tigers</p>
                <p class="text-right">2</p>
              </div>
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold">Yoyo </p>
                <p class="text-right">1</p>
              </div>
            </div>
            <div class="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Moco</p>
                <p class="text-right">2</p>
              </div>
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Batte</p>
                <p class="text-right">1</p>
              </div>
            </div>
            <div class="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Junior</p>
                <p class="text-right">2</p>
              </div>
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold">Muren</p>
                <p class="text-right">1</p>
              </div>
            </div>
          </div>
          <div class="mx-2 grid h-1/2 grid-flow-row grid-rows-2">
            <div class="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold">Flax</p>
                <p class="text-right">2</p>
              </div>
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Tigers</p>
                <p class="text-right">1</p>
              </div>
            </div>
            <div class="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Batte</p>
                <p class="text-right">2</p>
              </div>
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Junior</p>
                <p class="text-right">0</p>
              </div>
            </div>
          </div>
          <div class="mx-2 grid h-1/4 grid-flow-row grid-rows-1">
            <div class="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Tigers</p>
                <p class="text-right">0</p>
              </div>
              <div class="grid grid-flow-col grid-cols-2">
                <p class="font-semibold"> Junior</p>
                <p class="text-right">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
