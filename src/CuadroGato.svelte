<script>
    import * as d3 from "d3"
    import Color from "/src/color.svelte"
    import  Mancha from "/src/mancha.svelte"
    import {gatoEspecifico } from "/src/store.js"
    import series from "/src/data/SeriesYJuguetes.json"

    $: serie = $gatoEspecifico !== null ? series[$gatoEspecifico] : null;

    const maxRating = d3.max(series, (d) => d.Rating)
    const minRating = d3.min(series, (d) => d.Rating)
    const diamRating = d3.scaleLinear()
        .domain([minRating, maxRating]).range([160, 360])

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

</script>

{#if serie}

    <div class="contenedor">
              <img
          class="marco"
          src="./images/marco-foto.svg"
          alt=""
          style="height: {diamRating(serie.Rating) * 1.5}px">
          <img class="colina"
          src="./images/fondo-colina.png"
          alt=""
          style="height: {diamRating(serie.Rating) * 1.2}px">
    
    <div class="person-container">

      {#if serie.Tipo === "Serializada"}
        <img
          class="person"
          src="./images/gatoDer.svg"
          alt=""
          style="
            width: {diamRating(serie.Rating)*0.674}px; 
            height: {diamRating(serie.Rating)}px;">
      {/if}

      {#if serie.Tipo === "Episodica"}
        <img
          class="person"
          src="./images/gatoIzq.svg"
          alt=""
          style="
            width: {diamRating(serie.Rating)*0.674}px; 
            height: {diamRating(serie.Rating)}px;">
      {/if}

      {#if serie.Tipo === "Ambas"}
        <img
          class="person"
          src="./images/linea-gato-dos.svg"
          alt=""
          style="
            width: {diamRating(serie.Rating)*0.674}px; 
            height: {diamRating(serie.Rating)}px;">
      {/if}

      <div class="manchas">
        <Mancha
          tipo={serie.Tipo}
          cant={manchaVentas(serie.Ventas)}
          tamano={diamRating(serie.Rating)*0.674}
          altura={diamRating(serie.Rating)} />
      </div>

      <div class="person-color">
        <Color
          tipo={serie.Tipo}
          tamano={diamRating(serie.Rating)*0.674}
          altura={diamRating(serie.Rating)}
          color={colorDuracion(serie.Duracion)} />
      </div>
    </div>
  </div>


{/if}

<style>
  .contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    position: relative;
  }
  .marco {
    position: absolute;
    z-index: 5;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 45%;
    overflow: hidden;
  }
  .person-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    z-index: 3;
  }
    .person {
        position: relative;
        z-index: 3;
  }
  .manchas{
      bottom: -6px;
    position: absolute; 
    mix-blend-mode: multiply;
    z-index: 3;
  }
    .person-color{
    position: absolute;
    bottom: -6px;  
     
  }
  .colina {
    position: absolute;
    z-index: 0;
  }

  </style>