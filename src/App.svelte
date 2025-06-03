<script>
  import * as d3 from "d3"
  import atletas from "/src/data/athletes.csv"
  import series from "/src/data/SeriesYJuguetes.json"
  import Gatos from "/src/gatos.svelte"
  import {llamadoGato, gatoEspecifico} from "/src/store.js"
  import CuadroGato from "/src/CuadroGato.svelte"

  console.log("atletas", atletas)
  console.log("series", series)

  /* 1. Escala para participaciones (cuantitativo > grosor) */
  const minMaxParticipations = d3.extent(atletas, (d) => d.participations)
  let grosorPartic = d3.scaleLinear()
    .domain(minMaxParticipations).range([2, 18])

  /* 2. Escala para medallas (cuantitativo > diámetro círculo) */
  const maxMedallas = d3.max(atletas, (d) => d.medallas)
  const diamMedallas = d3.scaleRadial()
    .domain([0, maxMedallas]).range([0, 100])

  /* 3. Escala para genero (categórico > color) */
  const colorGenero = d3.scaleOrdinal()
    .domain(["F", "M"])
    .range(["#F7DDBA", "#E4D9F2"])

  /* 4. Escala para continentes (categórico > color)   */
  const colorContinentes = d3
    .scaleOrdinal()
    .domain(["América", "África", "Asia", "Europa", "Oceanía"])
    .range(["#ed334e", "#000000", "#fbb132", "#009fe3", "#00963f"])

  function abrirPopup() {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.getElementById('guia-visualizacion').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "${scrollBarWidth}px";
  }

  function cerrarPopup() {
    document.getElementById('guia-visualizacion').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }

</script>


<main>
  <div id="overlay" class="hidden">
    <div id="guia-visualizacion" class="guia-visualizacion hidden">
      <div class="guia-box">
        <div class="gatito-item">
          <img class="gatitoImg" src="./images/GatitoDer.svg" alt="" style="">
          <p>Serializada</p>
        </div>
        <div class="gatito-item">
          <img class="gatitoImg" src="./images/GatitoDosManos.svg" alt="" style="">
          <p>Ambas</p>
        </div>
        <div class="gatito-item">
          <img class="gatitoImg" src="./images/GatitoIzq.svg" alt="" style="">
          <p>Episódica</p>
        </div>
      </div>
      <img src="/images/doodle-line.svg" alt="" style="height: 5px; color: #3c3c3c">
        <div class="guia-box">
          <p>4 episodios</p>
          <div class="circulo-color" style="background-color: #FDF8F2"></div>
          <div class="circulo-color" style="background-color: #EFCFA9"></div>
          <div class="circulo-color" style="background-color: #DF9F53"></div>
          <div class="circulo-color" style="background-color: #AC6C20"></div>
          <div class="circulo-color" style="background-color: #6C4414"></div>
          <p>200 episodios</p>
        </div>
        <img src="/images/doodle-line.svg" alt="" style="height: 5px;">
        <div class="guia-box">
          <img class="gatitoImg" src="./images/GatitoDosManos.svg" alt="" style="height: 100px">
          <img class="gatitoImg" src="./images/GatitoDosManos.svg" alt="" style="height: 60px; top: 50%; transform: translateY(50%);">
        </div>
        <div class="guia-box">
          <p>Rating</p>
        </div>
        <img src="/images/doodle-line.svg" alt="" style="height: 5px;">
        <div class="guia-box">
          <img src="/images/MuchasManchas.svg" alt="" style="height: 100px">
          <img src="/images/PocasManchas.svg" alt="" style="height: 100px">
        </div>
        <div class="guia-box">
          <p># Manchas = # Ganancias por ventas de juguetes</p>
        </div>
    <button on:click={cerrarPopup}>Cerrar</button>
  </div>
  </div>
  
  <div class="header">
    <!--<img src="/images/logo_referencias.svg" width="190" alt="anillos" /> -->
    <p class="bajada">
      Una visualización que explora distintos datos de series animadas inspiradas en líneas de juguetes
    </p>
    <!--
    <img
      class="referencias"
      src="/images/referencias.svg"
      width="490"
      alt="anillos"
    />
    -->
  </div>

    <!-- Conedor de las entidades 
    <div class="container">
      

      {#each atletas as atleta}
        <div class="person-container">
          <div
            class="person"
            style="
              border-color: {colorContinentes(atleta.continent)};
              background-color:{colorGenero(atleta.gender)}; 
              width: {diamMedallas(atleta.medallas)}px; 
              height: {diamMedallas(atleta.medallas)}px; 
              border-width: {grosorPartic(atleta.participations)}px; 
            ">
          </div>
        </div>
      {/each}
     Fin iteración 

    </div>-->
    <div id="guia-container">
      <img src="/images/nube.svg" class="fondo-nube" alt=""/>
      <button class="guia-button" on:click={abrirPopup}>
        <p>Guía de visualización</p>
      </button>
    </div>
    <div class="gatos-visualizacion">
    <Gatos series={series} />
    </div>
<input type="checkbox" id="down" />
  <div class="seccion4" >
      {#if $gatoEspecifico !== undefined && series[$gatoEspecifico]}
        
          <CuadroGato />
        
                  <div class="cuadro-texto"> 
            <h2>¡{series[$gatoEspecifico].Nombre} podría ser tu próximo amigo de peluche!</h2>
            <p>Esta serie es <strong>{series[$gatoEspecifico].Tipo.toLowerCase()}</strong> y tiene <strong>{series[$gatoEspecifico].Duracion}</strong> episodios en total.</p>
            <p>Tiene un puntaje de <strong>{series[$gatoEspecifico].Rating}</strong> en IMBD y recaudó <strong>{series[$gatoEspecifico].Ventas.toLocaleString()}</strong> millones de dólares en ventas de juguetes. ¡Un montón!</p>
            <p>¿No te gustaría abrazar a <strong>{series[$gatoEspecifico].Nombre}</strong>?</p>
          </div>

      {/if}
      <label for="down"></label>
      

  </div>
</main>

<style>
  #down {
  display: none;
}

#down:checked ~ * .seccion4 {
  visibility: visible;
}
  main {
    width: 100%;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 80px;
  }
  .headline {
    font-size: 40px;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
    margin: 20px;
  }
  .bajada {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin: 10px;
  }
  .headline b {
    display: block;
  }
  /*
  .container-gato-especifico{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 50;
    flex-wrap: wrap;
   row-gap: 0px;
    column-gap: 50px;
  }
    */
  .gatos-visualizacion{
    background: url("/images/cielo.svg");
    max-width: 3020px;
    background-size: cover;
  }

  .cuadro-gato-especifico {
    max-width: 3020px;
    height: 800;
    display: flex;
  }
  .person-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 180px 0 0;
  }
  .person {
    width: 100px;
    height: 100px;
    border: 10px solid black;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: pink;
  }
  .nombre {
    font-size: 13px;
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;
    margin: 0;
    margin-top: 8px;
  }
  .referencias {
    margin-top: 50px;
    margin-bottom: 20px;
  }
  .fondo-nube {
    height: 200px;
    position: absolute;
    align-self: center;
    top: 6%;
    transform: translate(-4%, -25%);
    z-index: 0;
  }

  @keyframes flotar {
    0%, 100% {transform: translate(0%, -40%);}
    50% {transform: translate(0%, -20%);}
  }
  #guia-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 900px;
    gap: 30px;
    margin-bottom: 100px;
    flex-wrap: wrap;
    animation: flotar 2s ease-in-out infinite;
  }
  #guia-container:hover {

     animation-play-state: paused;
  }
  .guia-button {
    text-align: center;
    font-size: 1em;
    color: #3c3c3c;
    width: 300px;
    font-size: 18px;
    user-select: none;
    z-index: 50;
    transform: translateY(50%);
  }

  button {
    text-align: center;
    background-color: unset;
    font-size: 1em;
    color: #3c3c3c;
    width: 300px;
    font-size: 18px;
    user-select: none;
  }
  button:hover {
    opacity: 0.5;
    
  }
  .guia-visualizacion {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    padding: 20px;
    background: antiquewhite;
    z-index: 200;
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("/images/border.svg") 10 10 10 10 stretch stretch;
  }
  .hidden {
    display: none;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: #3c3c3c;
  }
  .guia-box {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .gatitoImg {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
  }
  .gatito-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gatito-colores {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .circulo-color {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
  
  .seccion4 {
 
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin-top: 100px;
 
   
    background-color: aqua;
   /* background-image: url("/images/fondo-colina.png");*/
    
  }
  .cuadro-texto {
    width: 400px;
    align-items: center;
    margin: auto;
  }
  .btn-arriba {
    position: absolute;
    z-index: 1000;
    background-color: #000;
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s;
  }
.btn-arriba:hover {
  opacity: 1;
}

</style>
