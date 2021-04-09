<template>
  <div id="federal-law" class="federal-law">
    <nuxt-link to="/" style="margin-bottom: 40px;display: inline-block">
      <el-button type="primary" plain>
        Назад
      </el-button>
    </nuxt-link>
    <div class="federal-law__content">
      <div class="text">
        <span class="title">Наша компания работает по Федеральному Закону № 372 Градостроительного кодекса Российской Федерации.</span>
        <p>Ознакомиться с полным изданием закона Вы можете скачав его по ссылке.</p>
      </div>
      <a href="https://drive.google.com/u/0/uc?id=1mRNnQqW42sU-tUUO0VR9R-CRyPHyE-Ap&export=download" download><el-button type="primary" plain>Скачать файл</el-button></a>
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
