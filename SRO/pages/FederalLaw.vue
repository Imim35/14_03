<template>
  <div id="federal-law" class="federal-law">
    <nuxt-link to="/" style="margin-bottom: 40px;display: inline-block">
      <el-button type="primary" plain>
        Назад
      </el-button>
    </nuxt-link>
    <div class="federal-law__content">
      <div class="text">
        <span class="title">ФЕДЕРАЛЬНЫЙ ЗАКОН</span>
        <p>О внесении изменений в Градостроительный кодекс</p>
        <p>Российской Федерации и отдельные законодательные акты Российской Федерации в части совершенствования</p>
        <p>регулирования подготовки, согласования и утверждения документации по планировке территории</p>
      </div>
      <a href="https://minstroyrf.gov.ru/upload/iblock/eec/proekt-fz-o-dpt.doc" download><el-button type="primary" plain>Скачать файл</el-button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FederalLaw",

  data (){
    return {
    }
  }
}
</script>

<style lang="scss">
  .federal-law {
    height: 100vh;
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        line-height: 22px;
        margin-bottom: 40px;
      }
    }
  }
</style>
