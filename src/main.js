import App from './App.svelte';
import axios from 'axios'
import './styles/theme.scss'

axios.defaults.baseURL = 'http://localhost:8000/api/';

export function successLog(message) {
	console.log('%c' + message, "color: #4BB543; font-weight: 700");
}

export function errorLog(message) {
	console.log('%c' + message, "color: #cc0000; font-weight: 700");
}

axios.get('/')
	.then(res => successLog(res.data.message))
	.catch(err => errorLog(err.message));

const app = new App({
	target: document.body,
});

window.app = app;

export default app;