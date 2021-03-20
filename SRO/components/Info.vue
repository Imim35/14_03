<template>
  <div class="info-project">
    <el-row style="height: 100%">
      <el-col :span="12" class="info-project__items">
        <div class="info-project__logo">
          <img src="../assets/logo.png">
        </div>
        <div class="info-project__item">
          <span>ООО «Надёжный Партнёр»</span>
          <span>Быстро. Выгодно. Надёжно.</span>
        </div>
      </el-col>
      <el-col :span="12" class="info-project__items">
        <div class="info-project__item">
          <span style="margin-right: 5px">Номер для обратной связи:</span>
          <span style="margin-right: 5px">Email:</span>
        </div>
        <div class="info-project__item">
          <span>+7(965) 03–22-333</span>
          <span>director@sro.guru</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style lang="scss">
  .info-project {
    height: 100%;
    &__items {
      height: 100%;
      display: flex;
      color: #ececec;
      align-items: center;
      @media(max-width: 655px) {
        font-size: 10px;
      }
      &:last-child {
        justify-content: flex-end;
      }
    }
    &__item {
      span {
        &:first-child {
          display: block;
          margin-bottom: 5px;
        }
      }
      @media(max-width: 555px) {
        &:first-child {
          display: none;
        }
      }
    }
    &__logo {
      max-height: 60px;
      margin-right: 5px;
      img {
        max-height: 60px;
      }
    }
  }
</style>
