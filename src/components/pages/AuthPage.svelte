<script>
  import { isLoggedIn } from '../../store/auth'
  import { navigateTo } from 'svero';

  function toggleAuth() {
    isLoggedIn.set(true)
    navigateTo('/')
  }
</script>

<div>
  Auth page
  <button on:click={toggleAuth}>Change Auth</button>
</div>