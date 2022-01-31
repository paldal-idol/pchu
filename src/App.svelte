<script lang="js">
	import ActionButton from "./components/ActionButton.svelte";
	import MenuButton from "./components/MenuButton.svelte";

	let image = 'img/main.png';
	const options = [{title:'github'},{title:'cat'},{title:'woman'},{title:'man'},{title:'pig'},{title:'flower'}];
</script>

<main>
	<div class="Container">
		<h1>pchu</h1>
		<div class="Options">
			{#each options as option}
				<MenuButton title={option.title} />
			{/each}
		</div>
		<img src={image} alt={'main image'}/>
		<ActionButton title={'Generate'} className={'primary'} />
		<ActionButton title={'Download'} />
	</div>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}
	img{
		margin: 1em;
		width: 240px;
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