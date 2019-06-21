import { t } from 'ttag';
import { setupi18n, switchLang } from './i18nSetup';

document.getElementById('en-select').onclick = (ev) => {
  ev.preventDefault();
  switchLang('en');
}

document.getElementById('uk-select').onclick = (ev) => {
  ev.preventDefault();
  switchLang('uk');
}

async function start() {
  await setupi18n();
  document.getElementById('content').innerHTML =  t`Hello with ttag`;
}

start();
