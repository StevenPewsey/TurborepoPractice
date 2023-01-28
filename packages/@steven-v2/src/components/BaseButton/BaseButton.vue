<script setup lang="ts">

defineProps<{
  kind: 'secondary'
}>()
</script>


<template>
<button>I AM A BUTTON {{  kind }}</button>
</template>