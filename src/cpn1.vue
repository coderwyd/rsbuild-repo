<template>
  <div style="color: red">
    cpn1
    <Cpn2 />
  </div>
</template>

<script setup>
import Cpn2 from './cpn2.vue'
</script>

<style scoped lang="less">
::v-deep .cpn2 {
  color: sandybrown;
}
</style>
