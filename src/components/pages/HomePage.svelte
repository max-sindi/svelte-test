<script>
  import {Link} from 'svero'
</script>

<style>

.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100vh;
}

</style>

<div class="background-gradient home-container">
  <div class="title">
    Welcome to Svelte App.
  </div>
  <Link href="/auth">Auth page</Link>
</div>