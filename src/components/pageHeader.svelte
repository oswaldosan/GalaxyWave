<script>
  export let title;
  export let image;
</script>

<style>
  .headercontent {
    margin-top: -120px;
    height: 650px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .titulo {
    text-align: center;
  }

  .titulo h1 {
    position: relative;
    z-index: 9;
    font-size: 58px;
    font-family: "Open Sans";
    font-weight: 800;
    color: #ffffff;
    text-shadow: -3px 3px 3px #00000029;
    text-transform: uppercase;
  }
  .blue {
    position: relative;
    z-index: 2;
    margin-top: -60px;
    width: 100%;
    height: 60px;
    background: linear-gradient(
      174deg,
      rgba(255, 255, 255, 0) 35%,
      rgba(1, 113, 192, 1) 53%,
      rgba(1, 113, 192, 1) 100%
    );
    background-size: cover;
    opacity: 0.6;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  @media only screen and (max-width: 850px) {
    .headercontent {
      margin-top: 0px;
      height: 400px;
      background-size: cover;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .titulo {
      text-align: center;
    }

    .titulo h1 {
      position: relative;
      z-index: 9;
      font-size: 38px;
      font-family: "Open Sans";
      font-weight: 800;
      color: #ffffff;
      text-shadow: -3px 3px 3px #00000029;
      text-transform: uppercase;
    }
  }
</style>

<div class="headercontent" style="background-image: url({image});">
  <div class="titulo">
    <h1>{title}</h1>
    <div class="blue" />
  </div>
</div>
