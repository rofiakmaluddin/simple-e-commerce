<script setup lang="ts">
  import { watchDebounced } from '@vueuse/core';
  import { storeToRefs } from 'pinia';

  const { search, cart } = storeToRefs(useProductStore());

  const url = computed(() =>
    search.value ? `/products/search?q=${search.value}` : '/products',
  );

  const { data, status, refresh } = useCustomFetch<IGetAllProductsResp>(url);

  watchDebounced(
    search,
    () => {
      refresh();
    },
    { debounce: 300 },
  );
</script>

<template>
  <ProductSection
    :items="data?.products || []"
    :is-loading="status === 'pending'"
  />
</template>
