<template>
  <div class="px-4 py-4 md:px-8 lg:px-64">
    <div class="flex justify-center md:justify-between">
      <div class="flex flex-col md:text-left text-center">
        <p class="font-medium">
          Made with 💜 <span class="font-normal text-sm dark:text-gray-300 text-gray-800">(and stress)</span> by
          <nuxt-link
            to="/the-crew"
            class="text-purple-600 hover:underline dark:text-purple-300"
            >the crew</nuxt-link
          >.
        </p>
        <p class="text-sm dark:text-gray-400 text-gray-700">
          Copyright © Pix3l_ 2022 -
          <nuxt-link
            to="/licenses"
            class="text-purple-600 hover:underline dark:text-purple-400"
            >License Notice</nuxt-link
          >
        </p>
      </div>
      <div class="hidden flex-col text-right md:flex">
        <p class="font-medium">This website is open-source!</p>
        <p class="text-sm dark:text-gray-400 text-gray-700">
          Come take a look at the code
          <a
            href="https://github.com/fang-industries/zza-store"
            class="text-purple-600 hover:underline dark:text-purple-400"
            >here</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
