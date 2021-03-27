<template>
  <div>
    <el-container id="main-container">
      <!-- Шапка -->
      <el-header class="header" style="height: 160px">
        <Info />
      </el-header>

      <!-- Контент -->
      <el-main style="padding: 40px 20px">
        <Nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
  #main-container {
    height: 100%;
  }
  .header {
    background-image: url('../assets/bgHeader.jpg');
    background-size: cover ;
  }
</style>
