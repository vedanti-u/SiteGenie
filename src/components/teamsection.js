import React from "react";

const Teamsection = () => {
  return (
    <>
      <section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2 class="font-manrope text-5xl text-center font-bold text-gray-900 ">
              Our team{" "}
            </h2>
          </div>
          <div class="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            <div class="block group md:col-span-2 lg:col-span-1 ">
              <div class="relative mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696238374.png"
                  alt="Antonio image"
                  class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Antonio Roberto{" "}
              </h4>
              <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Founder
              </span>
            </div>
            <div class="block group md:col-span-2 lg:col-span-1 ">
              <div class="relative mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696238396.png"
                  alt="Patricia image"
                  class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Patricia Angely{" "}
              </h4>
              <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Co-Founder
              </span>
            </div>
            <div class="group group md:col-span-2 lg:col-span-1">
              <div class="relative mb-6">
                <img
                  src="	https://pagedone.io/asset/uploads/1696238411.png"
                  alt="Jerom image"
                  class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Jerom Bell{" "}
              </h4>
              <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Chairman
              </span>
            </div>
            <div class="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
              <div class="relative mb-6">
                <img
                  src="	https://pagedone.io/asset/uploads/1696238425.png"
                  alt="Yasmine image"
                  class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Yasmine Tano{" "}
              </h4>
              <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                CEO
              </span>
            </div>
            <div class="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1 ">
              <div class="relative mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696238446.png"
                  alt="Martin image"
                  class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Martin Darbys
              </h4>
              <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Product Manager
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teamsection;
