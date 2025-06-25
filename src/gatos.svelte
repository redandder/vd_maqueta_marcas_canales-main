<script>
    import * as d3 from "d3"
    export let series= ""
    import Color from "/src/color.svelte"
    import  Mancha from "/src/mancha.svelte"
    import { llamadoGato, gatoEspecifico } from '/src/store.js'
    import { get } from 'svelte/store'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

<<<<<<< HEAD
  
  let arrdos=[]
=======


let arr= [];
>>>>>>> 60e217d5c123093aa6ded18f8cdbd4d4a07fd589
    function manejarClick(i, j) {
      llamadoGato.update(n => n + 1);
      gatoEspecifico.set(i+j*4);
    }

      let mostrarBoton = false;

  function manejarScroll() {
    mostrarBoton = window.scrollY > 400; 
  }

  onMount(() => {
    window.addEventListener('scroll', manejarScroll);
<<<<<<< HEAD
     arrdos = agruparCuatro(series);
=======
    arr = agruparCuatro(series); 
>>>>>>> 60e217d5c123093aa6ded18f8cdbd4d4a07fd589
    return () => window.removeEventListener('scroll', manejarScroll);
  })
let gatos= "series"
  let orden = "orden_rating"
  let filtro = "todas"
	let resaltar = "todas"
  $: seriePelicu = series;
/*
	$: {
		if (gatos== "seriePelicu") {
			seriePelicu = seriePelicu
		} else if (gatos= "peliculas") {
			seriePelicu = peliculas
		}
    
    if (orden == "orden_ventas") {
        seriePelicu = d3.sort(series, s => s.Ventas)
      } else if (orden == "orden_tipo") {
        seriePelicu = d3.sort(series, escena => escena.Tipo)
      }else if (orden == "orden_rating") {
        seriePelicu = d3.sort(series, escena => escena.Rating)
      }

<<<<<<< HEAD
  let gatos= "series"
  let orden = "orden_rating"
  let filtro = "todas"
	let resaltar = "todas"
  $: seriePelicu = series;


=======
      if (filtro != "todas") {
        seriePelicu = series.filter(p => p.Tipo == filtro)
      }
*/

/*
		if (resaltar != "todas") {
			seriePelicu = seriePelicu.map(p => {
				let isHighlight = p.Tipo == resaltar
				return {...p, Highlight: isHighlight}
			})
		}
      */
	
>>>>>>> 60e217d5c123093aa6ded18f8cdbd4d4a07fd589
    let maxRating = d3.max(series, (d) => d.Rating)
    let minRating = d3.min(series, (d) => d.Rating)
    let diamRating = d3.scaleLinear()
        .domain([minRating, maxRating]).range([80, 180])

    let manchaW = d3.scaleLinear()
        .domain([minRating, maxRating]).range([15, 180])
    let manchaH = d3.scaleLinear()
        .domain([minRating, maxRating]).range([15, 180])
    let maxDuracion = d3.max(series, (d) => d.Duracion)
    let colorDuracion = d3.scaleThreshold()
        .domain([ 50, 100, 150,200])
        .range(["#FDF8F2", "#EFCFA9", "#DF9F53", "#AC6C20", "#6C4414"])
        let maxVentas= d3.max(series, (d) => d.Ventas)
    let minVentas = d3.min(series, (d) => d.Ventas)
    let manchaVentas=d3.scaleLinear()
        .domain([minVentas, maxVentas]).range([1, 5])

<<<<<<< HEAD
  function agruparCuatro( lista){
    const filas=[];
     let temp2=[];
  for(let i = 0; i < seriePelicu.length; i++){
            temp2.push(seriePelicu[i]);
      if((i+1) % 4 == 0 || (i + 1) == seriePelicu.length){
        filas.push(temp2);
        temp2=[];
      } 
  }
  return filas;
}

function orderSelection(valorOrden ){
  orden = valorOrden;
        if (orden == "orden_ventas") {
        seriePelicu = d3.sort(series, s => s.Ventas)
        seriePelicu= d3.reverse(seriePelicu)
      } else if (orden == "orden_tipo") {
        seriePelicu = d3.sort(series, escena => escena.Tipo)

      }else if (orden == "orden_rating") {
        seriePelicu = d3.sort(series, escena => escena.Rating)
        seriePelicu= d3.reverse(seriePelicu)
      }
arrdos=agruparCuatro(seriePelicu)
console.log("m", arrdos)
  
}
function filterSelection(valorFilter){
  filtro=valorFilter
    if (filtro != "todas") {
    seriePelicu = series.filter(p => p.Tipo == filtro)
  }else{
    seriePelicu=series
  }
  arrdos=agruparCuatro(seriePelicu)

}


  let arr= [];
  let temp=[];
  for(let i = 0; i < series.length; i++){
            temp.push(series[i]);
      if((i+1) % 4 == 0 || (i + 1) == series.length){
        arr.push(temp);
=======
  
 
  function agruparCuatro( lista){
    const filas=[];
     let temp=[];
  for(let i = 0; i < seriePelicu.length; i++){
            temp.push(seriePelicu[i]);
      if((i+1) % 4 == 0 || (i + 1) == seriePelicu.length){
        filas.push(temp);
>>>>>>> 60e217d5c123093aa6ded18f8cdbd4d4a07fd589
        temp=[];
      } 

  }
<<<<<<< HEAD
 
=======

  return filas;
}

function orderSelection(valorOrden ){
  orden = valorOrden;
        if (orden == "orden_ventas") {
        seriePelicu = d3.sort(series, s => s.Ventas)
        seriePelicu= d3.reverse(seriePelicu)
      } else if (orden == "orden_tipo") {
        seriePelicu = d3.sort(series, escena => escena.Tipo)

      }else if (orden == "orden_rating") {
        seriePelicu = d3.sort(series, escena => escena.Rating)
        seriePelicu= d3.reverse(seriePelicu)
      }
arr=agruparCuatro(seriePelicu)
>>>>>>> 60e217d5c123093aa6ded18f8cdbd4d4a07fd589
  console.log("m", arr)
  
}
function filterSelection(valorFilter){
  filtro=valorFilter
    if (filtro != "todas") {
    seriePelicu = series.filter(p => p.Tipo == filtro)
  }else{
    seriePelicu=series
  }
  arr=agruparCuatro(seriePelicu)

}




</script>
<!--<button on:click={() => gatos = "seriePelicu"} class:active={gatos = "seriePelicu"}>Series</button>
<button on:click={() => gatos = "peliculas"} class:active={gatos = "peliculas"}>Peliculas</button>-->

<h3>Ordenar</h3>
<!--
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<button class="btn">ordenar</button>
<div class="dropdown">
  <button class="btn" style="border-left:1px solid navy">
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>-->
<!-- Cambiamos el valor de la variable orden con el click de los botones -->
<button on:click={() => orderSelection("orden_ventas")} class:active={orden == "orden_ventas"}>Mas ventas</button>
<button on:click={() => orderSelection("orden_tipo")} class:active={orden == "orden_tipo"}>Por tipo</button>
<button on:click={() => orderSelection("orden_rating")} class:active={orden == "orden_rating"}>por rating</button>

<!-- Agregamos reactivamente la clase "actve" de acuerdo al valor de la variable filtro -->
<h3>Filtrar</h3>
<!-- Cambiamos el valor de la variable filtro con el click de los botones -->
<button on:click={() => filterSelection("todas")} class:active={filtro == "todas"}>Todas</button>
<button on:click={() => filterSelection("Ambas")} class:active={filtro == "Ambas"}>Ambas</button>
<button on:click={() => filterSelection("Serializada")} class:active={filtro == "Serializada"}>Serializadas</button>
<button on:click={() => filterSelection("Episodica")} class:active={filtro == "Episodica"}>Episodico</button>

<!-- Agregamos reactivamente la clase "actve" de acuerdo al valor de la variable resaltar 
<h3>Resaltar</h3>
<button on:click={() => resaltar = "todas"} class:active={resaltar == "todas"}>Todas</button>
<button on:click={() => resaltar = "musica"} class:active={resaltar == "musica"}>Música</button>
<button on:click={() => resaltar = "ogro"} class:active={resaltar == "ogro"}>Ogro</button>
<button on:click={() => resaltar = "crossover"} class:active={resaltar == "crossover"}>Crossover</button>-->


<<<<<<< HEAD
=======







>>>>>>> 60e217d5c123093aa6ded18f8cdbd4d4a07fd589
{#if mostrarBoton}
  <button class="volver-a-guia"
          on:click={() => window.scrollTo({ top: document.getElementById("guia-container").offsetTop, behavior: "smooth" })} transition:fade>
    Volver a la guía
  </button>
{/if}
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
<<<<<<< HEAD
.dropdown {
=======
  .dropdown {
>>>>>>> 60e217d5c123093aa6ded18f8cdbd4d4a07fd589
  position: absolute;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.btn:hover, .dropdown:hover .btn  {
  background-color: #0b7dda;
}
  	button {
		cursor: pointer;
	}
	.active {
		color: black;
		background: white;
	}
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
      bottom: -3.5%;
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
    bottom: -4%;  



    

 
 

   

     
  }

  .nombre-container {
    margin-top: 30px;
    text-align: center;
    background-image: url("/images/fondo-sticker.png");
    background-size: 190px;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 16px;
    width: 150px;
    padding: 10px;
    transform: translateY(-20%);
    transition: all 0.3s ease;
    cursor: default;
  }

  .gato-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 176px;
    width: 200px;
    transition: transform 0.4s ease-in-out;
  }
  .gato-interactivo{
    z-index: 900;
    position: absolute;
    opacity: 0;
  }
  @keyframes salto {
    0%   {transform: translateY(0px);}
    15%  {transform: translateY(-20px);}
    30%  {transform: translateY(0px);}
    45%  {transform: translateY(-10px);}
    60%  {transform: translateY(0px);}
    100% {transform: translateY(0px);}
  }


  .person-container, .nombre-container {
    transition: all 0.6s ease; 
  }

  .gato-wrapper:hover  {
    transform: scale(1.1);
  }

  .gato-wrapper:hover .nombre-container {
    transform: translateY(-20%);
  }

  .gato-wrapper:hover .person-container {
    animation: salto 1.4s ease-in-out infinite;
  }
  
  .gato-wrapper:hover {

     animation-play-state: paused;
  }

.volver-a-guia {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 12px 20px;
  z-index: 1000;
  cursor: pointer;

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
.volver-a-guia:hover {
      filter: brightness(150%);
    background-color: #ffd6ec;
    border-color: #ffb6d1;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
}


  </style>