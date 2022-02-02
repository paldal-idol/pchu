<script>
  export let title;
  export let className;
</script>

<button class={className} on:click>{title}</button>

<style>
  button {
    background-color: #4b4d7b;
    color: #b9bbea;
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
    color: #b9bbea;
  }

  @media (min-width: 640px) {
    button {
      font-size: 20px;
      width: 400px;
      height: 48px;
    }
  }
</style>
