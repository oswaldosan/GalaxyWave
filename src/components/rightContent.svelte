<script>
  import HeadInfo from "./headInfo.svelte";

  export let title;
  export let image;
  export let content;
</script>

<style>
  .contentright {
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 140px;
    padding-right: 140px;
    background-color: #fafafa;
    display: flex;
  }
  .featuredImg {
    width: 55%;
  }

  .informationContent {
    margin-left: 20px;
    width: 41%;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-family: "Open Sans";
  }

  .informationContent p {
    color: #204264;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
  }

  .informationContent h1 {
    color: #0d2237;
    font-weight: 400;
    font-size: 37px;
    line-height: 45px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 850px) {
    .contentright {
      padding-top: 40px;
      padding-bottom: 40px;
      padding-left: 10px;
      padding-right: 10px;
      background-color: #fafafa;
      display: flex;
      flex-flow: column;
    }
    .featuredImg {
      width: 100%;
      order: 2;
    }

    .informationContent {
      order: 1;
      margin-left: 0px;
      width: 100%;
      padding-top: 10px;
      padding-left: 30px;
      padding-right: 30px;
      font-family: "Open Sans";
    }
  }
</style>

<div class="contentright">
  <div class="featuredImg"><img src={image} alt={title} width="100%" /></div>

  <div class="informationContent">
    <HeadInfo tag="Galaxy Wave" />
    <h1>{title}</h1>
    <p>
      {@html content}
    </p>
  </div>
</div>
