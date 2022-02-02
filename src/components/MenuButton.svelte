<script>
  export let title;
  export let category;
  export let handleChangeCategory;
</script>

<button class={title === category ? "selected" : ""} on:click={handleChangeCategory(title)}>{title}</button>

<style>
  button {
    background-color: #4b4d7b;
    color: #b9bbea;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 16px;
  }

  .selected {
    background-color: #b9bbea;
    color: #4b4d7b;
  }
</style>
