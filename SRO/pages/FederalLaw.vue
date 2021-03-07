<template>
  <div id="federal-law" class="federal-law">
    <nuxt-link to="/">
      <el-button type="primary" plain>
        Назад
      </el-button>
    </nuxt-link>
    <div class="federal-law__content">
      <a href="../assets/attachments/acr1.jpg" download>Скачать файл</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FederalLaw"
}
</script>

<style lang="scss">
  #federal-law {
    height: 100vh;
    &__content {

    }
  }
</style>
