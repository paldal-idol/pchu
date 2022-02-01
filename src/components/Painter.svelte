<script>
	  import { Canvas, Layer } from "svelte-canvas";
    import { Enum, object } from '../utils/types';

    export let category;
    const maxWidth = 400;
    
	$: render = ({ context, width, height }) => {
	  context.beginPath();
    const len = maxWidth/16;
    object[category].map((element,index)=>{
      context.fillStyle = Enum[element];
      context.fillRect(index%16*len,Math.floor(index/16)*len,len,len);
    });
	  context.fill();
	};
  </script>
  
  <Canvas width={maxWidth} height={maxWidth}>
	<Layer {render} />
  </Canvas>
