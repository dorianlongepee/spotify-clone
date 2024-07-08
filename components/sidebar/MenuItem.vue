<script setup lang="ts">
const props = defineProps<{
  to: string
  text: string
}>()
</script>

<template>
  <NuxtLink
    :to="`/${props.to}`"
    class="transition duration-300 w-full flex gap-5 px-3 py-1 h-[50px] items-center link-subtle"
  >
    <slot
      name="icon"
    />
    <span class="font-medium">
      {{ props.text }}
    </span>
  </NuxtLink>
</template>

<style scoped>
.link-subtle{
    color: #B3B3B3;
}

.link-subtle:hover,
.link-subtle:active{
    color: var(--foreground);
}
</style>
