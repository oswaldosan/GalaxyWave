<script context="module">
  import Carousel from "@beyonk/svelte-carousel";
</script>

<style>
  .slide-content {
    background-color: white;
    padding: 0;
    width: 95%;
    margin: 10px;
  }
  .slide-content .image img {
    width: 100%;
  }

  .bodytab {
    padding: 20px;
    text-align: left;
  }

  .bodytab h1 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Open Sans";
    text-align: left;
  }
  .bodytab p {
    font-size: 13px;
    font-weight: 300;
    font-family: "Open Sans";
    text-align: left;
  }
  .control {
    margin-top: -50px;
  }
  .control img {
    width: 70px;
  }
  .backArrow {
    margin-top: -110px;
    margin-left: 50px;
  }
  .nextArrow {
    margin-top: -110px;
    margin-left: -130px;
  }

  @media only screen and (max-width: 750px) {
    .control img {
      width: 30px;
    }
    .backArrow {
      margin-top: -110px;
      margin-left: 10px;
    }
    .nextArrow {
      margin-top: -105px;
      margin-left: -10px;
    }
  }
</style>

<Carousel perPage={{ 800: 3, 750: 1 }} dots={true}>
  <div class="slide-content">
    <div class="image">
      <img src="/img/tabs/todo1.jpg" alt="todo" />
      <div class="bodytab">
        <h1>Swimas with Dolphins</h1>
        <p>
          Become a trainer for a day, working behind the scenes with the experts
          at the roatan institute for marine scienses, for hand interactive
          sessions to initiate trained behaviours
        </p>
      </div>
    </div>
  </div>
  <div class="slide-content">
    <div class="image">
      <img src="/img/tabs/todo1.jpg" alt="todo" />
      <div class="bodytab">
        <h1>Swim with Dolphins</h1>
        <p>
          Becoma a trainer for a day, working behind the scenes with the experts
          at the roatan institute for marine scienses, for hand interactive
          sessions to initiate trained behaviours
        </p>
      </div>
    </div>
  </div>
  <div class="slide-content">
    <div class="image">
      <img src="/img/tabs/todo1.jpg" alt="todo" />
      <div class="bodytab">
        <h1>Swim with Dolphins</h1>
        <p>
          Become a trainer for a day, working behind the scenes with the experts
          at the roatan institute for marine scienses, for hand interactive
          sessions to initiate trained behaviours
        </p>
      </div>
    </div>
  </div>
  <div class="slide-content">
    <div class="image">
      <img src="/img/tabs/todo1.jpg" alt="todo" />
      <div class="bodytab">
        <h1>Swim with Dolphins</h1>
        <p>
          Become a trainer for a day, working behind the scenes with the experts
          at the roatan institute for marine scienses, for hand interactive
          sessions to initiate trained behaviours
        </p>
      </div>
    </div>
  </div>

  <span class="control" slot="left-control">

    <img src="/img/tabs/back.svg" alt="back" class="backArrow" />
  </span>
  <span class="control" slot="right-control">
    <img src="/img/tabs/next.svg" alt="back" class="nextArrow" />
  </span>

</Carousel>
