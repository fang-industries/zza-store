<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <h1 class="text-center text-4xl font-bold md:text-left">
        enchanted books
      </h1>
      <p>
        missing the one last mending book for your boots? or perhaps that
        efficiency you need for your hoe? we've got you covered!
      </p>
    </div>
    <div class="space-y-4">
      <div v-for="book in books">
        <div
          class="flex rounded-xl border-2 border-gray-500 px-2 py-4 md:block md:p-2"
        >
          <img
            class="mr-4 aspect-square h-14 w-14 rounded-xl md:hidden"
            :src="
              'https://raw.githubusercontent.com/fang-industries/zza-store/assets/enchanted-books/' +
              book.img
            "
          />
          <div class="my-auto grid gap-4 md:grid-cols-3 md:gap-6">
            <div class="my-auto flex">
              <img
                class="mr-4 hidden aspect-square h-14 w-14 rounded-xl md:block my-auto"
                style="image-rendering: pixelated"
                :src="
                  'https://raw.githubusercontent.com/fang-industries/zza-store/assets/enchanted-books/' +
                  book.img
                "
              />
              <div class="my-auto flex flex-col">
                <p class="font-mono text-sm">enchantment</p>
                <p>
                  {{ book.name }}
                </p>
              </div>
            </div>
            <div class="my-auto">
              <p class="font-mono text-sm">price</p>
              <p>
                {{ book.price }}
              </p>
            </div>
            <div class="my-auto">
              <p class="font-mono text-sm">current stock</p>
              <p>
                {{ book.stock }}
              </p>
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
    const books = await $content("ench-books").fetch();
    return { books };
  },
};
</script>
