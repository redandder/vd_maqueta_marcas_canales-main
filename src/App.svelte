<script>
  import * as d3 from "d3"
  import atletas from "/src/data/athletes.csv"
  import series from "/src/data/SeriesYJuguetes.json"
  import Gatos from "/src/gatos.svelte"
  import {llamadoGato, gatoEspecifico} from "/src/store.js"
  import CuadroGato from "/src/CuadroGato.svelte"

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

  document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.guia-button');
  const nube = document.querySelector('.fondo-nube'); // Selecciona directamente la nube

  if (button && nube) {
    button.addEventListener('mouseenter', () => {
      nube.classList.add('nube-escalada');
    });

    button.addEventListener('mouseleave', () => {
      nube.classList.remove('nube-escalada');
    });
  }
});


</script>


<main>
  <div id="overlay" class="hidden">
    <div id="guia-visualizacion" class="guia-visualizacion hidden">
        <div><img src="/images/GuiaVisualCorregida.svg" width="950" alt="anillos" /></div>
    <button class="boton-cerrar-popup" on:click={cerrarPopup}>Cerrar</button>
  </div>
  </div>
  
  <div class="header">
    <p class="bajada">
     Durante décadas, muchas líneas de juguetes dieron origen a series animadas pensadas para promocionarlos. Esta colección recorre esas historias que nacieron del marketing y terminaron marcando infancias.
    </p>
  </div>

  
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
          <img class="fondo-nube-cuadro"
          src="./images/nube.svg"
          alt="">
          <div class="cuadro-texto"> 
            <h2>¿{series[$gatoEspecifico].Nombre} marcó tu infancia?</h2>
            {#if series[$gatoEspecifico].Tipo == "Ambas"}
              <p>Esta serie es tanto <strong>Episódica</strong> como <strong>Serializada</strong> y tiene <strong>{series[$gatoEspecifico].Duracion}</strong> episodios en total.</p>
            {:else}
              <p>Esta serie es <strong>{series[$gatoEspecifico].Tipo.toLowerCase()}</strong> y tiene <strong>{series[$gatoEspecifico].Duracion}</strong> episodios en total.</p>
            {/if}
            <p>Tiene un puntaje de <strong>{series[$gatoEspecifico].Rating}</strong> en IMBD y recaudó <strong>{series[$gatoEspecifico].Ventas.toLocaleString()}</strong> millones de dólares en ventas de juguetes. ¡Un montón!</p>
            <p>¿No te gustaría abrazar a <strong>{series[$gatoEspecifico].Nombre}</strong>?</p>
          </div>

      {/if}
      <label for="down"></label>
      

  </div>
</main>

<style>
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
  .bajada {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin: 50px;
    padding-left: 25%;
    padding-right: 25%;
    margin-top:10px;
  }
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
  .guia-button, .fondo-nube {
    transition: all 0.3s ease; 
  }

  #guia-container:hover .fondo-nube {
    transform: scale(1.1) translate(-4%, -25%);
  }

  #guia-container:hover .guia-button {
    filter: brightness(150%);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    transform: scale(1.05) translateY(50%);
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
    font-size: 22px;
    user-select: none;
    z-index: 50;
    transform: translateY(50%);
    font-family: "Pangolin", cursive;
    border-radius: 25px;
    transform-origin: center center;
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
  .guia-visualizacion {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    padding: 20px;
    background:rgb(255, 255, 255);    
    z-index: 200;
    text-align: center;
    border-radius: 10%;
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
    margin-top: 60px;
    margin-bottom: 50px;
    
  }
  .cuadro-texto {
    display: inline-block;
    align-items: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%;
    padding: 12px 20px;
    box-sizing: content-box;
    background-color: #ffe4f0;
    color: #5b3c40;
    border: 2px solid #ffcce1;
    border-radius: 25px;
    font-size: 22px;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: "Pangolin", cursive;
    text-align: center;
    transition: all 0.3s ease;
    cursor:default;
  }

  .cuadro-texto:hover {
    box-shadow: 0px 0px 20px 10px #fff3f9;
  }
.boton-cerrar-popup {
    margin-top: 20px;
    display: inline-block;
    padding: 14px 28px;
    background-color: #ffe4f0;
    color: #5b3c40;
    border: 2px solid #ffcce1;
    border-radius: 25px;
    font-size: 22px;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: "Pangolin", cursive;
}
.boton-cerrar-popup:hover {
    filter: brightness(150%);
    background-color: #ffd6ec;
    border-color: #ffb6d1;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
}
.fondo-nube-cuadro {
  position: absolute;
  height: 400px;
  bottom: 4%;
  z-index: -60;
  left: 45%;
}

</style>
