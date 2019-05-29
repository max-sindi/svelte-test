import { writable } from 'svelte/store'
import {errorLog, successLog} from '../main'
import axios from 'axios'

export const isEmailAvailable = writable(false); // enum [false, true, null]

export const user = writable(null);

user.subscribe(v => console.log(v))



export const isLoggedIn = (function() {
  const res = writable(false);

  return {
    ...res,
    signup: data => {
      return axios.post('auth/signup', data).
        then(res => user.set(res.data)).
        catch(err => errorLog(err.message))
    },
  }
}());

export const checkEmailAvailability = (email) => {
  isEmailAvailable.set(null);

  return axios.post('/auth/email-available', { email }).
    then(res => isEmailAvailable.set(res.data.ok)).
    catch(err => errorLog(err.message))
}
