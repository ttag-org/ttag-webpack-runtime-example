import { t } from 'ttag';
import { setupi18n, switchLang } from './i18nSetup';

// executing i18n setup before any content render ensures that no 't' is executed before locale setup.
async function start() {
  await setupi18n();
  document.getElementById('content').innerHTML =  t`Hello with ttag`;
}

// subscribe to language switch events
document.getElementById('en-select').onclick = (ev) => {
  ev.preventDefault();
  switchLang('en');
}

document.getElementById('uk-select').onclick = (ev) => {
  ev.preventDefault();
  switchLang('uk');
}

start();
