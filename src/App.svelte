<script lang="js">
	let image = 'img/main.png';
	import Button from './components/Button.svelte';
	const options = [{title:'github'},{title:'cat'},{title:'woman'},{title:'man'},{title:'pig'},{title:'flower'}];
</script>

<main>
	<div class="Container">
		<h1>pchu</h1>
		<div class="Options">
			{#each options as option}
				<Button title={option.title} className={'Small'}/>
			{/each}
		</div>
		<img src={image} alt={'main image'}/>
		<Button title={'Generate'} className={'Big'}/>
		<Button title={'Download'} className={'Big'}/>
	</div>
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}
	.Container{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	img{
		margin: 1em;
		width: 30%;
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
		column-gap: 0.3em;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>