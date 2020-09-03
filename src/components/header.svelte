<script context="module">
  import { bind } from "svelte/internal";
  import { beforeUpdate, afterUpdate } from "svelte";
  import { fade, fly } from "svelte/transition";
</script>

<script>
  let active = true;
  let title1 = false;
  let title2 = false;
  let title3 = false;
  let title4 = false;

  function SetActive() {
    active = !active;
  }

  function cerrarMenu() {
    active = !active;
  }

  function SetVisible1() {
    title1 = !title1;
    title2 = false;
  }

  function SetVisible2() {
    title2 = !title2;
    title1 = false;
  }
</script>

<style>
  .container-fluid {
    padding: 0;
  }
  .headerMain {
    z-index: 99999;
    position: relative;
    padding: 0px;
    height: 120px;
    width: 480px;
    background: #004b89d6;
  }

  .logo {
    position: absolute;
    width: 180px;
    padding: 10px;
    left: 20%;
    top: 15px;
  }

  .menutoggle {
    cursor: pointer;
    position: absolute;
    left: 380px;
    top: 50px;
    width: 22px;
    z-index: 999999;
  }

  .menutoggle .barra1 {
    cursor: pointer;
    width: 100%;
    height: 3px;
    background-color: #fff;
    margin-bottom: 4px;
  }
  .menutoggle .barra3 {
    cursor: pointer;
    width: 100%;
    height: 3px;
    background-color: #fff;
    margin-bottom: 4px;
  }

  .toggleMenu {
    z-index: 9999999999;
    position: absolute;
    background-color: #004b89ad;
    width: 480px;
    height: 90%;
    top: 0px;
    left: 0;
    color: white;
    padding: 40px;
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
  }

  .closeMenu {
    background-image: url(/img/close.png);
    background-size: cover;
    cursor: pointer;
    position: absolute;
    left: 380px;
    top: 50px;
    width: 22px;
    height: 22px;
    z-index: 999999;
  }
  .sec {
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 100px;
  }
  .linkcontainer {
    margin-top: 15px;
  }

  .linkTitle {
    font-family: "Open Sans";
    font-size: 24px;
    margin-bottom: 5px;
    cursor: pointer;
    background-image: url(/img/rightArrow.png);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 24px;
  }

  .active {
    background-image: url(/img/downArrow.png);
    color: #f4c915;
  }

  .menuChilds {
    margin-bottom: 5px;
  }

  .menuChilds a {
    color: #c4ccd5;
    font-family: "Open Sans";
    font-size: 19px;
    line-height: 34px;
    text-decoration: none;
    transition: all 0.5s ease;
  }
  .menuChilds a:hover {
    color: #fff;
  }
  .menuOverlay {
    z-index: 8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 850px) {
    .menulinks {
      display: none;
    }

    .headerMain {
      z-index: 99999;
      position: relative;
      padding: 5px;
      height: 80px;
      width: 100%;
      background: #004b89ed;
    }

    .logo {
      position: absolute;
      width: 130px;
      padding: 10px;
      left: 10px;
      top: 10px;
    }

    .menutoggle {
      cursor: pointer;
      position: absolute;
      left: 87%;
      top: 35px;
      width: 22px;
      z-index: 999999;
    }
    .toggleMenu {
      z-index: 9999999999;
      position: absolute;
      background-color: #004b89ad;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0;
      color: white;
      padding: 40px;
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);
    }

    .closeMenu {
      background-image: url(/img/close.png);
      background-size: cover;
      cursor: pointer;
      position: absolute;
      left: 87%;
      top: 50px;
      width: 22px;
      height: 22px;
      z-index: 999999;
    }
  }
</style>

<div class="container-fluid blueHead">
  <div class="menutoggle" on:click={SetActive}>
    <div class="barra1" />
    <div class="barra1" />
    <div class="barra3" />
  </div>

  <div class="headerMain">
    <div class="logo">
      <a href="/">
        <img src="/img/logowhite.svg" alt="Logo Galaxy Wave" with="100%" /></a>
    </div>
  </div>

  {#if active}
    <div />
  {:else}
    <div class="menuOverlay" transition:fade={{ duration: 600 }} />
    <div class="toggleMenu" transition:fly={{ y: 0, duration: 600 }}>
      <div class="logo">
        <a href="/"><img
            src="/img/logowhite.svg"
            alt="Logo Galaxy Wave"
            with="100%" /></a>
      </div>
      <div class="closeMenu" on:click={cerrarMenu} />

      <div class="sec">sections</div>
      <div class="menuContainer">
        <div class="linkcontainer">
          <div
            class="linkTitle {title1 === true ? 'active' : ''}"
            id="menuTitle"
            on:click={SetVisible1}>
            Departures & Fares
          </div>
          {#if title1}
            <div
              class="menuChilds"
              in:fly={{ y: 00, duration: 2000 }}
              out:fade={{ duration: 200 }}>
              <a href="/schedule-fares">Schedule & fares</a>
              <br />
              <a href="#">Group Travels</a>
              <br />
              <a href="#">Travel Dates</a>
              <br />
              <a href="#">Special Travel Needs</a>
              <br />
              <a href="#">Travel FAQs</a>
              <br />
            </div>
          {/if}

          <div
            class="linkTitle {title2 === true ? 'active' : ''}"
            id="menuTitle"
            on:click={SetVisible2}>
            Departures & Fares
          </div>
          {#if title2}
            <div
              class="menuChilds"
              in:fly={{ y: 0, duration: 2000 }}
              out:fade={{ duration: 200 }}>
              <a href="#">Our Terminals</a>
              <br />
              <a href="#">Group Travels</a>
              <br />
              <a href="#">Travel Dates</a>
              <br />
              <a href="#">Special Travel Needs</a>
              <br />
              <a href="#">Travel FAQs</a>
              <br />
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
