/* @refresh reload */
import { render } from 'solid-js/web';
import { Landing } from './App';

const page = document
  .querySelector('meta[name="page"]')
  ?.getAttribute('content');

const main = document.querySelector('#app');

if (main && page === 'landing') {
  render(() => <Landing />, main);
}
