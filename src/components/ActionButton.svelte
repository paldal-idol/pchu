<script>
    export let title;
    export let className;
</script>

<button class={className} on:click>{title}</button>

<style>
    button{
        background-color: #4B4D7B;
        color: #B9BBEA;
        border: none;
        border-radius: 8px;
        padding: 8px 16px;
        font-size: 16px;
        font-weight: bold;
        width: 240px;
        height: 36px;
    }

    .primary {
        background-color: #333453;
        color: #B9BBEA;
    }

    @media (min-width: 640px) {
		button{
            font-size: 20px;
            width: 400px;
            height: 48px;
		}
	}
</style>