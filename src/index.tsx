/* @refresh reload */
import { render } from 'solid-js/web'

import { LandingPage } from './App'

const page = document.querySelector('meta[name="territory-assistant-page"]')?.getAttribute('content');
console.log(page);

const main = document.querySelector('#app')

if (main && page === 'landing') {
  render(() => <LandingPage />, main)
}
