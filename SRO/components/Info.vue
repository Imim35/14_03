<template>
  <div class="info-project">
    <el-row style="height: 100%">
      <el-col :span="24" class="info-project__items">
        <div class="info-project__logo">
          <img src="../assets/logo.png">
        </div>
        <div class="info-project__item">
          <span>«Надёжный Партнёр»</span>
          <span>+7(965)03–22-333</span>
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
      justify-content: flex-start;
    }
    &__item {
      span {
        color: #000;
        font-weight: 700;
        font-size: 25px;
        &:first-child {
          display: block;
          margin-bottom: 5px;
        }
      }
      @media(max-width: 555px) {
        span {
          font-size: 20px;
        }
      }
      @media(max-width: 455px) {
        span {
          font-size: 15px;
        }
      }
    }
    &__logo {
      max-height: 100px;
      margin-right: 10px;
      img {
        max-height: 100px;
      }
      @media(max-width: 555px) {
        img {
          max-height: 60px;
        }
      }
    }
  }
</style>
