<script context="module">

</script>

<script>
  import { apiUrl } from "./api.js";
  import CarouselTrip from "./carouselTrip.svelte";
</script>

<style>
  .reviewContainer {
    margin-top: 120px;
    position: relative;
    background-color: #eef2f6;
    padding-top: 120px;
    padding-bottom: 60px;
    padding-left: 130px;
    padding-right: 130px;
    text-align: center;
  }
  .triplogo {
    position: absolute;
    top: -80px;
    left: 50%;
    margin-left: -100px !important;
    width: 200px;
  }
  .triplogo img {
    width: 100%;
  }

  @media only screen and (max-width: 850px) {
    .reviewContainer {
      margin-top: 120px;
      position: relative;
      background-color: #eef2f6;
      padding-top: 50px;
      padding-bottom: 50px;
      padding-left: 5px;
      padding-right: 5px;
      text-align: center;
    }
    .triplogo {
      position: absolute;
      top: -80px;
      left: 50%;
      margin-left: -75px !important;
      width: 150px;
    }
  }
</style>

<div class="reviewContainer">
  <div class="triplogo"><img src="/img/trip.png" alt="tripadvisor" /></div>

  <CarouselTrip />
</div>
