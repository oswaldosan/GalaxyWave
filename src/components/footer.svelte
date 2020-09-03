<script context="module">

</script>

<script>
  import Suscribeform from "./suscribeform.svelte";
</script>

<style>
  .footertop {
    background: white url("/img/footertopbg.png") 0% 0% no-repeat padding-box;
    background-size: cover;
    height: 180px;
    width: 100%;
    margin-bottom: -160px;
  }

  .footer {
    position: relative;
    background: transparent url("/img/footerbg.png") 0% 0% no-repeat padding-box;
    background-size: cover;
    height: auto;
    padding: 10px;
  }

  .logofooter {
    position: absolute;
    top: 55px;
    left: 100px;
    width: 160px;
  }
  .footContent {
    text-align: center;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 120px;
    padding-bottom: 90px;
    margin-top: 40px;
  }
  .footCol {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    width: 14%;
    margin: 10px;
  }
  .footCol h1 {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
  }
  .footCol a {
    color: white;
    opacity: 0.6;
    font-weight: 300;
    font-size: 14px;
    font-family: "Open Sans";
  }
  .maillink {
    color: #9aeef9 !important;
    opacity: 0.9;
  }
  .desktopfooter {
    display: block;
  }
  .mobileFooter {
    display: none;
  }

  @media only screen and (max-width: 780px) {
    .desktopfooter {
      display: none;
    }
    .mobileFooter {
      display: block;
    }

    .mobileFooter {
      display: block;
      margin-top: 70px;
      text-align: center;
    }
    .mobileFooter a {
      color: white;
    }

    .logofooter {
      position: absolute;
      top: 35px;
      left: 50%;
      width: 120px;
      margin-left: -60px !important;
    }

    .footer {
      padding: 30px;
    }
  }

  .suscribeForm {
    background-color: white;
  }
</style>

<div class="suscribeForm">
  <Suscribeform />
</div>

<div class="footertop" />
<div class="footer">
  <div class="logofooter">
    <img src="/img/logowhite.svg" alt="Logo UBC" width="100%" />
  </div>

  <div class="mobileFooter">
    <a href="/">Home</a>
    <br />
    <a href="/">Departures</a>
    <br />
    <a href="/">Travle Information</a>
    <br />
    <a href="/">Out Terminals</a>
    <br />
    <a href="/">Schedules & Fares</a>
    <br />
    <a href="/">Destinations</a>
    <br />
    <a href="/">About Us</a>
    <br /><br />
  </div>

  <div class="desktopfooter">
    <div class="footContent">
      <div class="footCol">
        <h1>Departures & Fares</h1>
        <a href="#">Schedule and Fares</a><br />
        <a href="#">Galaxy Travel Policies</a>
      </div>

      <div class="footCol">
        <h1>Travel Information</h1>
        <a>Our Terminals</a>
        <br />
        <a>Group Travel </a><br />
        <a>Travel Dates </a><br />
        <a>Special Travel Needs</a>
        <br />
        <a>FAQ’s</a>
      </div>

      <div class="footCol">
        <h1>Destinations</h1>
        <a href="#">Route Map</a>
        <br />
        <a href="#">Destination La Ceiba</a>
        <br />
        <a href="#">Destination Roatan</a>
      </div>

      <div class="footCol">
        <h1>Deals & Offers</h1>
        <a href="#">Prefered Deals</a><br />
        <a href="#">Hotel Packages</a><br />
        <a href="#">Bunldes & Tours</a><br />
        <a href="#">Activities</a><br />
      </div>

      <div class="footCol">
        <h1>Cargo</h1>
        <a href="#">Rates</a><br />
        <a href="#">Pick-up drop-off times</a>
      </div>

      <div class="footCol">
        <h1>About Us</h1>
        <a href="#">Our Story</a><br />
        <a href="#">Our Fleet</a><br />
        <br />
        <a href="#" class="maillink">info@roatanferry.com</a>
        <br />
        <a href="#">Follow us:</a><br />
      </div>
    </div>
  </div>
</div>
