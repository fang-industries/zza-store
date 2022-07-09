<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <h1 class="text-center text-4xl font-bold md:text-left">licenses</h1>
      <p>
        this project uses open-source licenses, licensed under the MIT license.
        the license text can be found
        <a
          href="https://mit-license.org/"
          class="text-purple-600 hover:underline dark:text-purple-300"
          >here</a
        >. for some libraries, this text is also embedded in the source code.
      </p>
    </div>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <div v-for="library in libraries">
        <h2 class="text-xl font-semibold">
          {{ library.name }}
          <span class="hidden md:inline-block">(v{{ library.ver }})</span>
        </h2>
        <p>{{ library.copy }}</p>
        <p>released under the {{ library.lic }} license</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const libraries = await $content("licenses").fetch();
    return { libraries };
  },
};
</script>
