<template>
  <div
    class="flex min-h-screen flex-col justify-between bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 selection:bg-purple-500 selection:text-white"
  >
    <div class="flex flex-col gap-y-8 md:gap-y-16">
      <div class="sticky top-0 z-50">
        <Banner />
        <Navbar />
      </div>
      <div class="flex justify-center">
        <div class="mx-4 w-full md:mx-8 lg:mx-64">
          <Nuxt />
        </div>
      </div>
    </div>
    <div class="mt-4 md:mt-12">
      <Footer />
    </div>
  </div>
</template>
