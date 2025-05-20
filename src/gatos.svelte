<script>
    import * as d3 from "d3"
    export let series= ""
      

    const maxRating = d3.max(series, (d) => d.Rating)
    const minRating = d3.min(series, (d) => d.Rating)
    const diamRating = d3.scaleLinear()
        .domain([minRating, maxRating]).range([15, 180])
    const maxDuracion = d3.max(series, (d) => d.Duracion)
    let colorDuracion = d3.scaleThreshold()
        .domain([ 50, 100, 150,200])
        .range(["#FDF8F2", "#EFCFA9", "#DF9F53", "#AC6C20", "#6C4414"])

  //function imagenGato(tipo) {
    //if (tipo == "Episodica") return "public/images/GatitoIzq.svg";
    //if (tipo == "Serializada") return "public/images/GatitoDer.svg";
    //return "public/images/GatitoDosManos.svg";
  //}

  function pathGato(tipo) {
    if (tipo == "Episodica") return "";
    if (tipo == "Serializada") return "";
    return "M406.532 724.776C482.375 874.29 521.253 963.881 629.032 924.276C655.999 872.827 636.426 821.608 593.032 724.776C611.637 576.957 612.969 497.617 593.032 364.776C610.773 265.689 641.307 231.706 704.032 179.776C776.472 100.402 787.554 63.5551 740.032 15.2758C680.946 -7.9332 633.673 24.8292 547.032 90.7758C480.57 155.413 445.514 154.823 383.032 170.276C269.757 154.197 234.094 124.105 188.532 56.7759C84.7243 -9.42159 46.8349 -6.4691 8.53238 56.7759C3.98365 92.8977 67.4991 167.144 181.032 299.776C171.195 278.104 174.645 303.094 194.533 404.776C173.927 397.84 168.472 471.946 189.033 731.276C120.908 844.499 116.292 902.601 194.533 938.276C264.031 931.936 302.71 884.941 371.033 731.276L406.532 724.776Z"; 
  }

</script>

<div class="container">

      <!-- Iteramos la data para visualizar c/ entidad -->
      {#each series as serie}
        {#if serie.Tipo == "Serializada"}
        <div class="person-container">
          <img
            class="person"
            src="public/images/GatitoDer.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)}px; 
              height: {diamRating(serie.Rating)}px; 

            ">
  <div class="person-color">
          <svg width="{diamRating(serie.Rating)-20}" height="{diamRating(serie.Rating)-20}" viewBox="0 0 777 946" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={pathGato(serie.Tipo)} 
            fill="{colorDuracion(serie.Duracion)}" stroke="{colorDuracion(serie.Duracion)}" stroke-width="15"/>
          </svg>
  </div>
        </div>
        {/if}
        {#if serie.Tipo == "Episodica"}
                <div class="person-container">
          <img
            class="person"
            src="public/images/GatitoIzq.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)}px; 
              height: {diamRating(serie.Rating)}px; 

            ">
  <div class="person-color">
          <svg width="{diamRating(serie.Rating)-20}" height="{diamRating(serie.Rating)-20}" viewBox="0 0 777 946" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={pathGato(serie.Tipo)} 
            fill="{colorDuracion(serie.Duracion)}" stroke="{colorDuracion(serie.Duracion)}" stroke-width="15"/>
          </svg>
  </div>



        </div>
      {/if}
      {#if serie.Tipo == "Ambas"}
          <div class="person-container">
          <img
            class="person"
            src="public/images/GatitoDosManos.svg"
            alt=""
            style="
              width: {diamRating(serie.Rating)}px; 
              height: {diamRating(serie.Rating)}px; 

            ">
  <div class="person-color">
          <svg width="{diamRating(serie.Rating)-20}" height="{diamRating(serie.Rating)-20}" viewBox="0 0 777 946" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={pathGato(serie.Tipo)} 
            fill="{colorDuracion(serie.Duracion)}" stroke="{colorDuracion(serie.Duracion)}" stroke-width="15"/>
          </svg>
  </div>



        </div>
      {/if}

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
    width: 200px;
    height: 330px;
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
    width: 100%;
    height:100%;
    z-index: 3;
  

  }
    .person-color{
    position: absolute;
    
    left: 2%;
    right: 3.10%;
    bottom: -10px;  
    
    width: 95%;

   

     
  }



  </style>