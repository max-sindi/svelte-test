<script>
  import {isLoggedIn, checkEmailAvailability, isEmailAvailable} from '../../store/auth'
  import {navigate} from 'svelte-routing'
  import * as yup from 'yup'
  import {errorLog, successLog} from '../../main'

  const schema = yup.object().shape({
    email: yup.string()/*.email() */, // disable complicated email validation
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
    } else if(value === true) {
      emailAvailability.valid = true;
      emailAvailability.message = 'Email is available';
    } else {
      emailAvailability.valid = null
      emailAvailability.message = ''
    }
  });

  function submitLogin() {
    console.log({email, password});
    isLoggedIn.signup({email, password})
      .then(() => navigate('/'));

  }

  function onChange(e) {
    console.log({ email, password });
    schema.validate({ email, password }).
      then(nextSuccess).
      catch(nextCatch);

    function nextSuccess(res) {
      // return successLog(res)
      // console.log(res);
      // console.log('da');
      // if(!res) {
      formValidity.valid = true
      formValidity.message = ''

      // prevent idle requests
      e.target.name === 'email' &&
      checkEmailAvailability(email);
      // }
    }

    function nextCatch(res) {
      formValidity.valid = false
      formValidity.message = res.message
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
    <button disabled={formValidity.valid === false ||  isEmailAvailable.valid === false} on:click={submitLogin}>Submit</button>
  </div>

  {#if formValidity.valid === false || emailAvailability.valid === false}
    <div>
      <span class="error-message">{formValidity.message || emailAvailability.message}</span>
    </div>
  {/if}

</div>
