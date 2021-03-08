<template>
  <div id="content" class="content">
    <!-- Отправляемая форма -->
    <el-card style="max-width: 400px;margin:auto auto 40px;">
      <Form />
    </el-card>

    <!-- Примеры -->
    <ExampleCalculations />


    <!-- Карусель -->
    <Carousel />

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
    return {}
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
  }

</style>
