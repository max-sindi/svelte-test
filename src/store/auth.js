import { writable } from 'svelte/store'
import {errorLog} from '../main'
import axios from 'axios'

export const isEmailAvailable = writable(false); // enum [false, true, null]

export const isLoggedIn = (function() {
  const res = writable(false);

  return {
    ...res,
    login: data => {
      return axios.post('auth/signup', data).
        then(res => console.log(res)).
        catch(err => errorLog(err.message))
    }
  }
}());

export const checkEmailAvailability = (email) => {
  isEmailAvailable.set(null);

  return axios.post('/auth/email-available', { email }).
    then(res => isEmailAvailable.set(res.data.ok)).
    catch(err => errorLog(err.message))
}

