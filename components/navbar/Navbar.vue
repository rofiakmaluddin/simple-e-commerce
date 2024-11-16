<script setup lang="ts">
  import { storeToRefs } from 'pinia';

  const { search } = storeToRefs(useProductStore());
  const route = useRoute();
  const isHomePage = computed(() => route.path === '/');
</script>

<template>
  <nav class="flex items-center bg-red-700 text-white h-[60px]">
    <div
      :class="[
        'grid grid-cols-3 items-center gap-3 sm:gap-5 container mx-auto p-3 sm:p-5 w-full',
        !isHomePage && 'justify-center',
      ]"
    >
      <div
        class="font-bold hover:scale-105 duration-150 w-max cursor-pointer text-lg sm:text-xl underline underline-offset-2"
        @click="() => navigateTo('/')"
      >
        MyCommerce
      </div>
      <Input
        v-if="!!isHomePage"
        v-model="search"
        placeholder="Search..."
        block
      />
      <div
        :class="[
          'font-bold hover:scale-105 duration-150 w-full cursor-pointer sm:text-lg text-right',
          !isHomePage && 'invisible',
        ]"
        @click="() => navigateTo('/cart')"
      >
        My Cart
      </div>
    </div>
  </nav>
</template>
