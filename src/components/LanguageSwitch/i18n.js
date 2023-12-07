import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
          res: "Restaurant",
          aboutus: "About us",
          contacts: "Contacts",
          mainTitle: "A place, where holiday becomes special...",
          mainDesc: "Welcome to Hotel Yo - a comfortable and luxurious 3-star hotel on the Black Sea coast. An excellent location in the center of the resort St. Constantine and Helena allows you to “keep the most important thing in the palm of your hand” - a large Lidl hypermarket, the main attractions of Varna and the sea. With joy and a smile, we will provide you with the most comfortable and excellent rooms with a beautiful and picturesque view of the sea. The room rate includes free breakfast, access to an outdoor pool, Wi-Fi, cable TV and hot water!",
          forReservations: "For reservations: ",
          ourApartments: "Our apartments",
          bookNowBtn: "Book now",
          contactsAddress:
            "47th St., St. St. Konstantin and Elena, 9006 Bulgaria",
          contactsHeading: "Our contacts",
        },
      },
      bg: {
        translation: {
          apartments: "Апартаменти",
          res: "Ресторант",
          aboutus: "За нас",
          contacts: "Контакти",
          mainTitle: "Място, където почивка се стана много хубава... ",
          mainDesc: "Добре дошли в хотел Йо - комфортен и луксозен 3-звезден хотел на брега на Черно море. Хубава локация в центъра на курорта Св. Св. Константин и Елена ви позволява да „пазите най-важното в дланта си” - голям хипермаркет Lidl, основните забележителности на Варна и морето. С радост и усмивка ние ще ви предоставим най-удобните и отлични стаи с красива и живописна гледка към морето. Цената на стаята включва безплатна закуска, достъп до външен басейн, Wi-Fi, кабелна телевизия и топла вода!",
          forReservations: "За резервации: ",
          ourApartments: "Нашите апартаменти",
          bookNowBtn: "Резервирай сега",
          contactsAddress:
            'ул. "47-та", Св.Св. Константин и Елена, 9006 България',
          contactsHeading: "Нашите контакти",
        },
      },
      de: {
        translation: {
          apartments: "Wohnungen",
          res: "Restaurant",
          aboutus: "Über uns",
          contacts: "Kontakten",
          mainTitle: "Ein Ort, an dem Urlaub zu etwas Besonderem wird...",
          mainDesc: "Willkommen im Hotel Yo – einem komfortablen und luxuriösen 3-Sterne-Hotel an der Schwarzmeerküste. Eine ausgezeichnete Lage im Zentrum des Ferienortes St. Konstantin und Helena ermöglicht es Ihnen, „das Wichtigste in Ihrer Hand zu behalten“ – einen großen Lidl-Hypermarkt, die Hauptattraktionen von Varna und das Meer. Mit Freude und einem Lächeln stellen wir Ihnen die komfortabelsten und besten Zimmer mit einem wunderschönen und malerischen Blick auf das Meer zur Verfügung. Der Zimmerpreis beinhaltet kostenloses Frühstück, Zugang zu einem Außenpool, WLAN, Kabel-TV und Warmwasser!",
          forReservations: "Über die Buchung: ",
          ourApartments: "Unsere Wohnungen",
          bookNowBtn: "Buchen Sie jetzt",
          contactsAddress:
            "st. 47., St. St. Konstantin und Elena, 9006 Bulgarien",
          contactsHeading: "Unsere Kontakte",
        },
      },
      ru: {
        translation: {
          apartments: "Апартаменты",
          res: "Ресторан",
          aboutus: "О нас",
          contacts: "Контакты",
          mainTitle: "Место, где отдых становится особенным...",
          mainDesc:
            'Добро пожаловать в Отель Йо – комфортный и роскошный 3-звездочный отель на побережье Черного моря. Отличная локация в центре курорта Св. Константин и Елена позволяет "держать самое главное на ладони" - крупному гипермаркету Лидл, главным достопримечательностям Варны и морю. Мы с радостью и улыбкой предоставим Вам самые уютные и самые лучшие номера с прекрасным и живописным видом на море. В стоимость номера включены бесплатные завтраки, доступ к открытому бассейну, Wi-Fi, кабельному телевидению и горячей воде!',
          forReservations: "Бронирование: ",
          ourApartments: "Наши апартаменты",
          bookNowBtn: "Забронировать сейчас",
          contactsAddress:
            "ул. 47-ая, Св.Св. Константин и Елена, 9006 Болгария",
          contactsHeading: "Наши контакты",
        },
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
