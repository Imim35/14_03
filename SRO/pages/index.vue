<template>
  <div id="content">
    <!-- Карточка основного контента -->
    <el-card style="margin-bottom: 20px">
      <el-collapse>
        <el-collapse-item title="Рассчитать стоимость вступления в СРО">
          <el-form
            :model="form"
            :rules="rules"
            ref="form"
            style="display: flex">

          <!--            :show-message="false"-->

            <transition name="fade">
              <el-form-item v-show="step === 0">
                <div class="text-muted">Субьект регистрации Вашего юридического лица:</div>
                <el-radio-group v-model="form.registrationLegalEntity" @change="nextStep">
                  <div class="radio_items">
                    <el-radio label="Москва и МО" />
                    <el-radio label="Санкт-Петербург" />
                    <el-radio label="Другое" />
                  </div>
                </el-radio-group>
              </el-form-item>
            </transition>

            <transition name="fade">
              <el-form-item v-show="step === 1">
                <div class="text-muted">Тип СРО:</div>
                <el-radio-group v-model="form.typeSRO" @change="nextStep">
                  <div class="radio_items">
                    <el-radio label="Строительство" />
                    <el-radio label="Проектирование" />
                    <el-radio label="Инженерные изыскания" />
                    <el-radio label="Затрудняюсь ответить" />
                    <div><el-button  size="mini" @click="backStep" plain>Назад</el-button></div>
                  </div>
                </el-radio-group>
              </el-form-item>
            </transition>

            <transition name="fade">
              <el-form-item v-show="step === 2">
                <div class="text-muted">Планируете ли участие в государственных тендерах?</div>
                <el-radio-group v-model="form.tender" @change="nextStep">
                  <div class="radio_items">
                    <el-radio label="Да" />
                    <el-radio label="Нет" />
                    <el-radio label="Затрудняюсь ответить" />
                    <div><el-button  size="mini" @click="backStep" plain>Назад</el-button></div>
                  </div>
                </el-radio-group>
              </el-form-item>
            </transition>

            <transition name="fade">
              <el-form-item v-show="step === 3">
                <div class="text-muted">Условия проведения работ?</div>
                <el-radio-group v-model="form.conditionsWork" @change="nextStep">
                  <div class="radio_items">
                    <el-radio label="Обычные" />
                    <el-radio label="Особо опасные" />
                    <el-radio label="Атомные" />
                    <el-radio label="Затрудняюсь ответить" />
                    <div><el-button  size="mini" @click="backStep" plain>Назад</el-button></div>
                  </div>
                </el-radio-group>
              </el-form-item>
            </transition>

            <transition name="fade">
              <el-form-item v-show="step === 4">
                <div class="text-muted">Имеются ли у вас специалисты, внесенные в HPC?</div>
                <el-radio-group v-model="form.HPC" @change="nextStep">
                  <div class="radio_items">
                    <el-radio label="Да" />
                    <el-radio label="Нет" />
                    <el-radio label="Есть свои специалисты, но не внесены в реестр" />
                    <el-radio label="Нужна помощь в этом вопросе" />
                    <div><el-button  size="mini" @click="backStep" plain>Назад</el-button></div>
                  </div>
                </el-radio-group>
              </el-form-item>
            </transition>

            <transition name="fade">
              <el-form-item v-show="step === 5">
                <div class="text-muted">Сумма одного договора:</div>
                <el-radio-group v-show="form.typeSRO === 'Строительство' || form.typeSRO === 'Затрудняюсь ответить'" v-model="form.price" @change="nextStep">
                  <div class="radio_items">
                    <el-radio label="До 60 млн.руб" />
                    <el-radio label="До 500 млн.руб" />
                    <el-radio label="До 3 млрд.руб" />
                    <el-radio label="До 10 млрд.руб" />
                    <el-radio label="Свыше 10 млрд.руб" />
                    <div><el-button  size="mini" @click="backStep" plain>Назад</el-button></div>
                  </div>
                </el-radio-group>
                <el-radio-group v-show="form.typeSRO === 'Проектирование' || form.typeSRO === 'Инженерные изыскания'" v-model="form.price" @change="nextStep">
                  <div class="radio_items">
                    <el-radio label="До 25 млн.руб" />
                    <el-radio label="До 50 млн.руб" />
                    <el-radio label="До 300 млн.руб" />
                    <el-radio label="Свыше 300 млн.руб" />
                    <div><el-button  size="mini" @click="backStep" plain>Назад</el-button></div>
                  </div>
                </el-radio-group>
              </el-form-item>
            </transition>

            <transition name="fade">
              <el-form-item v-show="step === 6" prop="contacts">
                <div class="text-muted">Предпочитаемый способ получения результатов расчета:</div>
                <el-checkbox-group v-model="form.contacts">

                  <el-form-item prop="mobile" class="checkbox-group">
                    <el-row>
                      <el-checkbox label="mobile" name="mobile">
                        <label>Номер телефона:</label>
                        <el-input size="small" placeholder="+7917" type="number" v-model="form.mobile"/>
                      </el-checkbox>
                    </el-row>
                  </el-form-item>

                  <el-form-item prop="email" class="checkbox-group">
                    <el-row>
                      <el-checkbox label="email" name="email">
                        <label>Email:</label>
                        <el-input size="small" placeholder="test@mail.ru" type="email" v-model="form.email" />
                      </el-checkbox>
                    </el-row>
                  </el-form-item>

                  <el-form-item prop="whatsApp" class="checkbox-group">
                    <el-row>
                      <el-checkbox label="whatsApp" name="whatsApp">
                        <label>WhatsApp:</label>
                        <el-input size="small" placeholder="+7917" type="number" v-model="form.whatsApp"/>
                      </el-checkbox>
                    </el-row>
                  </el-form-item>


                </el-checkbox-group>

                <div style="display: flex;justify-content: space-between">
                  <div><el-button  size="mini" @click="backStep" plain>Назад</el-button></div>
                  <div>
                    <el-button  size="mini" @click="submit('form')" plain>Жду рассчета</el-button>
                  </div>
                </div>
              </el-form-item>
            </transition>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <!-- Карточка перехода на ФЗ -->
    <el-card>
      <div slot="header" class="clearfix">
        <span>Примеры расчетов</span>
      </div>
      <nuxt-link class="federal-law-link" to="FederalLaw">
        <div>
          <span>Переход для уточнения информации</span>
          <i class="el-icon-tickets" />
        </div>
      </nuxt-link>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const validateMobile = (rule, value, callback) => {
      if (this.form.contacts.filter((b) => { return b.includes('mobile') }).length) {
        if (value.length < 6) {
          callback(new Error('Длина номера должна быть 6/12 цифр'));
          this.$refs.form.validateField('form');
        } else {
          if (value.length > 12) {
            callback(new Error('Длина номера должна быть 6/12 цифр'));
            this.$refs.form.validateField('form');
          }
          callback();
        }
      } else {
        callback();
      }
    }
    const validateEmail = (rule, value, callback) => {
        if (this.form.contacts.filter((b) => { return b.includes('email') }).length) {
          if (value.length < 6) {
            callback(new Error('Длина номера должна быть 6/12 цифр'));
            this.$refs.form.validateField('form');
          } else {
            if (value.length > 12) {
              callback(new Error('Длина номера должна быть 6/12 цифр'));
              this.$refs.form.validateField('form');
            }
            callback();
          }
        } else {
          callback();
        }
    }
    const validateWhatsApp = (rule, value, callback) => {
        if (this.form.contacts.filter((b) => { return b.includes('whatsApp') }).length) {
          if (value.length < 6) {
            callback(new Error('Длина номера должна быть 6/12 цифр'));
            this.$refs.form.validateField('form');
          } else {
            if (value.length > 12) {
              callback(new Error('Длина номера должна быть 6/12 цифр'));
              this.$refs.form.validateField('form');
            }
            callback();
          }
        } else {
          callback();
        }
    }
    return {
      step: 0,
      collapseShow: false,
      form: {
        registrationLegalEntity: null, // Субьект регистрации Вашего юридического лица
        typeSRO                : null, // Тип СРО
        tender                 : null, // Планируете ли участие в государственных тендерах
        conditionsWork         : null, // Условия проведения работ
        HPC                    : null, // Имеются ли у вас специалисты, внесенные в HPC
        price                  : null, // Сумма одного договора
        contacts               : ['mobile'],
        mobile                 : '', // Позвонить на номер
        email                  : '', // EMAIL
        whatsApp               : '', // Позвонить на whatsApp
      },
      rules: {
        contacts: [
          { type: 'array', required: true, message: 'Пожалуйста выберите один из вариантов', trigger: 'change' }
        ],
        mobile:[
          { validator: validateMobile, trigger:'blur' }
        ],
        email:[
          { validator: validateEmail, trigger: 'blur' }
        ],
        whatsApp:[
          { validator: validateWhatsApp, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

    nextStep () {
      if (this.step <= 5) {
        this.step += 1
      }
    },
    backStep () {
      if (this.step > 0) {
        this.step -= 1
      }
    },
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$notify({
            title: 'Спасибо за обращение.',
            type: 'success',
            message: 'Мы предоставим вам расчет в ближайшее время'
          });
        } else {
          this.$notify({
            title: 'Ошибка введенных данных.',
            type: 'error',
            message: 'Пожалуйста проверьте введенные данные'
          });
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss">
  #content {
    .federal-law-link {
      color: #303133;
      text-decoration: none;
      &:hover {
        cursor: pointer;
        color: #5d93ce;
      }
    }
    .radio_items {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      min-height: 200px;
      min-width: 600px;
      justify-content: space-between;
      .contacts {
        display: flex;
        align-items: center;
        min-height: 32px;
        label {
          margin-right: 10px;
        }
      }
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
    .text-muted {
      color: #a0a0a0;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .checkbox-group {
      margin-bottom: 15px;
    }
    .fade-enter,
    .fade-leave-to { opacity: 0 }

    .fade-leave,
    .fade-enter-to { opacity: 1 }

    .fade-enter-active { transition: all 1s ease }
    .fade-leave-active { transition: all 1s ease; display: none }
  }
  // #ea9e59 вторичный цвет
</style>
