<script context="module">
  import { onMount } from "svelte";
</script>

<script>
  onMount(() => {
    window.$("#datePick").datepicker({
      dateFormat: "mm-dd-yy",
      minDate: new Date(),
      language: "en",
    });
    window.$("#dateOne").datepicker({
      dateFormat: "mm-dd-yy",
      minDate: new Date(),
      language: "en",
    });
  });

  let tab = "round";

  function oneWayTab() {
    tab = "oneWay";
    console.log(tab);
  }

  function roundTab() {
    tab = "round";
    console.log(tab);
  }
</script>

<style>
  .booking {
    position: relative;
    z-index: 5;
    margin-top: -40px !important;
    width: 1150px;
    height: 120px;
    padding: 5px;
    margin: 0 auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 12px #00000015;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  #tabs {
    display: inline-block;
    vertical-align: top;
    font-weight: 600;
    width: 140px;
    padding: 10px;
    height: 50px;
    color: #000;
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: -45px;
    margin-left: -5px;
    border-radius: 4px;
    text-align: center;
    margin-right: 0px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .active {
    padding-top: 15px !important;
    margin-top: -53px !important;
    height: 80px !important;
    color: #0171ce !important;
    background-color: rgba(255, 255, 255, 1) !important;
  }

  #roundContent {
    display: none;
    padding: 5px;
    margin-top: -20px !important;
  }
  #onewayContent {
    display: none;
    padding: 5px;
  }

  .show {
    display: block !important;
  }

  form {
    display: flex;
  }

  .selectContainers {
    width: 100%;
    text-align: center;
  }
  .selectContainers p {
    font-weight: 600;
    text-align: left;
    font-size: 17px;
    margin: 0;
    padding-left: 27px;
  }

  .routeSelect {
    background-image: url(/img/homepage/swap.svg);
    background-repeat: no-repeat;
    background-position: center;
    text-align: left;
    width: 90%;
    padding: 10px;
    font-family: "Open Sans";
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #0171ce;
  }
  .oneWayGo {
    background-image: url(/img/go.png) !important;
    background-size: 26px;
  }

  .datepickers {
    margin-top: 25px;
    border: 1px solid #dedede;
    height: 46px;
    display: inline-block;
    vertical-align: top;
    width: 84%;
    color: #606b78;
    font-weight: 300;
    padding-left: 25px;
  }
  .sidepick {
    margin-top: 25px;
    display: inline-block;
    vertical-align: top;
    width: 14%;
    border: 1px solid #dedede;
    height: 46px;
    padding: 7px;
    margin-right: -5px;
  }
  .sidepick img {
    width: 100%;
  }

  .bookbtn {
    width: 90%;
    background-color: #0171ce;
    margin-top: 25px;
    height: 46px;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 3px;
  }

  #onewayForm {
    margin-top: -20px;
  }

  @media only screen and (max-width: 850px) {
    .booking {
      position: relative;
      z-index: 5;
      margin-top: 50px !important;
      width: 80%;
      height: auto;
      padding: 5px;
      margin: 0 auto;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 10px 12px #00000015;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    form {
      display: block;
    }

    #tabs {
      display: inline-block;
      vertical-align: top;
      font-weight: 600;
      width: 49%;
      padding: 10px;
      height: 50px;
      color: #000;
      background-color: rgba(255, 255, 255, 0.6);
      margin-top: 0px;
      margin-left: 0px;
      border-radius: 4px;
      text-align: center;
      margin-right: 0px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .active {
      padding-top: 15px !important;
      margin-top: -15px !important;
      height: 80px !important;
      color: #0171ce !important;
      background-color: rgba(255, 255, 255, 1) !important;
    }
  }
</style>

<div class="booking">
  <div id="tabs" class:active={tab === 'oneWay'} on:click={oneWayTab}>
    One Way
  </div>
  <div id="tabs" class:active={tab === 'round'} on:click={roundTab}>
    Round Trip
  </div>
  <div id="roundContent" class:show={tab === 'round'}>
    <form id="roundForm">
      <div class="selectContainers">
        <p>Route</p>
        <select name="route" id="route" class="routeSelect">
          <option value="La Ceiba">
            La Ceiba
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Roatan
          </option>
          <option value="Roatan">
            Roatan
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            La Ceiba
          </option>
        </select>
      </div>
      <div class="selectContainers">
        <div class="sidepick">
          <img src="/img/calendar.png" alt="calendar" />
        </div>
        <input
          type="text"
          name="dateArrival"
          id="datePick"
          class="datepickers"
          placeholder="Depart - Return"
          data-range="true"
          data-multiple-dates-separator=" - " />
      </div>
      <div class="selectContainers">
        <div class="sidepick"><img src="/img/guest.png" alt="guest" /></div>
        <input
          type="number"
          name="dateDeparture"
          class="datepickers"
          placeholder="Number of Travelers" />
      </div>
      <div class="selectContainers">
        <button type="submit" class="bookbtn">Book Now</button>
      </div>
    </form>
  </div>

  <div id="onewayContent" class:show={tab === 'oneWay'}>
    <form id="onewayForm">
      <div class="selectContainers">
        <p>Route</p>
        <select name="route" id="route" class="routeSelect oneWayGo">
          <option value="La Ceiba">
            La Ceiba
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Roatan
          </option>
          <option value="Roatan">
            Roatan
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            La Ceiba
          </option>
        </select>
      </div>
      <div class="selectContainers">
        <div class="sidepick">
          <img src="/img/calendar.png" alt="calendar" />
        </div>
        <input
          type="text"
          name="dateDeparture"
          id="dateOne"
          class="datepickers"
          placeholder="Depart" />
      </div>
      <div class="selectContainers">
        <div class="sidepick"><img src="/img/guest.png" alt="guest" /></div>
        <input
          type="number"
          name="dateDeparture"
          class="datepickers"
          placeholder="Number of Travelers" />
      </div>
      <div class="selectContainers">
        <button type="submit" class="bookbtn">Book Now</button>
      </div>
    </form>
  </div>
</div>
