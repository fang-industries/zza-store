<template>
  <div
    class="flex justify-center text-center bg-gray-200 bg-opacity-50 dark:bg-opacity-50 p-4 backdrop-blur-lg dark:bg-gray-800 dark:text-gray-200 lg:p-2 border-b dark:border-gray-700 border-gray-300"
  >
    <div class="flex space-x-8">
      <div>
        <p
          class="cursor-default underline decoration-purple-600 decoration-2 dark:decoration-purple-400"
          v-if="$route.path.startsWith('/regular-items') || $route.path === '/'"
          >regular items</p
        >
        <nuxt-link
          to="regular-items"
          class="decoration-gray-600 decoration-2 hover:underline dark:decoration-gray-300"
          v-else
          >regular items</nuxt-link
        >
      </div>
      <div>
        <p
          class="cursor-default underline decoration-purple-600 decoration-2 dark:decoration-purple-300"
          v-if="$route.path.startsWith('/high-end')"
          >high-end items</p
        >
        <nuxt-link
          to="high-end"
          class="decoration-gray-600 decoration-2 hover:underline dark:decoration-gray-300"
          v-else
          >high-end items</nuxt-link
        >
      </div>
      <div>
        <p
          class="cursor-default underline decoration-purple-600 decoration-2 dark:decoration-purple-300"
          v-if="$route.path.startsWith('/enchanted-books')"
          >enchanted books</p
        >
        <nuxt-link
          to="enchanted-books"
          class="decoration-gray-600 decoration-2 hover:underline dark:decoration-gray-300"
          v-else
          >enchanted books</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
