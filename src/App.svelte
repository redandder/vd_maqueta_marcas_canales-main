<script>
  import * as d3 from "d3"
  import atletas from "/src/data/athletes.csv"
  import series from "/src/data/SeriesYJuguetes.json"
  import Gatos from "/src/gatos.svelte"

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
  <div class="header-container">
    <div class="header-overlay">
      <h1>hollow knight</h1>
      <p>hollow knight es un videojuego indie en el cual exploras el mundo de hallownest y descubris sus misterios</p>
    </div>
  </div>
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
    <h3 class="headline">
      <b>Series Animadas Basadas en Juguetes</b>

    </h3>
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
    
    <div class="guia-container">
      <button class="guia-button" on:click={abrirPopup}>
        <p>Guía de visualización</p>
      </button>
    </div>

    <Gatos series={series} />
  
  <div class="seccion4">
    <p>hola</p>
  </div>
</main>

<style>
  main {
    width: 100%;
    font-family: 'Short Stack', cursive;
    background-color: antiquewhite;
  }
  .header-container{
    text-align: center;
    width: 100%;
    height: auto;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
    border-radius: 0 0 85% 85% / 30%;
  }
  .header-overlay {
    width: 100%;
    height: 100%;
    padding: 50px;
    background: linear-gradient(135deg, orange 30%, blue);

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
  .container {
    display: flex;
    justify-content: center;
    align-items: end;
    margin: auto;
    flex-wrap: wrap;
    max-width: 1020px;
    gap: 30px;
    margin-bottom: 100px;
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
  .deporte {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
  .referencias {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .guia-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 900px;
    gap: 30px;
    margin-bottom: 100px;
    flex-wrap: wrap;
  }

  .guia-button {
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    background-color: unset;
    font-size: 1em;
    color: #3c3c3c;
    width: 300px;
    font-size: 18px;
    user-select: none;
  }
  button {
    text-align: center;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-image: url("/images/border.svg") 10 10 10 10 stretch stretch;
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
    margin-top: 100px;
    height: 500px;
    width: 100%;
    background-color: aquamarine;
  }
</style>
