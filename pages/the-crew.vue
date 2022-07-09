<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <h1 class="text-center text-4xl font-bold md:text-left">The crew</h1>
      <p>
        This website was made with the free time of our contributors. We'd like
        to thank them with this page!
      </p>
    </div>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <div v-for="member in crew">
        <h2 class="text-xl font-semibold">
          {{ member.name }}
          <span
            class="hidden text-base font-normal text-gray-600 dark:text-gray-400 md:inline-block"
            >({{ member.alias }})</span
          >
        </h2>
        <p>{{ member.role }}</p>
        <div class="flex flex-col">
          <a
            :href="'mailto:' + member.email" v-if="member.email"
            class="text-purple-600 hover:underline dark:text-purple-300"
            >📧 {{ member.email }}</a
          >
          <a
            :href="'https://' + member.link" v-if="member.link"
            class="text-purple-600 hover:underline dark:text-purple-300"
            ><span class="no-underline">🔗</span> {{ member.link }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const crew = await $content("contributors").fetch();
    return { crew };
  },
};
</script>
