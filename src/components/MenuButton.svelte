<script>
    export let title;
    export let category;
    export let handleChangeCategory;
</script>

<button class={title===category?'selected':''} on:click={handleChangeCategory(title)}>{title}</button>

<style>
    button{
        background-color: #4B4D7B;
        color: #B9BBEA;
        border: none;
        border-radius: 8px;
        padding: 8px 16px;
        font-size: 16px;
    }

    .selected {
        background-color: #B9BBEA;
        color: #4B4D7B;
    }
</style>