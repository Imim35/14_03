<template>
  <div id="content" class="content">
    <!-- Отправляемая форма -->
    <el-card class="form-card" ref="form-card" style="max-width: 400px;margin:auto auto 40px;">
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
    return {
      addClass: false
    }
  },
  mounted () {
    setInterval(() => {
      this.addClass = !this.addClass
      if (this.addClass) {
        document.getElementsByClassName('el-collapse-item__header')[0].classList.add('active')
      }
      if (!this.addClass) {
        document.getElementsByClassName('el-collapse-item__header')[0].classList.remove('active')
      }
    },3000)
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
    .form-card {
      background-color: #ea9e59;
      .el-card__body {
        padding: 8px;
      }
      .el-collapse-item__header {
        justify-content: center;
        font-size: 24px;
        background-color: #ea9e59;
        border-bottom: none;
        position: relative;
        transition: all 0.3s ease;
        i {
          margin: 0;
        }
        @media(max-width: 555px) {
          font-size: 20px;
        }
        &.active {
          &:after {
            content: '';
            position: absolute;
            left: -30px;
            top: -13px;
            width: 1px;
            height: 70px;
            animation: move 1s ease-in;
            background-color: #ececec;
            opacity: 0.6;
          }
          @keyframes move {
            from {
              left: -30px;
              transform: rotate(25deg);
            }
            to {
              left: 445px;
              transform: rotate(25deg);
            }
          }
        }
      }
    }
  }

</style>
