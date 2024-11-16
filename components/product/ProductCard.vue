<script setup lang="ts">
  const { item } = defineProps<{
    item: IProduct;
    isCart?: boolean;
  }>();

  const { addToCart, removeFromCart } = useProductStore();

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item);
  };
</script>

<template>
  <div
    :key="item.id"
    class="w-full shadow-md rounded-lg cursor-pointer hover:shadow-2xl duration-150 p-2 border-2 h-full flex flex-col justify-between gap-3"
  >
    <div class="space-y-2">
      <NuxtImg
        v-if="item?.thumbnail"
        :src="item.thumbnail"
        alt="Product"
        format="webp"
        quality="70"
        class="mb-2 mx-auto"
        width="137"
        height="196"
        loading="lazy"
      />
      <div
        class="bottom-1 capitalize text-xs truncate mb-2 px-2 py-0.5 rounded-full bg-red-600 text-white w-max"
      >
        {{ item.category }}
      </div>
      <div
        class="line-clamp-2 text-ellipsis overflow-hidden font-sm font-semibold"
      >
        {{ item.title }}
      </div>
      <div
        v-if="!isCart"
        class="line-clamp-2 text-ellipsis overflow-hidden text-xs font-sm font-semibold"
      >
        {{ `Stock: ${item.stock}` }}
      </div>
      <div
        v-else
        class="line-clamp-2 text-ellipsis overflow-hidden text-xl font-sm font-semibold"
      >
        {{ `Qty: ${item.qty}` }}
      </div>
      <div class="font-semibold text-red-600 text-lg">${{ item.price }}</div>
    </div>

    <div :class="[isCart && 'flex gap-2']">
      <button
        @click="handleAddToCart"
        class="bg-red-600 text-white w-full rounded-md py-1.5 px-2"
      >
        {{ isCart ? '+' : 'Add to Cart' }}
      </button>
      <button
        v-if="isCart"
        @click="handleRemoveFromCart"
        class="bg-white text-black border-2 border-black w-full rounded-md py-1.5 px-2"
      >
        -
      </button>
    </div>
  </div>
</template>
