<script>
  import {isLoggedIn} from '../../store/auth'
  import {Link} from 'svelte-routing'
</script>

<div>
  Home Page
  {#if !$isLoggedIn}
    <Link to="/auth">
      To auth
    </Link>
   {/if}
</div>