import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './langs/en.json';
import pl from './langs/pl.json';

export const languages: Array<string> = ['en', 'pl']

const resources = {
    pl: pl,
    en: en,
};

i18n
.use(initReactI18next)
.init({
    compatibilityJSON: 'v3',
    resources,
    lng: "en",
});

export default {i18n};