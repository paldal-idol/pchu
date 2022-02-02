<script>
  import { createEventDispatcher, onMount } from "svelte";

  import { Canvas, Layer } from "svelte-canvas";
  import { getRandomColor, object } from "../utils/types";

  export let category;
  export let randomColor;
  const maxWidth = 400;
  const dispatch = createEventDispatcher();
  let canvas;

  onMount(() => {
    const canvasRef = canvas.getCanvas();
    dispatch("canvas", {
      ref: canvasRef
    });
  });

  $: render = ({ context, width, height }) => {
    context.beginPath();
    const len = maxWidth / 16;
    object[category].map((element, index) => {
      context.fillStyle = randomColor[element];
      context.fillRect((index % 16) * len, Math.floor(index / 16) * len, len, len);
    });
    context.fill();
  };
</script>

<Canvas width={maxWidth} height={maxWidth} bind:this={canvas}>
  <Layer {render} />
</Canvas>
