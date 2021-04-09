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
    .el-collapse {
      border-bottom: none;
      border-top: none;
    }
    .form-card {
      background-color: #faa12b;
      .el-card__body {
        padding: 8px;
      }
      .el-collapse-item__header {
        justify-content: center;
        font-size: 24px;
        background-color: #faa12b;
        border-bottom: none;
        position: relative;
        i {
          margin: 0;
        }
        @media(max-width: 555px) {
          font-size: 20px;
        }
        @media(max-width: 355px) {
          font-size: 18px;
        }
        &:after {
          content: "";
          position: absolute;
          top: -10px;
          bottom: 0;
          height: 70px;
        }
        &.active {
          &:after {
            background: -webkit-gradient(linear,left top,right top,color-stop(10%,hsla(0,0%,100%,.1)),color-stop(20%,hsla(0,0%,100%,.2)),to(hsla(0,0%,100%,.6)));
            background: linear-gradient(
                90deg
              ,hsla(0,0%,100%,.1) 10%,hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.6));
            width: 20px;
            -webkit-transform: skewX(
                -45deg
            );
            transform: skewX(-45deg) translateX(500px);
            left: -20%;
            -webkit-transition: all .6s ease;
            transition: all 1s ease;
            -webkit-animation-name: blick;
            animation-name: blick;
            -webkit-animation-duration: 6s;
            animation-duration: 6s;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
          }
        }
      }
    }
  }

</style>
