<script>
    import * as d3 from "d3"
    export let series= ""
    import Color from "/src/color.svelte"
    import  Mancha from "/src/mancha.svelte"
    import { llamadoGato, gatoEspecifico } from '/src/store.js';
    import { get } from 'svelte/store';

    function manejarClick(i, j) {
      llamadoGato.update(n => n + 1);
      gatoEspecifico.set(i+j*4);
    }



    const maxRating = d3.max(series, (d) => d.Rating)
    const minRating = d3.min(series, (d) => d.Rating)
    const diamRating = d3.scaleLinear()
        .domain([minRating, maxRating]).range([80, 180])

    const manchaW = d3.scaleLinear()
        .domain([minRating, maxRating]).range([15, 180])
    const manchaH = d3.scaleLinear()
        .domain([minRating, maxRating]).range([15, 180])
    const maxDuracion = d3.max(series, (d) => d.Duracion)
    let colorDuracion = d3.scaleThreshold()
        .domain([ 50, 100, 150,200])
        .range(["#FDF8F2", "#EFCFA9", "#DF9F53", "#AC6C20", "#6C4414"])
        const maxVentas= d3.max(series, (d) => d.Ventas)
    const minVentas = d3.min(series, (d) => d.Ventas)
    let manchaVentas=d3.scaleLinear()
        .domain([minVentas, maxVentas]).range([1, 5])

  let arr= [];
  let temp=[];
  for(let i = 0; i < series.length; i++){
            temp.push(series[i]);
      if((i+1) % 4 == 0 || (i + 1) == series.length){
        arr.push(temp);
        temp=[];
      } 


  }
  console.log("m", arr)





</script>
                    <img
            class="techo"
            src="./images/techoo.svg"
            alt="">
          <div class="mueble">
<div class="container">
    {#each arr as cuatroG, j}
      <!-- Iteramos la data para visualizar c/ entidad -->
      <div class= "gatos-con-estante">
      {#each cuatroG as serie,i}
      <div class="gato-wrapper">
      <div class="person-container">
        <button class="gato-interactivo" style="
              width: {diamRating(serie.Rating)*0.634}px; 
              height: {diamRating(serie.Rating)}px; " on:click={() => manejarClick(i,j)}><a href="#down">Click Here to Smoothly Scroll Down</a></button>

        {#if serie.Tipo == "Serializada"}
          <img
            class="person"
            src="./images/gatoDer.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)*0.634}px; 
              height: {diamRating(serie.Rating)}px; ">

        {/if}
        {#if serie.Tipo == "Episodica"}
 
          <img
            class="person"
            src="./images/gatoIzq.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)*0.634}px; 
              height: {diamRating(serie.Rating)}px; 

            ">
  
      {/if}
      {#if serie.Tipo == "Ambas"}
          <img
            class="person"
            src="./images/linea-gato-dos.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)*0.634}px; 
              height: {diamRating(serie.Rating)}px; 

            ">
      {/if}

        <div class= "manchas">
        <Mancha tipo={serie.Tipo} cant={manchaVentas(serie.Ventas)} tamano={diamRating(serie.Rating)*0.634} altura= {diamRating(serie.Rating)}/>
        </div>
        <div class="person-color">
        <Color tipo={serie.Tipo} tamano={diamRating(serie.Rating)*0.634} altura= {diamRating(serie.Rating)} color={colorDuracion(serie.Duracion)}/>
        </div>

      </div>
      <div class="nombre-container">
        <p>{serie.Nombre}</p>
      </div>
      </div>
      {/each}
          <img
        class="estante"
        src="./images/estante.svg"
        alt="">
       </div>     
    {/each}
    </div>
    </div>

<style>
  .gatos-con-estante{
            display: flex;
    justify-content: center;
    align-items: end;
    margin: auto;
    flex-wrap: wrap;
   row-gap: 0px;
    column-gap: 50px;
  }
  .techo{
      margin: auto;
        position: relative;
     width: 10011px;
     bottom: -16px;
  }
  .mueble{
  margin: auto;
    background-color: #F0D786;
      width: 1230px;
    height: 1420px;
 border: 50px solid transparent;
      border-image-slice: 60;
  border-image-source:url("/images/estante-borde.svg"); 
  }
.estante{
  
    height: 100%;
     width: 100%;
}
      .container{
        display: flex;
    justify-content: center;
    align-items: end;
    margin: auto;
    flex-wrap: wrap;
   row-gap: 50px;
    column-gap: 50px;
    
  
  
  
  
  }
  .person-container {
    display: flex;
    position: relative;
    align-items: flex-end;
    justify-content: center;
    flex: 180px 0 0;
    width: 120px;

    height: 180px;
    margin:auto;
    height: 200px;

    /*
    display: flex;
    
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 180px 0 0;
    */
    
  }
    .person {
        position: absolute;
        /*
    bottom: -10px;
    */

    z-index: 3;
  }
  .manchas{
      bottom: -1.5%;
         position: absolute;
    mix-blend-mode: multiply;
    z-index: 3;
  }
    .person-color{
    position: absolute;
    /*
    left: 2%;
    right: 3.10%;
    */
    bottom: -2%;  
    
 

   

     
  }

  .nombre-container {
    margin-top: 30px;
    text-align: center;
    background-image: url("/images/fondo-sticker.png");
    background-size: 190px;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 14px;
    width: 150px;
    padding: 10px;
    transform: translateY(-20%);
  }

  .gato-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 176px;
    width: 200px;
  }
  .gato-interactivo{
    z-index: 900;
    position: absolute;
    opacity: 0;
  }
  @keyframes salto {
    0%   { transform: translateY(0); }
    30%  { transform: translateY(-20px); }
    50%  { transform: translateY(0); }
    70%  { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }

  .person-container:hover {
    animation: salto 0.6s ease-out;
  }
  

  </style>