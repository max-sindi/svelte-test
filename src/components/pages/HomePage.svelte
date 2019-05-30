<script>
  import {isLoggedIn, user} from '../../store/auth'
  import {Link} from 'svelte-routing'
  import AuthPage from './AuthPage.svelte';

  import JSONFormatter from 'json-formatter-js'

  function setLoginAsTrue() {
    isLoggedIn.set(true)
  }

  function setLoginAsFalse() {
    isLoggedIn.set(false);
  }

</script>

<style>
.wrapper {
  padding: 30px;
  margin-bottom: 57px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  margin-bottom: 25px;
}

</style>

<div class="wrapper">
  <div class="title">
    Home Page
  </div>
  <!-- {#if !$isLoggedIn}
    <Link to="/auth">
      To auth
    </Link>
   {/if} -->

   {#if !$isLoggedIn}
   <AuthPage></AuthPage>
   {/if}

    <button on:click={setLoginAsTrue}>Set login to true</button>
   <!-- {#if !$isLoggedIn} -->
    <button on:click={setLoginAsFalse}>Set login to false</button>

  <div>logged: {$isLoggedIn}</div>
  <div>user: {@html JSON.stringify(new JSONFormatter( $user).render())}</div>
</div>
