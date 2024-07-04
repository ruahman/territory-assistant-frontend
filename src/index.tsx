/* @refresh reload */
import { render } from 'solid-js/web';

import { LandingPage } from './app';

const page = document
  .querySelector('meta[name="page"]')
  ?.getAttribute('content');

const main = document.querySelector('#app');

if (main && page === 'landing') {
  render(() => <LandingPage />, main);
}
