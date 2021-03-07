<template>
  <div id="content" class="content">
    <!-- Отправляемая форма -->
    <el-card style="max-width: 400px;margin:auto auto 40px;">
      <Form />
    </el-card>

    <!-- Примеры -->
    <ExampleCalculations />



    <div class="content__accreditation">
      <span class="title">Наши свидетельства об акредитации в СРО</span>
      <el-carousel :interval="8000" type="card">
        <el-carousel-item>
          <div class="item" @click="click">
            <img class="item__image" src="../assets/attachments/acr1.jpg" alt="" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="item">
            <img class="item__image" src="../assets/attachments/acr1.jpg" alt="" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="item">
            <img class="item__image" src="../assets/attachments/acr1.jpg" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>


    <!-- Карточка перехода на ФЗ -->
    <el-card>
      <nuxt-link class="federal-law-link" to="FederalLaw">
        <div>
          <span>Дополнительная информация</span>
          <i class="el-icon-tickets" />
        </div>
      </nuxt-link>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    click () {
      console.log('123')
    }
  }
}
</script>

<style lang="scss">
  .content {
    display: block;
    height: 100%;
    .federal-law-link {
      color: #303133;
      text-decoration: none;
      &:hover {
        cursor: pointer;
        color: #5d93ce;
      }
    }
    &__accreditation {
      margin-bottom: 40px;
      .title {
        display: block;
        text-align: center;
        margin-bottom: 20px;
      }
    }
    .el-carousel__container {
      height: 500px;
    }
    .el-carousel__item {
      display: flex;
      justify-content: center;
      height: 500px;
      background-color: transparent;
      img {
        width: 500px;
        height: 500px;
      }
    }

  }

</style>
