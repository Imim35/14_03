<template>
  <div>
    <el-collapse id="form" class="form">
      <el-collapse-item title="РАССЧИТАТЬ СТОИМОСТЬ">
        <el-form
          :model="form"
          :rules="rules"
          ref="form"
          style="display: flex">

          <transition name="fade">
            <el-form-item v-show="step === 0">
              <div class="text-muted form__label">Субьект регистрации Вашего юридического лица:</div>
              <el-radio-group v-model="form.registrationLegalEntity" @change="nextStep">
                <div class="radio-items">
                  <el-radio label="Москва и МО" />
                  <el-radio label="Санкт-Петербург" />
                  <el-radio label="Другое" />
                </div>
              </el-radio-group>
            </el-form-item>
          </transition>

          <transition name="fade">
            <el-form-item v-show="step === 1">
              <div class="text-muted form__label">Тип СРО:</div>
              <el-radio-group v-model="form.typeSRO" @change="nextStep">
                <div class="radio-items">
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
              <div class="text-muted form__label">Планируете ли участие в государственных тендерах?</div>
              <el-radio-group v-model="form.tender" @change="nextStep">
                <div class="radio-items">
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
              <div class="text-muted form__label">Условия проведения работ?</div>
              <el-radio-group v-model="form.conditionsWork" @change="nextStep">
                <div class="radio-items">
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
              <div class="text-muted form__label">Планируете ли участие в государственных тендерах?</div>
<!--              <div class="text-muted form__label">Имеются ли у вас специалисты, внесенные в HPC?</div>-->
              <el-radio-group size="mini" v-model="form.HPC" @change="nextStep">
                <div class="radio-items">
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
              <div class="text-muted form__label">Сумма одного договора:</div>
              <el-radio-group v-show="form.typeSRO === 'Строительство' || form.typeSRO === 'Затрудняюсь ответить'" v-model="form.price" @change="nextStep">
                <div class="radio-items">
                  <el-radio label="До 60 млн.руб" />
                  <el-radio label="До 500 млн.руб" />
                  <el-radio label="До 3 млрд.руб" />
                  <el-radio label="До 10 млрд.руб" />
                  <el-radio label="Свыше 10 млрд.руб" />
                  <div><el-button  size="mini" @click="backStep" plain>Назад</el-button></div>
                </div>
              </el-radio-group>
              <el-radio-group v-show="form.typeSRO === 'Проектирование' || form.typeSRO === 'Инженерные изыскания'" v-model="form.price" @change="nextStep">
                <div class="radio-items">
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
              <div class="text-muted form__label">Предпочитаемый способ получения результатов расчета:</div>
              <el-checkbox-group v-model="form.contacts" class="checkbox-group">

                <el-form-item prop="mobile" class="checkbox-group__item">
                  <el-checkbox @change="mobileIsChecked = !mobileIsChecked" label="mobile" name="mobile">
                    <label>Телефон:</label>
                  </el-checkbox>
                  <el-input size="small" placeholder="+79170157725" :disabled="!mobileIsChecked" type="number" v-model="form.mobile"/>
                </el-form-item>

                <el-form-item prop="email" class="checkbox-group__item">
                  <el-checkbox label="email" @change="emailIsChecked = !emailIsChecked" name="email">
                    <label>Email:</label>
                  </el-checkbox>
                  <el-input size="small" placeholder="test@mail.ru" :disabled="!emailIsChecked" type="email" v-model="form.email" />
                </el-form-item>

                <el-form-item prop="whatsApp" class="checkbox-group__item">
                  <el-checkbox label="whatsApp" @change="whatsAppIsChecked = !whatsAppIsChecked" name="whatsApp">
                    <label>WhatsApp:</label>
                  </el-checkbox>
                  <el-input size="small" placeholder="+79170157725" :disabled="!whatsAppIsChecked" type="number" v-model="form.whatsApp"/>
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
  </div>

</template>

<script>
export default {
  name: 'Form',
  data () {
    // Правила валидации поля мобильного
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

    // Правила валидации поля email
    const validateEmail = (rule, value, callback) => {
      if (this.form.contacts.filter((b) => { return b.includes('email') })) {
        if (!this.validateRegEmail(value)) {
          callback(new Error('Данные должны быть введены в формате email'));
          this.$refs.form.validateField('form');
        }
        callback();
      } else {
        callback();
      }
    }

    // Правила валидации поля WhatsApp
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
      collapseShow     : false, // Отображение collapse элемента
      mobileIsChecked  : true,
      emailIsChecked   : false,
      whatsAppIsChecked: false,
      form: {
        registrationLegalEntity: null,       // Субьект регистрации Вашего юридического лица
        typeSRO                : null,       // Тип СРО
        tender                 : null,       // Планируете ли участие в государственных тендерах
        conditionsWork         : null,       // Условия проведения работ
        HPC                    : null,       // Имеются ли у вас специалисты, внесенные в HPC
        price                  : null,       // Сумма одного договора
        contacts               : ['mobile'], // checkbox group
        mobile                 : '',         // Позвонить на номер
        email                  : '',         // EMAIL
        whatsApp               : '',         // Позвонить на whatsApp
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
    // Переход на следующую страницу формы
    nextStep () {
      if (this.step <= 5) {
        this.step += 1
      }
    },

    // Переход на предшетствующую страницу формы
    backStep () {
      if (this.step > 0) {
        this.step -= 1
      }
      if (this.step === 0) {
        this.form.registrationLegalEntity = null
      }
      if (this.step === 1) {
        this.form.typeSRO = null
      }
      if (this.step === 2) {
        this.form.tender = null
      }
      if (this.step === 3) {
        this.form.conditionsWork = null
      }
      if (this.step === 4) {
        this.form.HPC = null
      }
      if (this.step === 5) {
        this.form.price = null
      }
    },

    // Валидация поля email с помощью regexp
    validateRegEmail (email) {
      if (this.emailIsChecked) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      } else {
        return true
      }
    },

    // Отправление формы
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$notify({
            title: 'Спасибо за обращение.',
            type: 'success',
            message: 'Мы предоставим вам расчет в ближайшее время'
          });
          // Inside a component
          this.$axios.$post('/mail/send', {
            subject: 'Форма',
            info: this.form,
            from: '80.249.144.26',
          })
        } else {
          this.$notify({
            title: 'Ошибка введенных данных.',
            type: 'error',
            message: 'Пожалуйста проверьте введенные данные'
          });
          return false;
        }
      });
    },
  },
  watch: {
    // Сброс значения input в зависимости от checkbox значения
    'mobileIsChecked' () {
      if (!this.mobileIsChecked) {
        this.form.mobile = ''
      }
    },
    'emailIsChecked' () {
      if (!this.emailIsChecked) {
        this.form.email = ''
      }
    },
    'whatsAppIsChecked' () {
      if (!this.whatsAppIsChecked) {
        this.form.whatsApp = ''
      }
    }
  }
}
</script>

<style lang="scss">
  .el-collapse {
    @media(max-width: 550px) {
      border-top: none !important;
    }
  }
  .el-collapse-item__header {
    @media(max-width: 550px) {
      font-size: 12px;
    }
  }
  .form {
    .radio-items {
      display: flex;
      flex-direction: column;
      min-height: 250px;
      justify-content: space-between;
      font-size: 13px;
    }
    .el-radio, .el-radio__input {
      white-space: pre-wrap;
    }
    .el-radio {
      display: flex;
      align-items: center;
      padding: 5px;
      border-radius: 3px;
      height: 100%;
      border: 1px solid #DCDFE6;
      margin-right: 10px;
    }
    .el-radio-group {
      width: 100%;
    }
    .el-form-item {
      width: 100%;
      margin-bottom: 15px;
    }
    .el-collapse-item__content {
      padding-left: 5px;
      padding-bottom: 0;
    }
    .text-muted {
      font-weight: bold;
      line-height: 15px;
      font-size: 14px;
      margin: 15px 0 15px 0;
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
   &__label {
     font-size: 11.5px;
   }
   .el-radio__label {
     font-size: 13px;
   }
   .checkbox-group {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     min-height: 204px;
     &__item {
       .el-form-item__content {
         label {
           margin-right: 5px;
         }
         width: 100%;
         display: flex;
       }
     }
   }
}
</style>
