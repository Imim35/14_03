<template>
  <div class="info-project">
    <el-row style="height: 100%">
      <el-col :span="2" class="info-project__items">
        <div>
          <span>Логотип</span>
        </div>
      </el-col>
      <el-col :span="11" class="info-project__items">
        <div class="info-project__item">
          <span>ООО «Надёжный Партнёр»</span>
          <span>Быстро. Выгодно. Надёжно.</span>
        </div>
      </el-col>
      <el-col :span="10" class="info-project__items">
        <div class="info-project__item">
          <span>Номер для обратной связи:</span>
          <span>+7(965) 03–22-333</span>
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
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      color: #ececec;
      @media(max-width: 500px) {
        font-size: 10px;
      }
      &:first-child {
        align-items: flex-start;
      }
      &:last-child {
        align-items: flex-end;
      }
    }
    &__item {
      span {
        &:first-child {
          display: block;
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
