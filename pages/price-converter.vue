<template>
  <div class="space-y-16">
    <div class="space-y-8">
      <div class="space-y-4">
        <h1 class="text-center text-4xl font-bold md:text-left">
          Price Converter
        </h1>
        <p>
          Need to convert a price unit/high-unit to normal Minecraft items?
          Here's your place to do it!
        </p>
      </div>
      <div class="flex space-x-4">
        <input
          v-model="amount"
          type="number"
          class="form-input w-full rounded-xl border-2 border-transparent bg-gray-300 focus:border-purple-500 focus:bg-gray-200 focus:ring-0 dark:bg-gray-800 dark:focus:bg-gray-900"
          placeholder="Amount of units you want to convert..."
        />
        <select
          v-model="unit"
          class="form-select rounded-xl border-2 border-transparent bg-gray-300 focus:border-purple-500 focus:bg-gray-200 focus:ring-0 dark:bg-gray-800 dark:focus:bg-gray-900"
        >
          <option>Regular Unit (u)</option>
          <option>High-End Unit (hu)</option>
        </select>
      </div>
      <div v-if="amount && unit === 'Regular Unit (u)'" class="space-y-4">
          <h2 class="text-xl font-semibold">
            <span class="text-purple-600 dark:text-purple-400"
              >{{ amount }} regular unit</span
            >
            is equal to...
          </h2>
          <div class="space-y-2">
            <div class="flex">
              <img
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/iron_ingot.png"
                style="image-rendering: pixelated"
                class="mr-2 aspect-square h-8 w-8"
              />
              <p class="my-auto text-lg font-medium">
                {{ amount * 16 }} Iron Ingots
              </p>
            </div>
            <div class="flex">
              <img
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/gold_ingot.png"
                style="image-rendering: pixelated"
                class="mr-2 aspect-square h-8 w-8"
              />
              <p class="my-auto text-lg font-medium">
                {{ amount * 64 }} Gold Ingots
              </p>
            </div>
            <div class="flex">
              <img
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/diamond.png"
                style="image-rendering: pixelated"
                class="mr-2 aspect-square h-8 w-8"
              />
              <p class="my-auto text-lg font-medium">
                {{ amount * 2 }} Diamonds
              </p>
            </div>
            <div class="flex">
              <img
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/emerald.png"
                style="image-rendering: pixelated"
                class="mr-2 aspect-square h-8 w-8"
              />
              <p class="my-auto text-lg font-medium">{{ amount }} Emerald(s)</p>
            </div>
          </div>
      </div>
      <div v-if="amount && unit === 'High-End Unit (hu)'" class="space-y-4">
          <h2 class="text-xl font-semibold">
            <span class="text-purple-600 dark:text-purple-400"
              >{{ amount }} high-end unit</span
            >
            is equal to...
          </h2>
          <div class="space-y-2">
            <div class="flex">
              <img
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/diamond.png"
                style="image-rendering: pixelated"
                class="mr-2 aspect-square h-8 w-8"
              />
              <p class="my-auto text-lg font-medium">
                {{ amount * 8 }} Diamonds
              </p>
            </div>
            <div class="flex">
              <img
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/emerald.png"
                style="image-rendering: pixelated"
                class="mr-2 aspect-square h-8 w-8"
              />
              <p class="my-auto text-lg font-medium">{{ amount * 2 }} Emeralds</p>
            </div>
            <div class="flex">
              <img
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/netherite_scrap.png"
                style="image-rendering: pixelated"
                class="mr-2 aspect-square h-8 w-8"
              />
              <p class="my-auto text-lg font-medium">{{ amount * 4 }} Ancient Debris</p>
            </div>
            <div class="flex">
              <img
                src="https://raw.githubusercontent.com/fang-industries/zza-store/assets/item/netherite_ingot.png"
                style="image-rendering: pixelated"
                class="mr-2 aspect-square h-8 w-8"
              />
              <p class="my-auto text-lg font-medium">{{ amount }} Netherite Ingot(s)</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: "",
      unit: "",
    };
  },
};
</script>
