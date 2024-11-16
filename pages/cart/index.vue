<script setup lang="ts">
  import { storeToRefs } from 'pinia';

  const { cart } = storeToRefs(useProductStore());
</script>

<template>
  <ProductSection
    isCart
    :items="Object.keys(cart).map((item) => cart[Number(item)]) || []"
  />
</template>
