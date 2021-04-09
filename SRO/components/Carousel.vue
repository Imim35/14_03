<template>
  <div class="accreditation">
    <span class="title" style="text-transform: uppercase">Свидетельства об акредитации в СРО</span>
    <el-carousel :interval="3000" type="card">
      <el-carousel-item v-for="image in images" :key="image.id" >
        <div class="item">
          <span class="number">{{image.id}}</span>
          <img :src="image.src" @click="openImage(image.src)"  />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div  class="accreditation__modal" v-if="showModal">
      <img :src="modalSrc">
    </div>
  </div>
</template>

<script>
const image_1 = require('../assets/jpg/1.jpg')
const image_2 = require('../assets/jpg/2.jpg')
const image_3 = require('../assets/jpg/3.jpg')
const image_4 = require('../assets/jpg/4.jpg')
const image_5 = require('../assets/jpg/5.jpg')
const image_6 = require('../assets/jpg/6.jpg')
const image_7 = require('../assets/jpg/7.jpg')
const image_8 = require('../assets/jpg/8.jpg')
const image_9 = require('../assets/jpg/9.jpg')
const image_10 = require('../assets/jpg/10.jpg')
const image_11 = require('../assets/jpg/11.jpg')
const image_12 = require('../assets/jpg/12.jpg')
const image_13 = require('../assets/jpg/13.jpg')
const image_14 = require('../assets/jpg/14.jpg')
const image_15 = require('../assets/jpg/15.jpg')
const image_16 = require('../assets/jpg/16.jpg')
const image_17 = require('../assets/jpg/17.jpg')
export default {
  name: "carousel",
  data () {
    return {
      scale: false,
      showModal: false,
      modalSrc : null,
      images: [
        { id: 1, src: image_1 },
        { id: 2, src: image_2 },
        { id: 3, src: image_3 },
        { id: 4, src: image_4 },
        { id: 5, src: image_5 },
        { id: 6, src: image_6 },
        { id: 7, src: image_7 },
        { id: 8, src: image_8 },
        { id: 9, src: image_9 },
        { id: 10, src: image_10 },
        { id: 11, src: image_11 },
        { id: 12, src: image_12 },
        { id: 13, src: image_13 },
        { id: 14, src: image_14 },
        { id: 15, src: image_15 },
        { id: 16, src: image_16 },
        { id: 17, src: image_17 }
      ]
    }
  },
  methods: {
    openImage (value) {
      this.modalSrc = null
      this.showModal = !this.showModal
      this.modalSrc = value
      // !input.contains(event.target)
      setTimeout(() => {
        window.addEventListener('click', this.clickOutside)
      })
    },
    // Скрытие модалки если клик был совершен вне картинки
    clickOutside (event) {
      if (event) {
        this.showModal = false
        window.removeEventListener("click", this.clickOutside);
      }
    },
  },
  beforeDestroy () {
    window.removeEventListener("click", this.clickOutside);
  }
}
</script>

<style lang="scss">
  .accreditation {
    margin-bottom: 40px;
    .title {
      display: block;
      text-align: center;
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 18px;
    }
    .el-carousel__container {
      height: 500px;
      @media(max-width: 960px) {
        height: 400px;
      }
      @media(max-width: 750px) {
        height: 300px;
      }
      @media(max-width: 550px) {
        height: 200px;
      }
    }
    .el-carousel__item {
      display: flex;
      justify-content: center;
      background-color: transparent;
      img {
        width: 500px;
        height: 500px;
        @media(max-width: 960px) {
          width: 400px;
          height: 400px;
        }
        @media(max-width: 750px) {
          width: 300px;
          height: 300px;
        }
        @media(max-width: 550px) {
          width: 200px;
          height: 200px;
        }
      }
    }
    .number {
      @media(max-width: 1070px) {
        visibility: hidden;
      }
    }
    &__modal {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      z-index: 1000;
      img {
        width: 800px;
        height: 900px;
      }
      @media only screen and (max-height: 800px) {
        img {
          width: 700px;
          height: 700px;
        }
      }
      @media(max-width: 800px) {
        img {
          width: 500px;
          height: 600px;
        }
      }
      @media(max-width: 550px) {
        img {
          width: 400px;
          height: 500px;
        }
      }
    }
}
</style>
