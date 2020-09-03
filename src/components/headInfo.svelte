<script>
  export let tag;
</script>

<style>
  .headInfo {
    display: flex;
  }
  .headInfo h2 {
    font-size: 24px;
    font-weight: 600;
    color: #0d2237;
  }

  .miniBalls {
    margin-left: 10px;
    padding-top: 2px;
  }
  .blueBall {
    display: inline-block;
    background-color: #0171ce;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .yellowBall {
    display: inline-block;
    background-color: #f4c915;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: -6px;
  }
</style>

<div class="headInfo">
  <h2>{tag}</h2>
  <div class="miniBalls">
    <div class="blueBall" />
    <div class="yellowBall" />
  </div>
</div>
