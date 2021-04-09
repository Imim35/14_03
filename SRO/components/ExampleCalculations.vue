<template>
  <div class="calculation">
    <div class="title" style="text-transform: uppercase">Примеры расчета стоимости</div>
    <div class="calculation__items">
      <div class="calculation__item">
        <el-card>
          <ul>
            <li class="calculation__title">СРО по строительству:</li>
            <li>Специалисты - 0 &#8381;</li>
            <li>Подготовка документов - 0 &#8381;</li>
            <li>Членский взнос(первый месяц) - 0 &#8381;</li>
            <li>Страховка - 0 &#8381;</li>
            <li>Вступительный взнос - 0 &#8381;</li>
            <li>Сертификат ИСО 9001 - 0 &#8381;</li>
            <li>Компенсационный фонд - 100 000 &#8381;</li>
            <li class="calculation__price">Итого 100 000 &#8381;</li>
          </ul>
        </el-card>
      </div>
      <div class="calculation__item">
        <el-card>
          <ul>
            <li class="calculation__title">СРО по проектированию:</li>
            <li>Специалисты - 0 &#8381;</li>
            <li>Подготовка документов - 0 &#8381;</li>
            <li>Членский взнос(первый месяц) - 0 &#8381;</li>
            <li>Страховка - 0 &#8381;</li>
            <li>Вступительный взнос - 0 &#8381;</li>
            <li>Сертификат ИСО 9001 - 0 &#8381;</li>
            <li>Компенсационный фонд - 50 000 &#8381;</li>
            <li class="calculation__price">Итого 50 000 &#8381;</li>
          </ul>
        </el-card>
      </div>
      <div class="calculation__item">
        <el-card>
          <ul>
            <li class="calculation__title">СРО по взысканиям:</li>
            <li>Специалисты - 0 &#8381;</li>
            <li>Подготовка документов - 0 &#8381;</li>
            <li>Членский взнос(первый месяц) - 0 &#8381;</li>
            <li>Страховка - 0 &#8381;</li>
            <li>Вступительный взнос - 0 &#8381;</li>
            <li>Сертификат ИСО 9001 - 0 &#8381;</li>
            <li>Компенсационный фонд - 50 000 &#8381;</li>
            <li class="calculation__price">Итого 50 000 &#8381;</li>
          </ul>
        </el-card>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "ExampleCalculations"
}
</script>

<style lang="scss">
 .calculation {
   display: flex;
   flex-direction: column;
   margin-bottom: 40px;
   &__title {
     font-weight: bold;
   }
   &__price {
     font-weight: bold;
   }
   &__items {
     display: flex;
     @media(max-width: 1070px) {
       flex-wrap: wrap;
       align-items: center;
       justify-content: center;
     }
   }
   &__item {
     margin-right: 20px;
     flex: 0 1 33.3%;
     &:last-child {
       margin-right: 0;
     }
     @media(max-width: 1070px) {
       &:last-child {
         margin-right: 20px;
       }
     }
     ul {
       padding: 0;
       list-style: none;
       li {
         margin-bottom: 10px;
         padding-bottom: 10px;
         border-bottom: 1px solid #EBEEF5;
         &:last-child {
           border-bottom: none;
         }
         &:first-child {
           border-bottom: none;
         }
       }
     }
     .el-card {
       border: solid 1px #faa12b;
     }
     @media(max-width: 1070px) {
       flex: 0 1 40%;
       margin-bottom: 20px;
     }
     @media(max-width: 750px) {
       flex: 0 1 100%;
     }
   }
   .title {
     text-align: center;
     margin-bottom: 20px;
     font-weight: 700;
     font-size: 18px;
   }
 }
</style>
