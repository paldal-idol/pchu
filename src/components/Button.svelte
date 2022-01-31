<script>
    export let title;
    export let className;
</script>

<button class={className}>{title}</button>

<style>
    button{
        background-color: #B9BBEA;
        border: none;
        border-radius: 0.2em;
        padding: 0.5em;
    }
    .Small{
		
	}
    .Big{
        width: 20%;
        padding: 0.7em 0.5em;
        align-self: center;
        font-weight: bolder;
        font-size: 2em;
    }
</style>