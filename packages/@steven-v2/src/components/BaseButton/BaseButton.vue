<script setup lang="ts">

defineProps<{
  kind: 'secondary'
}>()
</script>


<template lang="pug">
button I AM A BUTTON {{ kind }}
</template>