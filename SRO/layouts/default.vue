<template>
  <div>
    <el-container id="main-container">
      <!-- Шапка -->
      <el-header style="background-color: #5d93ce">
        <Info />
      </el-header>

      <!-- Контент -->
      <el-main style="padding: 40px 20px">
        <Nuxt />
      </el-main>
    </el-container>
    <!-- Футер -->
    <el-footer style="background-color: #5d93ce;width: 100%">
      <Info />
    </el-footer>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
  #main-container {
    height: 100%;
  }
</style>
