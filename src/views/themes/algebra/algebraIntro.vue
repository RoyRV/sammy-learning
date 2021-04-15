<template>
    <div>
        <b-row>
            <b-col cols="12">
                <h2>Que es una expresión algebraica?</h2>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col cols="12" style="text-align: left;">
                <p>Una expresión algebraica es una combinación de letras y números ligadas por los signos de las operaciones: adición, sustracción, multiplicación, división y potenciación</p>
                <p>Las expresiones algebraicas nos permiten, por ejemplo, hallar áreas y volúmenes.</p>
                <p>
                    <ul>
                        <li>Longitud de la circunferencia: 2πr, donde r es el radio de la circunferencia.</li>
                        <li>Área del cuadrado: S = lado<sup>2</sup></li>
                        <li>Perimetro del cuadrado: S = 4<em><sub> x </sub></em>lado</li>
                        <li>Volumen del cubo: V = a<sup>3</sup>, donde a es la arista del cubo.</li>
                    </ul>
                </p>
                <p>Las expresiones anteriores estan contienen tanto números, como letras como exponentes, ahora analicemos la sgte expresion</p>
                <p style="text-align: center;">  <span class="description">3 x</span><sup style="top: -1.5em;">4</sup></p>
                <p>
                    <ul>
                        <li>3 -> indica la parte natural o <strong>coeficiente</strong></li>
                        <li>x -> indica la parte desconocida o <strong>el termino</strong> ó <strong>la variable </strong></li>
                        <li>2 -> indica el exponente de la parte algebraica ó <strong>grado del termino</strong></li>
                    </ul>
                </p>
                <p>Recuerda que la mejor manera de operar una expresión algebraica es descomponiendola en factores primos</p>
                <p style="text-align: center;">  
                    <span class="description">48 x</span><sup style="top: -1.5em;">3</sup>
                    <span class="description"> + 98 y</span><sup style="top: -1.5em;">2</sup>
                </p>
                <p style="text-align: center;">  
                    <span> => convertimos los coeficientes en sus factores primos</span>
                    <br/>
                    <span>48 = 2<sup>4</sup> <em><sub>x</sub></em> 3<sup>1</sup></span>
                    <span> , 98 = 7<sup>1</sup> <em><sub>x</sub></em> 2<sup>1</sup></span>
                </p>
                <p style="text-align: center;" >  
                    <span>La expresión quedaria como  : </span><br/>
                    <span class="description"> 2 <sup>4</sup> <em><sub>.</sub></em></span>
                    <span class="description"> 3 <sup>1</sup> <em><sub>.</sub></em></span>
                    <span class="description"> x</span><sup style="top: -1.5em;">3</sup>
                    <span class="description"> + </span>
                    <span class="description"> 2 <sup>1</sup> <em><sub>.</sub></em></span>
                    <span class="description"> 7 <sup>2</sup> <em><sub>.</sub></em></span>
                    <span class="description"> y</span><sup style="top: -1.5em;">2</sup>
                </p>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'AlgebraIntroduction'
    }
</script>
<style scoped>
    .description {
        font-family: "MathJax_Math-italic";
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 35px;
    }
</style>