<script lang="js">
  	import Painter from './components/Painter.svelte';
	import ActionButton from "./components/ActionButton.svelte";
	import MenuButton from "./components/MenuButton.svelte";
	
	let profileImage;
	let category = 'flower';
	const options = [{title:'github'},{title:'cat'},{title:'woman'},{title:'man'},{title:'pig'},{title:'flower'}];
	function handleChangeCategory(value)
	{
		category = value;
	}
	function setCanvas(event) {
		profileImage = event.detail.ref;
	}
	function downloadImage() {
		const dataURL = profileImage.toDataURL("image/png");
		let aTag = document.createElement('a');
		aTag.download = category + '.png';
		aTag.href = dataURL;
		aTag.click();
	}
</script>

<main>
	<div class="Container">
		<h1>pchu</h1>
		<div class="Options">
			{#each options as option}
				<MenuButton title={option.title} {handleChangeCategory} {category}/>
			{/each}
		</div>
    	<div class="Canvas">
			<Painter {category} on:canvas={setCanvas} />
		</div>
		<ActionButton title={'Generate'} className={'primary'} />
		<ActionButton title={'Download'} on:click={downloadImage} />
	</div>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}
	.Container{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.Canvas{
		margin: 1em;
		width: 400px;
		align-self: center;
	}
	h1 {
		color: #ffff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: bold;
	}
	.Options{
		display: flex;
		justify-content: center;
		column-gap: 10px;
		flex-wrap: wrap;
		width: 300px;

	}
	.Container{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
	@media (min-width: 640px) {
		img {
			width: 400px;
		}
		.Options{
			width: 500px;
		}
	}
</style>
