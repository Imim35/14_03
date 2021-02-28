<template>
  <el-container id="main-container">
    <!-- Шапка -->
    <el-header style="background-color: #5d93ce">
      <info />
    </el-header>

    <!-- Контент -->
    <el-main>
      <Nuxt />
    </el-main>

    <!-- Футер -->
    <el-footer style="background-color: #5d93ce">
      <info />
    </el-footer>
  </el-container>
</template>

<script>
export default {}
</script>
<style lang="scss">
  #main-container {
    height: 100%;
  }
</style>
