<script setup lang="ts">
  defineProps<{
    items: IProduct[];
    isLoading?: boolean;
    isCart?: boolean;
  }>();
</script>

<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <div class="text-sm font-semibold mb-2">Product List</div>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 items-center"
    >
      <div
        v-for="idx in 10"
        :key="idx"
        :class="['flex flex-col gap-2', !isLoading && 'hidden']"
      >
        <div class="w-full h-[196px] bg-neutral-300 animate-pulse" />
        <div class="w-[70px] h-[10px] bg-neutral-300 animate-pulse" />
        <div class="w-full h-[10px] bg-neutral-300 animate-pulse" />
        <div class="w-[100px] h-[10px] bg-neutral-300 animate-pulse" />
      </div>

      <ProductCard
        :is-cart="isCart"
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>
