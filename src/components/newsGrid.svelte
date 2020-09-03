<script context="module">

</script>

<script>
  import Footer from "./footer.svelte";
</script>

<style>
  .newsSection {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
  }

  .newsSection a {
    color: #191919;
    font-weight: 600;
    background-image: url(/img/arrow.svg);
    background-repeat: no-repeat;
    background-position: center right;
    padding-right: 25px;
    background-size: contain;
    margin-top: 10px;
  }
  .littleNews {
    vertical-align: top;
    padding: 0 !important;
  }

  .bigNews {
    vertical-align: top;
    border-radius: 4px;
    margin-right: 10px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dedede;
    border-radius: 4px;
    transition: all 0.5s ease;
  }
  .bigNews:hover {
    box-shadow: 0px 8px 12px #00000019;
  }

  .newsBody {
    background-color: #fff;
    padding: 25px;
  }
  .newsBody h1 {
    color: #0d2237;
    font-size: 24px;
    font-weight: 600;
  }
  .col-sm {
    padding: 0;
  }
  .newsBody p {
    width: 85%;
    color: #0d2237;
    font-size: 15px;
    font-weight: 300;
  }

  .littleNew {
    margin-bottom: 10px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dedede;
    border-radius: 4px;
    padding: 6%;
    transition: all 0.5s ease;
  }

  .littleNew:hover {
    box-shadow: 0px 8px 12px #00000019;
  }
  .lastNew {
    margin-bottom: 0 !important;
  }
  .littleNew h1 {
    color: #0d2237;
    font-size: 23px;
    font-weight: 600;
  }
  .littleNew p {
    color: #0d2237;
    font-size: 15px;
    font-weight: 300;
  }

  .bigNews .photo img {
    width: 100%;
  }

  @media only screen and (max-width: 850px) {
    .newsSection {
      padding-left: 5%;
      padding-right: 5%;
      display: block;
    }
    .bigNews {
      margin-bottom: 10px;
    }
  }
</style>

<div class="newsSection">
  <div class="bigNews col-sm">
    <div class="photo">
      <img src="/img/homepage/news1.jpg" alt="news 1" />
    </div>
    <div class="newsBody">
      <h1>Book Now and Get the Promotion</h1>
      <p>Offer Valid until May 15, 2020 Lorem ipsum dolore sit amet</p>
      <a href="/book">Book Now</a>
    </div>
  </div>

  <div class="bigNews col-sm">
    <div class="photo">
      <img src="/img/homepage/news2.jpg" alt="news 2" />
    </div>
    <div class="newsBody">
      <h1>Book Now and Get the Promotion</h1>
      <p>Offer Valid until May 15, 2020 Lorem ipsum dolore sit amet</p>
      <a href="/book">Book Now</a>
    </div>
  </div>

  <div class="littleNews col-sm">
    <div class="littleNew">
      <h1>
        <img src="/img/homepage/schedule.svg" alt="schedule" />
        Schedule and fares
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr sadipscing
        elitr...
      </p>
      <a href="/">Learn More</a>
    </div>

    <div class="littleNew">
      <h1>
        <img src="/img/homepage/location.svg" alt="schedule" />
        Directions to the terminal
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr sadipscing
        elitr...
      </p>
      <a href="/">Learn More</a>
    </div>

    <div class="littleNew lastNew">
      <h1>
        <img src="/img/homepage/group.svg" alt="schedule" />
        Group travel
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr sadipscing
        elitr...
      </p>
      <a href="/">Learn More</a>
    </div>
  </div>

</div>
