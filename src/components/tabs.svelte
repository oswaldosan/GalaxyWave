<script context="module">
  import Carousel from "@beyonk/svelte-carousel";
  import CarouselFull from "./carouselFull.svelte";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
</script>

<script>
  import CarouselHotels from "./carouselHotels.svelte";

  let activeAttractions = true;
  let activeHotels = true;

  function handleResize() {
    activeHotels = true;
    activeAttractions = true;
    console.log("tee");
    setTimeout(greet, 300);
  }

  function greet() {
    activeHotels = false;
  }

  onMount(() => {
    activeHotels = false;
  }, 1000);

  function showAttractions() {
    activeAttractions = true;
    activeHotels = false;
  }

  function showHotels() {
    activeAttractions = false;
    activeHotels = true;
  }
</script>

<style>
  .tabsCont {
    padding-top: 130px;
    font-family: "Open Sans";
  }

  .tabsCont h1 {
    text-align: center;
    font-size: 45px;
    font-weight: 600;
    color: #0d2237;
    text-transform: uppercase;
    text-align: center;
  }
  .tabsCont h3 {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 4.2px;
    color: #0d2237;
  }
  #tabsBtns {
    background: #d0d0d0;
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    width: 180px;
    margin: 0 auto;
    font-family: "Open Sans";
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.36px;
    color: #000000;
    cursor: pointer;
  }
  .tabsContainer {
    text-align: center;
  }

  .tabActive {
    background-color: #eff2f6 !important;
  }
  .contentTabs {
    background: transparent linear-gradient(180deg, #eef2f6 0%, #fafafa 100%) 0%
      0% no-repeat padding-box;
    padding: 30px;
    text-align: center;
  }

  #attractionsContent {
    display: none;
  }

  #hotelsContent {
    display: none;
  }

  #transportContent {
    display: none;
  }

  .carouselContent {
    display: block;
  }

  .showw {
    display: inline !important;
  }

  .gbtn {
    background: #0171ce;
    border-radius: 4px;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 14px;
    color: white;
    padding: 10px;
    width: 240px;
    margin: 0 auto;
    text-align: center;
  }

  @media only screen and (max-width: 850px) {
    #tabsBtns {
      background: #d0d0d0;
      padding: 10px;
      display: inline-block;
      vertical-align: top;
      width: 115px;
      margin: 0 auto;
      font-family: "Open Sans";
      font-weight: 500;
      font-size: 11px;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.36px;
      color: #000000;
      cursor: pointer;
    }
  }
</style>

<svelte:window on:resize={handleResize} />

<div class="tabsCont">
  <h1>Things to do in roatan</h1>
  <h3>Travel with us and explore the best of roatan</h3>
  <br />

  <div class="tabsContainer">
    <div
      id="tabsBtns"
      class:tabActive={activeAttractions === false}
      on:click={showHotels}>
      Hotels
    </div>
    <div
      id="tabsBtns"
      class:tabActive={activeHotels === false}
      on:click={showAttractions}>
      Attractions
    </div>
    <div id="tabsBtns" class="">Transportation</div>
  </div>
  <div class="contentTabs">
    <div id="attractionsContent" class:showw={activeAttractions === true}>
      <div class="carouselContent">
        <CarouselFull />
      </div>
    </div>

    <div id="hotelsContent" class:showw={activeHotels === true}>
      <div class="carouselContent">

        <CarouselHotels />
      </div>
    </div>

    <div id="transportContent" class:showw={activeHotels === true}>
      <div class="carouselContent" />
    </div>

  </div>

  <div class="gbtn">View All Attractions</div>
  <br />

</div>
