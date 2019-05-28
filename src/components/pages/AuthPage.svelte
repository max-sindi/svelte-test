<script>
  import {isLoggedIn, checkEmailAvailability, isEmailAvailable} from '../../store/auth'
  import {navigate} from 'svelte-routing'
  import * as yup from 'yup'
  import {errorLog, successLog} from '../../main'

  const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required(),
  });

  let email = '';
  let password = '';
  let formValidity = {
    valid: false,
    message: ''
  };
  let emailAvailability = {
    valid: null,
    message: '',
  };

  isEmailAvailable.subscribe(value => {
    if(value === false) {
      emailAvailability.valid = false;
      emailAvailability.message = 'Such email is unavailable';
    } else if(errorMessage === true) {
      emailAvailability.valid = true;
      emailAvailability.message = 'Email is available';
    } else {
      emailAvailability.valid = null
    }
  });

  function submitLogin() {
    console.log({email, password});
    isLoggedIn.login({email, password});
    navigate('/');
  }

  function onChange(e) {
    schema.validate({ email, password }).
      then(nextSuccess).
      catch(nextCatch);
    
    function nextSuccess(res) {
      return console.log(successLog(res))
      if(!res) {
        formValidity.valid = false
      }
    }
    
    function nextCatch(res) {
      errorLog(res)
    }
    // checkEmailAvailability(email);
  }
</script>

<div>
  <div>
    <label>
      Email
      <input name="email" bind:value={email} on:input={onChange}>
    </label>
  </div>
  <div>
    <label>
      Password
      <input name="password" bind:value={password} type="password" on:input={onChange}>
    </label>
  </div>

  <div>
    <button on:click={submitLogin}>Submit</button>
  </div>

  {#if !formValidity.valid}
    <div>
      <span class="error-message">{formValidity.message}</span>
    </div>
  {/if}

</div>