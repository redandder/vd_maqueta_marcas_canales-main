<script>
  import {createEventDispatcher} from "svelte";
  export let tipo;

  const dispatch = createEventDispatcher();

  const opciones = ["Serializada", "Episodica", "Ambas"];
  let index = opciones.indexOf(tipo);

  const cambiar = (dir) => {
    index = (index + dir + opciones.length) % opciones.length;
    tipo = opciones[index];
  };

  const siguiente = () => {
    dispatch("next");
  };
</script>

<div class="selector-tipo">
<div class="botones">
  <button on:click={() => cambiar(-1)}>←</button>
  <span>{tipo}</span>
  <button on:click={() => cambiar(1)}>→</button>
</div>
<button on:click={siguiente}>Siguiente</button>
</div>



<style>
    .selector-tipo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

  .botones {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }

  .circulo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .seleccionado {
    border-color: black;
  }
</style>