<template>
  <div class="px-4 py-4 md:px-8 lg:px-64">
    <div class="flex justify-center md:justify-between">
      <div class="flex flex-col md:text-left text-center">
        <p class="font-medium">
          made with 💜 by
          <nuxt-link
            to="the-crew"
            class="text-purple-600 hover:underline dark:text-purple-300"
            >the crew</nuxt-link
          >
        </p>
        <p class="text-sm">
          copyright © Pix3l_ 2022 -
          <nuxt-link
            to="licenses"
            class="text-purple-600 hover:underline dark:text-purple-300"
            >license notice</nuxt-link
          >
        </p>
      </div>
      <div class="hidden flex-col text-right md:flex">
        <p class="font-medium">this website is open-source!</p>
        <p class="text-sm">
          come take a look at the code
          <a
            href="https://github.com/fang-industries/zza-store"
            class="text-purple-600 hover:underline dark:text-purple-300"
            >here</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
