<script context="module">
  import Carousel from "@beyonk/svelte-carousel";
</script>

<script>
  import { apiUrl } from "./api.js";
  import { onMount } from "svelte";
  import { each } from "svelte/internal";

  let pageType = "Tripadvisor-Reviews/";
  let pageId = "5f46032ebadbc01a37e881cd";

  let fullUrl = $apiUrl + pageType;
  let reviews = [];

  let review1 = {};
  let review2 = {};
  let review3 = {};
  let review4 = {};
  let review5 = {};
  let review6 = {};
  onMount(async function () {
    const response = await fetch(fullUrl);
    reviews = await response.json();

    review1 = reviews[0];
    review2 = reviews[1];
    review3 = reviews[2];
    review4 = reviews[3];
    review5 = reviews[4];
    review6 = reviews[5];
  });

  onMount(() => {
    window.$(".tipad").slick({
      arrows: false,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });

    window.$(".left").click(function () {
      window.$(".tipad").slick("slickPrev");
    });

    window.$(".right").click(function () {
      window.$(".tipad").slick("slickNext");
    });
  });
</script>

<style>
  .reviewsContentfull {
    position: relative;
  }
  .eachReview {
    text-align: left;
    display: inline-grid;
    width: 24%;
    padding: 20px;
  }

  .eachReview h1 {
    color: #0d2237;
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 600;
  }

  .eachReview .text {
    color: #0d2237;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 300;
  }

  .left {
    cursor: pointer;
    position: absolute;
    left: -7%;
    top: 60px;
  }

  .right {
    cursor: pointer;
    position: absolute;
    right: -6%;
    top: 60px;
  }

  .left img {
    width: 100%;
  }
  .right img {
    width: 100%;
  }

  @media only screen and (max-width: 850px) {
    .eachReview {
      text-align: left;
      display: inline-grid;
      width: 95%;
      padding: 20px;
    }

    .eachReview h1 {
      color: #0d2237;
      font-family: "Open Sans";
      font-size: 20px;
      font-weight: 600;
    }
    .left {
      width: 50px;
      cursor: pointer;
      position: absolute;
      left: 30%;
      top: 67%;
    }

    .right {
      width: 50px;
      cursor: pointer;
      position: absolute;
      right: 30%;
      top: 67%;
    }
  }

  .fullStars {
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .reviewFoot {
    color: #0d2237;
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 12px;
  }
  .reviewFoot span {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 12px;
  }
  .viewBtn {
    width: 250px;
    background-color: #0171ce;
    color: white;
    font-weight: 600;
    margin: 0 auto;
    margin-top: 50px;
    padding: 7px;
    border-radius: 4px;
  }
</style>

{#await reviews}
  <img src="/img/loading.gif" alt="loading" />
{:then reviews}
  <div class="reviewsContentfull">
    <div class="left"><img src="/img/tripback.svg" alt="back" /></div>
    <div class="right"><img src="/img/tripnext.svg" alt="next" /></div>
    <div class="tipad">
      <div class="eachReview">
        <h1>{review1.reviewTitle}</h1>
        {#if review1.reviewRate == 4}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {:else if review1.reviewRate == 5}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {/if}
        <p class="text">{review1.reviewText}</p>
        <div class="reviewFoot">
          {review1.reviewUser} wrote a review: <span>{review1.reviewDate}</span>
        </div>
      </div>

      <div class="eachReview">
        <h1>{review2.reviewTitle}</h1>
        {#if review2.reviewRate === 4}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {:else if review2.reviewRate === 5}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {/if}
        <p class="text">{review2.reviewText}</p>
        <div class="reviewFoot">
          {review2.reviewUser} wrote a review: <span>{review2.reviewDate}</span>
        </div>
      </div>

      <div class="eachReview">
        <h1>{review3.reviewTitle}</h1>
        {#if review3.reviewRate == 4}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {:else if review3.reviewRate == 5}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {/if}
        <p class="text">{review3.reviewText}</p>
        <div class="reviewFoot">
          {review3.reviewUser} wrote a review: <span>{review3.reviewDate}</span>
        </div>
      </div>

      <div class="eachReview">
        <h1>{review4.reviewTitle}</h1>
        {#if review4.reviewRate == 4}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {:else if review4.reviewRate == 5}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {/if}
        <p class="text">{review4.reviewText}</p>
        <div class="reviewFoot">
          {review4.reviewUser} wrote a review: <span>{review4.reviewDate}</span>
        </div>
      </div>

      <div class="eachReview">
        <h1>{review5.reviewTitle}</h1>
        {#if review5.reviewRate == 4}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {:else if review5.reviewRate == 5}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {/if}
        <p class="text">{review5.reviewText}</p>
        <div class="reviewFoot">
          {review5.reviewUser} wrote a review: <span>{review5.reviewDate}</span>
        </div>
      </div>

      <div class="eachReview">
        <h1>{review6.reviewTitle}</h1>
        {#if review6.reviewRate == 4}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {:else if review6.reviewRate == 5}
          <div class="fullStars">
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
            <img src="/img/goldstar.svg" alt="full" />
          </div>
        {/if}
        <p class="text">{review6.reviewText}</p>
        <div class="reviewFoot">
          {review6.reviewUser} wrote a review: <span>{review6.reviewDate}</span>
        </div>
      </div>
    </div>
    <br />
    <a
      href="https://www.tripadvisor.com/Attraction_Review-g292019-d10843034-Reviews-Galaxy_Wave-Roatan_Bay_Islands.html"><div
        class="viewBtn">
        View All Reviews
      </div>
    </a>
  </div>
{/await}
