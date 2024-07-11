/* @refresh reload */
import { render } from 'solid-js/web';

import { LandingPage } from './App';

import { I18nProvider } from '@src/context/i18n';

const page = document
  .querySelector('meta[name="page"]')
  ?.getAttribute('content');

const main = document.querySelector('#app');

if (main && page === 'landing') {
  render(
    () => (
      <I18nProvider>
        <LandingPage />
      </I18nProvider>
    ),
    main,
  );
}
