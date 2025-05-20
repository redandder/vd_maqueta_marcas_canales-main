<script>
    import * as d3 from "d3"
    export let series= ""
    import Color from "/src/color.svelte"
    import  Mancha from "/src/mancha.svelte"

    const maxRating = d3.max(series, (d) => d.Rating)
    const minRating = d3.min(series, (d) => d.Rating)
    const diamRating = d3.scaleLinear()
        .domain([minRating, maxRating]).range([15, 180])

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
        .domain([minVentas, maxVentas]).range([1, 11])
  //function imagenGato(tipo) {
    //if (tipo == "Episodica") return "public/images/GatitoIzq.svg";
    //if (tipo == "Serializada") return "public/images/GatitoDer.svg";
    //return "public/images/GatitoDosManos.svg";
  //}



</script>

<div class="container">

      <!-- Iteramos la data para visualizar c/ entidad -->
      {#each series as serie}

      <div class="person-container">

        {#if serie.Tipo == "Serializada"}
        
          <img
            class="person"
            src="public/images/GatitoDer.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)*0.674}px; 
              height: {diamRating(serie.Rating)}px; 

            ">

        {/if}
        {#if serie.Tipo == "Episodica"}
 
          <img
            class="person"
            src="public/images/GatitoIzq.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)*0.674}px; 
              height: {diamRating(serie.Rating)}px; 

            ">
  
      {/if}
      {#if serie.Tipo == "Ambas"}
          <img
            class="person"
            src="public/images/GatitoDosManos.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)*0.674}px; 
              height: {diamRating(serie.Rating)}px; 

            ">
      {/if}
        <div class= "manchas">
        <Mancha cant={manchaVentas(serie.Ventas)} tamano={diamRating(serie.Rating)*0.674} altura= {diamRating(serie.Rating)}/>
        </div>
        <div class="person-color">
        <Color tipo={serie.Tipo} tamano={diamRating(serie.Rating)*0.674} altura= {diamRating(serie.Rating)} color={colorDuracion(serie.Duracion)}/>
        </div>
      </div>
      <!--<div class="nombre">
        <p>{serie.Nombre}</p>
      </div>-->
    {/each}
      <!-- Fin iteración -->

    </div>
<style>

      .container{
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    gap: 2px;
    padding-left: 110px;
    padding-right: 0px;
    width: 1130px;
    height: 550px;
  }
  .person-container {
    display: flex;
    position: relative;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 120px;
    height: 188px;
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
      bottom: -6px;
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
    bottom: -6px;       
  }



  </style>