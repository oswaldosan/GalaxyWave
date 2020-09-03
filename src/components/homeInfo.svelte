<script context="module">

</script>

<script>
  import { apiUrl } from "./api.js";
  import Bookform from "./bookform.svelte";
  import { onMount } from "svelte";

  let pageType = "homepages/";
  let pageId = "5f46032ebadbc01a37e881cd";

  let fullUrl = $apiUrl + pageType + pageId;
  let data = [];
  let photo = [];
  let photoTwo = [];
  let photo1 = "";
  let photo2 = "";

  onMount(async function () {
    const response = await fetch(fullUrl);
    data = await response.json();
    photo = data.infoPhoto1;
    photo1 = photo.url;

    photoTwo = data.infoPhoto2;
    photo2 = photoTwo.url;
  });
</script>

<style>
  #infosection {
    padding-top: 100px;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    align-items: flex-start;
  }

  .gbtn {
    background: #0171ce;
    border-radius: 4px;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 14px;
    color: white;
    padding: 10px;
    width: 180px;
    text-align: center;
  }

  .multimedia {
    display: inline-block;
    vertical-align: top;
    width: 70%;
    margin-right: -100px;
  }

  .information {
    width: 60%;
    padding: 50px;
    padding-left: 150px;
    padding-top: 70px;
    background-color: white;
    z-index: 1;
  }
  .information h2 {
    font-size: 24px;
    font-weight: 600;
    color: #0d2237;
  }

  .information h1 {
    line-height: 47px;
    font-size: 44px;
    font-weight: 300;
    color: #0d2237;
    margin-bottom: 20px;
    width: 75%;
  }
  .information p {
    font-size: 16px;
    line-height: 25px;
    font-weight: 300;
    color: #0d2237;
    margin-bottom: 20px;
  }

  .video {
    position: relative;
    margin-top: 40px;
    width: 100%;
    height: 420px;
    z-index: 10;
  }
  .photos {
    margin-top: 5px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    align-items: flex-start;
    z-index: 10;
  }

  @media only screen and (max-width: 850px) {
    .photos {
      display: none;
    }
    #infosection {
      padding-top: 20px;
      padding-left: 5%;
      padding-right: 5%;
      display: block;
      align-items: center;
    }
    .multimedia {
      display: block;
      width: 100%;
      margin-right: 0px;
    }

    .information {
      width: 100%;
      padding: 15px;
      padding-left: 15px;
      padding-top: 15px;
      background-color: white;
      z-index: 1;
    }
    .information h1 {
      line-height: 41px;
      font-size: 34px;
      font-weight: 300;
      color: #0d2237;
      margin-bottom: 20px;
      width: 80%;
    }
    .information p {
      font-size: 16px;
      line-height: 25px;
      font-weight: 300;
      color: #0d2237;
      margin-bottom: 20px;
    }

    .video {
      position: relative;
      margin-top: 40px;
      width: 100%;
      height: 280px;
      z-index: 10;
    }
  }
  .headInfo {
    display: flex;
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

{#await data}
  <img src="/img/loading.gif" alt="loading" />
{:then data}
  <div id="infosection">
    <div class="multimedia">
      <div class="video">
        <iframe
          title="video"
          width="100%"
          height="100%"
          src={data.VideoUrl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture"
          allowfullscreen />
      </div>
      <div class="photos">
        <img src={photo1} alt="terminal" width="70%" />

        <img src={photo2} alt="terminal" width="29%" />
      </div>
    </div>
    <div class="information">
      <div class="headInfo">
        <h2>Galaxy Wave</h2>
        <div class="miniBalls">
          <div class="blueBall" />
          <div class="yellowBall" />
        </div>
      </div>
      <h1>{data.mainTitle}</h1>

      <p>
        {@html data.mainDescription}
      </p>

      <div class="gbtn">Book Now</div>
    </div>
  </div>
{/await}
