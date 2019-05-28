<script >
  import { Router, Route } from 'svelte-routing'
  import AuthPage from './components/pages/AuthPage.svelte';
  import HomePage from './components/pages/HomePage.svelte'

  import { isLoggedIn } from './store/auth'
</script>


<Router>
  <Route path="/" component={HomePage} />
  <Route path="/auth" component={AuthPage} condition={!$isLoggedIn} />
</Router>

