import { t } from 'ttag';
import { setupi18n } from './i18nSetup';

document.getElementById('en-select').onclick = (ev) => {
  ev.preventDefault();
  document.cookie = 'en';
  window.location.reload();
}

document.getElementById('uk-select').onclick = (ev) => {
  ev.preventDefault();
  document.cookie = 'uk';
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
