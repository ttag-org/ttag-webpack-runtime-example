import { t } from 'ttag';
import { setupi18n } from './i18nSetup';
import cookies from 'browser-cookies';

document.getElementById('en-select').onclick = (ev) => {
  ev.preventDefault();
  cookies.set('lang', 'en');
  window.location.reload();
}

document.getElementById('uk-select').onclick = (ev) => {
  ev.preventDefault();
  cookies.set('lang', 'uk');
  window.location.href= '/'
  window.location.reload();
}

const render = () => {
  document.getElementById('content').innerHTML =  `
  <h2>${t`Hello with ttag`}</h2>
  `
}

async function start() {
  await setupi18n();
  render();
}

start();
