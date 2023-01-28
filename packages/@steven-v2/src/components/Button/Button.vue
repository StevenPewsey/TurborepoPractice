<script setup lang="ts">

defineProps<{
  kind: 'primary'
}>()
</script>


<template>
<button>I AM A BUTTON {{  kind }}</button>
</template>