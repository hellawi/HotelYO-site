import i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          apartments: "Apartments",
          res: 'Restaurant',
          aboutus: 'About us',
          contacts: 'Contacts',
          mainTitle: 'A place, where holiday becomes special...',
          forReservations: 'For reservations: ',
          ourApartments: 'Our apartments',
          bookNowBtn: 'Book now',
          contactsAddress: '47th St., St. St. Konstantin and Elena, 9006 Bulgaria',
          contactsHeading: 'Our contacts'
        },
      },
      bg: {
        translation: {
          apartments: "Апартаменти",
          res: 'Ресторант',
          aboutus: 'За нас',
          contacts: 'Контакти',
          mainTitle: 'Място, където почивка се стана много хубава... ',
          forReservations: 'За резервации: ',
          ourApartments: 'Нашите апартаменти',
          bookNowBtn: 'Резервирай сега',
          contactsAddress: 'ул. "47-та", Св.Св. Константин и Елена, 9006 България',
          contactsHeading: 'Нашите контакти'
        },
      },
      de: {
        translation: {
          apartments: "Wohnungen",
          res: 'Restaurant',
          aboutus: 'Über uns',
          contacts: 'Kontakten',
          mainTitle: 'Ein Ort, an dem Urlaub zu etwas Besonderem wird...',
          forReservations: 'Über die Buchung: ',
          ourApartments: 'Unsere Wohnungen',
          bookNowBtn: 'Buchen Sie jetzt',
          contactsAddress: 'st. 47., St. St. Konstantin und Elena, 9006 Bulgarien',
          contactsHeading: 'Unsere Kontakte'
        },
      },
      ru: {
        translation: {
          apartments: "Апартаменты",
          res: 'Ресторан',
          aboutus: 'О нас',
          contacts: 'Контакты',
          mainTitle: 'Место, где отдых становится особенным...',
          forReservations: 'Бронирование: ',
          ourApartments: 'Наши апартаменты',
          bookNowBtn: 'Забронировать сейчас',
          contactsAddress: 'ул. 47-ая, Св.Св. Константин и Елена, 9006 Болгария',
          contactsHeading: 'Наши контакты'
        },
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
