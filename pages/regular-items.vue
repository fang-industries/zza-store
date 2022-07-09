<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <h1 class="text-center text-4xl font-bold md:text-left">regular items</h1>
      <p>
        this list contains the pricing and stock for regular, common items —
        perfect if you're too lazy to get a specific item!
      </p>
    </div>
    <div class="space-y-4">
      <div v-for="item in items">
        <div v-if="item.note">
          <div
            class="flex rounded-t-xl border-x-2 border-t-2 border-gray-500 px-2 py-4 md:block md:p-2"
          >
            <img
              class="mr-4 aspect-square h-14 w-14 md:hidden"
              :src="item.img"
            />
            <div class="my-auto grid gap-4 md:grid-cols-3 md:gap-6">
              <div class="my-auto flex">
                <img
                  class="mr-4 hidden aspect-square h-14 w-14 md:block"
                  style="image-rendering: pixelated"
                  :src="item.img"
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
              class="mr-4 aspect-square h-14 w-14 md:hidden"
              :src="item.img"
            />
            <div class="my-auto grid gap-4 md:grid-cols-3 md:gap-6">
              <div class="my-auto flex">
                <img
                  class="mr-4 hidden aspect-square h-14 w-14 md:block"
                  style="image-rendering: pixelated"
                  :src="item.img"
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
    const items = await $content("regular-items").fetch();
    return { items };
  },
};
</script>
