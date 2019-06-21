import { addLocale, useLocale } from 'ttag';
import cookies from 'browser-cookies';

export async function setupi18n() {
  const locale = cookies.get('lang');
  if (locale === 'uk') {
    const data = await import('../i18n/uk.po.json');
    addLocale(locale, data);
    useLocale(locale);
  }
}

export function switchLang(lang) {
  cookies.set('lang', lang);
  window.location.reload();
}
