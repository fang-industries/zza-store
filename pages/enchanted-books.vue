<template>
  <div class="space-y-16">
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
          <div v-if="book.note">
            <div
              class="flex rounded-t-xl border-x-2 border-t-2 border-gray-500 px-2 py-4 md:block md:p-2"
            >
              <img
                class="mr-4 aspect-square h-14 w-14 rounded-xl md:hidden"
                style="image-rendering: pixelated"
                :src="
                  'https://raw.githubusercontent.com/fang-industries/zza-store/assets/enchanted-books/' +
                  book.img
                "
              />
              <div class="my-auto grid gap-4 md:grid-cols-3 md:gap-6">
                <div class="my-auto flex">
                  <img
                    class="mr-4 hidden aspect-square h-14 w-14 rounded-xl md:block"
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
            <div
              class="rounded-b-xl border-x-2 border-b-2 border-gray-500 bg-gray-200 px-3 py-1 dark:bg-gray-800"
            >
              <p class="my-auto font-mono text-sm">* {{ book.note }}</p>
            </div>
          </div>
          <div v-else>
            <div
              class="flex rounded-xl border-2 border-gray-500 px-2 py-4 md:block md:p-2"
            >
              <img
                class="mr-4 aspect-square h-14 w-14 rounded-xl md:hidden"
                style="image-rendering: pixelated"
                :src="
                  'https://raw.githubusercontent.com/fang-industries/zza-store/assets/enchanted-books/' +
                  book.img
                "
              />
              <div class="my-auto grid gap-4 md:grid-cols-3 md:gap-6">
                <div class="my-auto flex">
                  <img
                    class="my-auto mr-4 hidden aspect-square h-14 w-14 rounded-xl md:block"
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
    </div>
    <div class="space-y-8">
      <div class="space-y-4">
        <h1 class="text-center text-4xl font-bold md:text-left">
          book bundles
        </h1>
        <p>
          trying to buy multiple enchanting books at once? not to worry, there's
          probably a deal here for you!
        </p>
      </div>
      <div class="space-y-4">
        <div v-for="bundle in bundles">
          <div v-if="bundle.note">
            <div
              class="flex rounded-t-xl border-x-2 border-t-2 border-gray-500 px-2 py-4 md:block md:p-2"
            >
              <img
                class="mr-4 aspect-square h-14 w-14 rounded-xl md:hidden"
                style="image-rendering: pixelated"
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/bundle.png"

              />
              <div class="my-auto grid gap-4 md:grid-cols-2 md:gap-6">
                <div class="my-auto flex">
                  <img
                    class="mr-4 hidden aspect-square h-14 w-14 rounded-xl md:block"
                    style="image-rendering: pixelated"
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/bundle.png"

                  />
                  <div class="my-auto flex flex-col">
                    <p class="font-mono text-sm">enchantments</p>
                    <p>
                      {{ bundle.name }}
                    </p>
                  </div>
                </div>
                <div class="my-auto">
                  <p class="font-mono text-sm">price</p>
                  <p>
                    {{ bundle.price }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="rounded-b-xl border-x-2 border-b-2 border-gray-500 bg-gray-200 px-3 py-1 dark:bg-gray-800"
            >
              <p class="my-auto font-mono text-sm">* {{ bundle.note }}</p>
            </div>
          </div>
          <div v-else>
            <div
              class="flex rounded-xl border-2 border-gray-500 px-2 py-4 md:block md:p-2"
            >
              <img
                class="mr-4 aspect-square h-14 w-14 rounded-xl md:hidden"
                style="image-rendering: pixelated"
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/bundle.png"
              />
              <div class="my-auto grid gap-4 md:grid-cols-2 md:gap-6">
                <div class="my-auto flex">
                  <img
                    class="my-auto mr-4 hidden aspect-square h-14 w-14 rounded-xl md:block"
                    style="image-rendering: pixelated"
                    src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/bundle.png"
                  />
                  <div class="my-auto flex flex-col">
                    <p class="font-mono text-sm">enchantments</p>
                    <p>
                      {{ bundle.name }}
                    </p>
                  </div>
                </div>
                <div class="my-auto">
                  <p class="font-mono text-sm">price</p>
                  <p>
                    {{ bundle.price }}
                  </p>
                </div>
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
    const books = await $content("ench-books").fetch();
    const bundles = await $content("ench-packages").fetch();
    return { books, bundles };
  },
};
</script>
