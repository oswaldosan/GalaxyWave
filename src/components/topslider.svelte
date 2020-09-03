<script context="module">
  import { fade } from "svelte/transition";
</script>

<script>
  import { apiUrl } from "./api.js";
  import LoadingGif from "./loadingGif.svelte";

  let pageType = "home-slides/";
  //let pageId = "5f46032ebadbc01a37e881cd";

  let fullUrl = $apiUrl + pageType;
  let slides = [];
  let response = [];

  async function getPageInfo() {
    try {
      if (process.browser) response = await fetch(fullUrl);
      slides = await response.json();
      return slides;
    } catch (error) {
      console.error(error);
    }
  }
  let promise = getPageInfo();
</script>

<style>
  a:hover {
    text-decoration: none;
  }

  .container-fluid {
    padding: 0;
    margin-top: -120px;
  }
  .promotionText {
    color: white;
    font-family: "Open Sans";
    position: absolute;
    top: 380px;
    left: 220px;
    width: 700px;
    text-align: left;
    text-shadow: 0px 6px 6px #00000029;
  }
  .promotionText h2 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 50px;
    line-height: 50px;
    margin-top: 0px;
    margin-bottom: 5px;
    font-family: "Open Sans";
    text-shadow: 0px 6px 6px #00000029;
  }
  .promotionText p {
    font-weight: 300;
    text-transform: uppercase;
    text-align: left;
    font-size: 30px;
    line-height: 35px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: "Open Sans";
    text-shadow: 0px 6px 6px #00000029;
  }

  .promotionText .offerbtn {
    border-radius: 4px;
    background-color: #edca48;
    text-align: center;
    color: #122236;
    font-weight: 700;
    text-transform: capitalize;
    padding: 5px;
    width: 300px;
    font-size: 14px;
    line-height: 25px;
    margin-top: 10px;
    margin-bottom: 0;
    font-family: "Open Sans";
  }
  .sliderPrincipal {
    height: 20%;
    overflow: hidden;
  }
  .sliderPrincipal .carousel-indicators {
    display: none !important;
  }

  @media only screen and (max-width: 850px) {
    .container-fluid {
      padding: 0;
      margin-top: 0px;
    }
    .sliderPrincipal {
      height: 70%;
      width: 100%;
      overflow: hidden;
    }
  }
</style>

{#await promise}
  <LoadingGif />
{:then slides}
  <div class="container-fluid sliderPrincipal" in:fade={{ duration: 500 }}>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
      </ol>
      <div class="carousel-inner">
        {#each slides as slide}
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={slide.imagen.url}
              alt="First slide" />
            <div class="promotionText" in:fade={{ duration: 500 }}>
              <p>{slide.litleText}</p>
              <h2>{slide.BigText}</h2>

              <a href="https://obe.roatanferry.com/">
                <div class="offerbtn">{slide.btnText}</div>
              </a>
            </div>
          </div>
        {/each}
      </div>

      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
{/await}
