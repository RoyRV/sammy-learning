<template>
  <div>
    <b-row>
      <b-col>
        <h2>Restas</h2>
      </b-col>
    </b-row>
    <b-tabs>
      <b-tab title="Ejemplos" active>
        <b-row class="mt-5">
          <b-col cols="6" md="3">
            <b-row>
              <b-col>
                <vue-slider v-model="numbers[0]" :max="20" :min="10" />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <span
                  >Si tengo {{ numbers[0] }} manzana{{
                    numbers[0] == 1 ? "" : "s"
                  }}</span
                >
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <FigureComponent
                  v-bind:number="numbers[0]"
                  style="display: inline-block; margin: 5px 0px"
                />
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <div>
              <img :src="'/assets/minus.svg'" style="max-width: 60px" />
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <b-row>
              <b-col>
                <vue-slider v-model="numbers[1]" :max="10" />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <span
                  >Y me como {{ numbers[1] }} manzana{{
                    numbers[1] == 1 ? "" : "s"
                  }}</span
                >
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <FigureComponent
                  v-bind:number="numbers[1]"
                  :iconSvg="'/assets/eaten-apple.svg'"
                  style="display: inline-block; margin: 5px 0px"
                />
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6" md="3">
            <div>
              <img :src="'/assets/equal.svg'" style="max-width: 60px" />
            </div>
          </b-col>
        </b-row>
        <hr />
        <b-row v-if="total >= 0">
          <b-col>
            <span
              >Me quedara en total
              <strong> {{ showAnswer ? total : "X?" }} </strong>manzanas</span
            >
            <br />
            <b-button class="btnAnswer" variant="info" @click="toogleAnswer()">
              {{ showAnswer ? "Ocultar" : "Ver" }} respuesta
              <b-icon
                v-if="!showAnswer"
                class="btnIcon"
                icon="eye-fill"
              ></b-icon>
              <b-icon
                v-if="showAnswer"
                class="btnIcon"
                icon="eye-slash-fill"
              ></b-icon>
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <FigureComponent
              :number="total"
              style="display: inline-block; margin: 5px 0px"
            />
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Ejercicios">
        <b-row class="mt-5">
          <b-col cols="12">
            <p>
              La cantidad de digitos para su resta será : {{ numberOfDigits }}
            </p>
          </b-col>
          <b-col cols="12">
            <vue-slider v-model="numberOfDigits" :max="8" :min="2" />
          </b-col>

          <b-col cols="6" offset="3" class="mt-4">
            <b-button variant="info" @click="generateNumbers()"
              >Generar resta</b-button
            >
          </b-col>
          <b-col cols="12" class="mt-4">
            <table width="30%" align="center" class="mate bold">
              <tbody>
                <tr>
                  <td width="3%"></td>
                  <td width="15%">
                    <span> {{ exerciseNumberOne }} </span>
                  </td>
                </tr>
                <tr>
                  <td><i>-</i></td>
                  <td width="15%">
                    <span> {{ exerciseNumberTwo }} </span>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">——————————</td>
                </tr>
              </tbody>
            </table>
          </b-col>

          <b-col cols="12" class="mt-4">
            <b-row>
              <b-col cols="12" class="mt-4">
                <InputNumberComponent
                  v-model="exerciseAnswer"
                  inline
                  controls
                  :min="0"
                  :center="true"
                >
                </InputNumberComponent>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" class="mt-4">
                <b-button
                  class="btnExerciseAnswer"
                  variant="info"
                  @click="checkAnswer()"
                >
                  Validar respuesta
                  <b-icon class="btnIcon" icon="check"></b-icon>
                </b-button>

                <b-alert
                  class="mt-2"
                  :variant="answerType"
                  dismissible
                  fade
                  :show="showDismissibleAlert"
                  @dismissed="showDismissibleAlert = false"
                >
                  {{ answerText }}
                </b-alert>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import FigureComponent from "@/components/figureComponent.vue";
import InputNumberComponent from "@/components/inputNumberComponent.vue";
import { mathHelper } from "@/helpers";
export default {
  name: "Substraction",
  components: { FigureComponent, InputNumberComponent },
  data() {
    return {
      numbers: [12, 2],
      showAnswer: false,
      numberOfDigits: 2,
      exerciseNumberOne: 0,
      exerciseNumberTwo: 0,
      exerciseAnswer: 0,
      showDismissibleAlert: false,

      answerType: "",
      answerText: "",
    };
  },
  computed: {
    total() {
      return this.numbers[0] - this.numbers[1];
    },
  },
  methods: {
    toogleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    generateNumbers() {
      let minValue = Math.pow(10, this.numberOfDigits - 1);
      let maxValue = Math.pow(10, this.numberOfDigits);
      this.exerciseNumberOne = mathHelper.getRandomNumber(minValue, maxValue);

      this.exerciseNumberTwo = mathHelper.getRandomNumber(
        minValue,
        this.exerciseNumberOne
      );
      this.showDismissibleAlert = false;
      this.exerciseAnswer = 0;
    },
    checkAnswer() {
      let expectedResult = this.exerciseNumberOne - this.exerciseNumberTwo;
      this.showDismissibleAlert = true;
        console.log(expectedResult);
        console.log(this.exerciseAnswer);
      if (+expectedResult == +this.exerciseAnswer) {
        this.answerType = "success";
        this.answerText = "Correcto! intenta otra!";
      } else {
        this.answerType = "danger";
        this.answerText = "Incorrecto , intenta de nuevo!";
      }
    },
  },
};
</script>
<style scoped>
hr {
  border-top-width: 10px;
}
</style>
