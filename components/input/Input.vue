<script setup lang="ts">
  import { useVModel } from '@vueuse/core';

  const props = defineProps<{
    placeholder?: string;
    modelValue: string;
    block?: boolean;
    inputClass?: string;
  }>();

  const emit = defineEmits(['update:modelValue']);

  const model = useVModel(props, 'modelValue', emit);
</script>

<template>
  <div>
    <input
      :class="[
        'text-neutral-800 py-1.5 px-4 rounded-lg',
        block && 'w-full',
        inputClass,
      ]"
      v-model="model"
      :placeholder="placeholder"
    />
  </div>
</template>
