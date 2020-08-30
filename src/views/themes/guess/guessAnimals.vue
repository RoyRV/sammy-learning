<template>
    <div>
        <b-row class="mb-4">
            <b-col>
                <h2>Animales</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="(riddle,index) in riddles" :key="index" cols="12" md="4">
                <b-card class="mb-2">
                    <b-card-text>
                        {{riddle.statement}}
                    </b-card-text>
                    <p v-if="riddle.showAnswer"> <strong>{{riddle.answer}}</strong></p>
                    <p class="btnContainer">
                        <b-button class="btnAnswer" variant="info" @click=toogleAnswer(index)>
                            {{riddle.showAnswer?'Ocultar':'Ver'}} respuesta
                            <b-icon v-if="!riddle.showAnswer" class="btnIcon" icon="eye-fill"></b-icon>
                            <b-icon v-if="riddle.showAnswer" class="btnIcon" icon="eye-slash-fill"></b-icon>
                        </b-button>
                    </p>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'GuessAnimals',
        data() {
            return {
                riddles: [
                    { statement: 'El roer es mi trabajo,el queso mi aperitivo y el gato ha sido siempre mi más temido enemigo.', answer: 'El Ratón', showAnswer: false },
                    { statement: 'Salta y salta, y la colita le falta.', answer: 'La rana', showAnswer: false },
                    { statement: '¿Cuál es el animal que come con las patas?', answer: 'El pato', showAnswer: false },
                    { statement: 'Vuelo de noche, duermo de día y nunca verás plumas en ala mía.', answer: 'El murciélago', showAnswer: false },
                    { statement: '¿Cuál es el animal que camina con las patas en la cabeza?', answer: 'El piojo', showAnswer: false },
                    { statement: 'Cuando nada en los ríos parece un tronco flotante, pero si muestra sus dientes todos huyen al instante.', answer: 'El cocodrilo', showAnswer: false },
                    { statement: 'Viste de chaleco blanco, y también de saco negro , es un ave que no vuela,pero nada. ¿Quien será?.', answer: 'El pingüino', showAnswer: false },
                    { statement: 'Este es un animal,de tal modo original,que al ponerse cara arriba,ya no se llama igual.', answer: 'El escarabajo', showAnswer: false },
                    { statement: 'Si hay una carrera en el mar,¿quién es el último en llegar?.', answer: 'El delfin', showAnswer: false },
                    { statement: 'Alas de mil colores y se pierden entre las flores.', answer: 'La mariposa', showAnswer: false },
                    { statement: 'Aunque no soy florista,trabajo con flores y el hombre disfruta el fruto de mis labores.', answer: 'La abeja', showAnswer: false },
                    { statement: '¿Quién es este que se arrima trayendo su casa arriba?', answer: 'El caracol', showAnswer: false },
                ]
            }
        },
        methods: {
            toogleAnswer(index) {
                this.riddles[index].showAnswer = !this.riddles[index].showAnswer;
            }
        },
    }
</script>
<style scoped>
    .btnContainer {
        display: flex;
        justify-content: center;
    }

    .btnAnswer {
        display: flex;
        align-items: center;
    }

    .btnIcon {
        margin-left: 10px;
    }
</style>