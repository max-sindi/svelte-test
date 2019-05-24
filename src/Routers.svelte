<script>
  import { Router, Route, Link } from 'svero';
  // import { Router, Route, Link } from 'svelte-routing';
  import AuthPage from './components/pages/AuthPage.svelte'
  import HomePage from './components/pages/HomePage.svelte'
  import NotFoundPage from './components/pages/NotFoundPage.svelte'
  import { isLoggedIn } from './store/auth'
  console.log('isLoggedIn: ', $isLoggedIn)
  // const {  } = auth
</script>

<Router>
  <Route path="*" component={NotFoundPage}/>
  <Route path="/" condition={$isLoggedIn} component={HomePage} redirect="/auth"/>
  <Route path="/auth" condition={!$isLoggedIn} component={AuthPage} />
</Router>