<script>
    import * as d3 from "d3"
    export let series= ""
    import Color from "/src/color.svelte"
    import  Mancha from "/src/mancha.svelte"

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
  //function imagenGato(tipo) {
    //if (tipo == "Episodica") return "./images/GatitoIzq.svg";
    //if (tipo == "Serializada") return "./images/GatitoDer.svg";
    //return "./images/GatitoDosManos.svg";
  //}



</script>
                    <img
            class="techo"
            src="./images/techo.svg"
            alt="">
          <div class="mueble">
<div class="container">

      <!-- Iteramos la data para visualizar c/ entidad -->

      {#each series as serie, i}
      <div class="gato-wrapper">
      <div class="person-container">
        {#if serie.Tipo == "Serializada"}
          <img
            class="person"
            src="./images/GatitoDer.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)*0.674}px; 
              height: {diamRating(serie.Rating)}px; ">

        {/if}
        {#if serie.Tipo == "Episodica"}
 
          <img
            class="person"
            src="./images/GatitoIzq.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)*0.674}px; 
              height: {diamRating(serie.Rating)}px; 

            ">
  
      {/if}
      {#if serie.Tipo == "Ambas"}
          <img
            class="person"
            src="./images/GatitoDosManos.svg"
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
      <div class="nombre-container">
        <p>{serie.Nombre}</p>
      </div>
      </div>
      {#if (i+1)%5==0 || i ==serie.length-1}
                <img
            class="estante"
            src="./images/estante.svg"
            alt="">
      {/if}
    {/each}
    </div>
    </div>

<style>
  .techo{
        
     width: 10011px;
     bottom: -6px;
  }
  .mueble{
    background-color: #F0D786;

  
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
   row-gap: 0px;
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

  

  </style>