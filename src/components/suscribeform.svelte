<script context="module">
  import { onMount } from "svelte";

  let name = "";
  let email = "";
  let sended = false;

  async function handleSubmit(event) {
    const formElement = document.querySelector("#formulario");
    const data = new URLSearchParams(new FormData(formElement));
    event.preventDefault();

    const response = await fetch("http://localhost:4000/send", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: data,
    });
    sended = true;
    let name = "";
    let email = "";
    formElement.reset();
  }
  /*

  fetch("http://example.com/api/endpoint/", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      name: myName,
      password: myPassword
    })
  })
  .then( (response) => { 
     //do something awesome that makes the world a better place
  });

fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            name: "John",
            email: "john@example.com"
        }
    })
});*/
</script>

<script>
  import { query_selector_all } from "svelte/internal";
</script>

<style>
  .footerForm {
    text-align: center;
    background-image: url(/img/roundbg.svg);
    background-position: bottom left;
    background-repeat: no-repeat;
    margin-bottom: -50px;
    background-size: 400px;
    padding-top: 110px;
    padding-bottom: 150px;
  }

  .inputFooter {
    width: 300px;
    margin: 0 auto;
    display: inline-block;
    vertical-align: top;
    margin-left: 7px;
    margin-right: 7px;
  }

  .formSubmit {
    background-color: #0171ce;
    width: 200px;
    padding: 10px;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 4px;
    margin-top: 25px;
  }

  .footerForm p {
    opacity: 0.6;
    width: 750px;
    font-size: 12px;
    color: #0d2237;
    font-weight: 300;
    font-family: "Open Sans";
    margin: 0 auto;
    text-align: left;
  }
  .footerForm h1 {
    font-size: 44px;
    color: #0d2237;
    font-weight: 300;
    font-family: "Open Sans";
  }
  .footerForm h2 {
    font-size: 19px;
    color: #0d2237;
    font-weight: 600;
    font-family: "Open Sans";
  }

  .inputFooter label {
    width: 100%;
    text-align: left;
    font-size: 12px;
    font-weight: 300;
  }
  .suscribeInput {
    width: 100%;
    background: #f1f1f1 0% 0% no-repeat padding-box;
    border: none;
    height: 40px;
    padding: 10px;
  }

  #confirmedSubs {
    display: none;
    position: fixed;
  }

  @media only screen and (max-width: 750px) {
    .footerForm p {
      opacity: 0.6;
      width: 70%;
      margin: 0 auto;
    }
  }
</style>

<div id="confirmedSubs">
  <h1>Thanks for subscribing</h1>
  <p>You will receive our best deals on your email</p>

  <button>OK</button>
</div>

<div class="footerForm">

  <h1>Save Time, save money!</h1>
  <h2>Sign up and we’ll send the best deals to you</h2>
  <br />

  <form id="formulario">
    <div class="inputFooter">
      <label for="name">Name</label>
      <input
        type="text"
        placeholder="Insert Name"
        name="name"
        bind:value={name}
        class="suscribeInput" />
    </div>

    <div class="inputFooter">
      <label for="email">Email</label>
      <input
        type="text"
        placeholder="e-mail"
        name="email"
        bind:value={email}
        class="suscribeInput" />
    </div>
    <br />
    <input
      type="submit"
      value="Suscribe"
      on:click={handleSubmit}
      class="formSubmit" />
  </form>
  <br />
  <p>
    PRIVACY POLICY Galaxy Wave will use the information you provide on this form
    to stay in touch with you. We will treat your information with
    confidentiality and will not share it with others. By clicking below, you
    agree that we may process your information in accordance with these terms.
  </p>
</div>
