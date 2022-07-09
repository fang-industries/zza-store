<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <h1 class="text-center text-4xl font-bold md:text-left">High-end Items</h1>
      <p>
        Need something that isn't as easy to grind? You've come to the right place! Come check out our catalog of products and prices here.
      </p>
    </div>
    <div class="space-y-4">
      <div v-for="item in items">
        <div v-if="item.note">
          <div
            class="flex rounded-t-xl border-x-2 border-t-2 border-gray-500 px-2 py-4 md:block md:p-2"
          >
            <img
              class="mr-4 aspect-square h-14 w-14 md:hidden rounded-xl"
                  style="image-rendering: pixelated"

              :src="'https://raw.githubusercontent.com/fang-industries/zza-store/assets/' + item.img"
            />
            <div class="my-auto grid gap-4 md:grid-cols-3 md:gap-6">
              <div class="my-auto flex">
                <img
                  class="mr-4 hidden aspect-square h-14 w-14 md:block rounded-xl"
                  style="image-rendering: pixelated"
                  :src="'https://raw.githubusercontent.com/fang-industries/zza-store/assets/' + item.img"
                />
                <div class="my-auto flex flex-col">
                  <p class="font-mono text-sm">item</p>
                  <p>
                    {{ item.name }}
                  </p>
                </div>
              </div>
              <div class="my-auto">
                <p class="font-mono text-sm">price per item</p>
                <p>
                  {{ item.ppi }}
                </p>
              </div>
              <div class="my-auto">
                <p class="font-mono text-sm">current stock</p>
                <p>
                  {{ item.stock }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="rounded-b-xl border-x-2 border-b-2 border-gray-500 bg-gray-200 px-3 py-1 dark:bg-gray-800"
          >
            <p class="my-auto text-sm font-mono">* {{ item.note }}</p>
          </div>
        </div>
        <div v-else>
          <div
            class="flex rounded-xl border-2 border-gray-500 px-2 py-4 md:block md:p-2"
          >
            <img
              class="mr-4 aspect-square h-14 w-14 md:hidden rounded-xl"
                  style="image-rendering: pixelated"

              :src="'https://raw.githubusercontent.com/fang-industries/zza-store/assets/' + item.img"
            />
            <div class="my-auto grid gap-4 md:grid-cols-3 md:gap-6">
              <div class="my-auto flex">
                <img
                  class="mr-4 hidden aspect-square h-14 w-14 md:block rounded-xl my-auto"
                  style="image-rendering: pixelated"
                  :src="'https://raw.githubusercontent.com/fang-industries/zza-store/assets/' + item.img"
                />
                <div class="my-auto flex flex-col">
                  <p class="font-mono text-sm">item</p>
                  <p>
                    {{ item.name }}
                  </p>
                </div>
              </div>
              <div class="my-auto">
                <p class="font-mono text-sm">price per item</p>
                <p>
                  {{ item.ppi }}
                </p>
              </div>
              <div class="my-auto">
                <p class="font-mono text-sm">current stock</p>
                <p>
                  {{ item.stock }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const items = await $content("high-end").fetch();
    return { items };
  },
};
</script>
