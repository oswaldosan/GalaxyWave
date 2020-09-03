<script>
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import { onMount } from "svelte";
  import Tabs from "../components/tabs.svelte";
  import Bookform from "../components/bookform.svelte";
  import { fade, fly } from "svelte/transition";

  import { apiUrl } from "../components/api.js";
  import { each } from "svelte/internal";
  import PageHeader from "../components/pageHeader.svelte";
  import LoadingGif from "../components/loadingGif.svelte";
  import RightContent from "../components/rightContent.svelte";

  let pageType = "departures-page/";
  //let pageId = "5f46032ebadbc01a37e881cd";

  let fullUrl = $apiUrl + pageType;
  let pageInfo = {};
  let photo = {};
  let infoPhoto = {};
  let response = {};

  async function getPageInfo() {
    try {
      if (process.browser) response = await fetch(fullUrl);
      pageInfo = await response.json();
      photo = pageInfo.header;
      infoPhoto = pageInfo.infoPhoto;
      return pageInfo;
    } catch (error) {
      console.error(error);
    }
  }
  let promise = getPageInfo();
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

  main {
    font-family: "Open Sans", sans-serif;
    background-color: #fafafa;
    padding: 0;
  }
</style>

<svelte:head>
  <title>Schedules & fares</title>
  <meta
    name="description"
    content="The Galaxy Wave provides ferry service between Roatan, Honduras and
	  the port city of La Ceiba, taking approximately 1 hour and 10 minutes." />
</svelte:head>

<main>
  {#await promise}
    <LoadingGif />
  {:then info}
    <div in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
      <Header />

      <PageHeader title={info.title} image={photo.url} />
      <Bookform />

      <RightContent
        title={info.title}
        image={infoPhoto.url}
        content={info.information} />

      <Footer />
    </div>
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</main>
