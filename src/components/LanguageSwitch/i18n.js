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
          mainTitle: "A place, where holiday becomes ",
          adj01: 'special',
          adj02: 'attractive',
          adj03: 'fascinating',
          mainDesc: "Our hotel is 4 km from Varna. Within walking distance of the sea, the embankment, thermal springs, and Lidl store. Public transport is available all year round. The complex offers comfortable accommodation in various options, depending on the wishes and needs of the guests - double rooms, studios and apartments. All rooms are elegantly and practically equipped and feature large and comfortable beds, pull-out sofas, a desk, a flat-screen TV, air conditioning, WiFi, a wardrobe, a kettle, a telephone, a terrace. The hotel offers restaurant, a lobby bar, and free Wi-Fi throughout the building. The hotel has 29 Standard rooms, 2 two–bedroom apartments, 1 studio + bedroom apartment, its own terrace. All rooms are equipped with an additional pull-out single sofa.",
          partners: 'Our partners',
          forReservations: "For reservations: ",
          ourApartments: "Our apartments",
          family: 'Family with terrace',
          apartmentsbb: 'Apartments with 2 bedrooms',
          apartmentsbbt: 'Apartments with 2 bedrooms and terrace',
          descriptionApartment01: '2 seperate beds or 1 double bed, pull-out sofa',
          descriptionApartment03: '2 rooms with a double bed and a single sofa bed, bathroom',
          descriptionApartment04: '2 rooms with a double bed and a single sofa bed, bathroom with shower',
          cabeltv: 'TV',
          conditioner: 'Conditioner',
          terrace: 'Terrace',
          balcony: 'Balcony',
          bathroom: 'Bathroom',
          shower: 'Shower',
          bookNowBtn: "Book now",
          children: 'Children under two years of age stay',
          free: 'free of charge',
          pets: 'Pets',
          pprice: '20 BGN./day',
          contactsAddress:
            "47th St., St. St. Konstantin and Elena, 9006 Bulgaria",
          contactsHeading: "Our contacts",
          advantages: 'Our advantages'
        },
      },
      bg: {
        translation: {
          apartments: "Апартаменти",
          res: "Ресторант",
          aboutus: "За нас",
          contacts: "Контакти",
          mainTitle: "Място, където почивка се стана много ",
          adj01: 'специална',
          adj02: 'хубава',
          adj03: 'прекрасна',
          mainDesc: "Нашият хотел се намира на 4 км от Варна. На пешеходно разстояние море, насип, термални извори, магазин Lidl. Обществен транспорт през цялата година. Хотел предлага комфортно настаняване в различни варианти, в зависимост от желанията и нуждите на гостите - двойни стаи и апартаменти. Всички стаи са елегантно и практично оборудвани и разполагат с големи и удобни легла, разтегателни дивани, бюро, телевизор с плосък екран, климатик, гардероб, телефон, тераса. Хотелът разполага с 29 стандартни стаи, 2 апартамента с две спални, 1 апартамент – студио + спалня, собствена тераса. Всички стаи са оборудвани с допълнителен разтегателен единичен диван.",
          partners: 'Нашите партньори',
          forReservations: "За резервации: ",
          ourApartments: "Нашите апартаменти",
          family: 'Cемеен апартамент с тераса',
          apartmentsbb: 'Aпартаменти с 2 спални',
          apartmentsbbt: 'Aпартаменти с 2 спални и тераса',
          descriptionApartment01: '2 отделни легла или 1 двойно легло, разтегателен диван',
          descriptionApartment03: '2 стаи с двойно легло и единичен разтегателен диван, баня със санитарен възел',
          descriptionApartment04: '2 стаи с двойно легло и единичен разтегателен диван, баня с душ',
          cabeltv: 'Телевизия',
          conditioner: 'Климатик',
          terrace: 'Тераса',
          balcony: 'Балкон',
          bathroom: 'Баня',
          shower: 'Душ',
          bookNowBtn: "Резервирай сега",
          children: 'Деца под двегодишна възраст се настаняват',
          free: 'безплатно',
          pets: 'Домашни любимци',
          pprice: '20 лв./ден',
          contactsAddress:
            'ул. "47-та", Св.Св. Константин и Елена, 9006 България',
          contactsHeading: "Нашите контакти",
          advantages: 'Нашите предимства'
        },
      },
      de: {
        translation: {
          apartments: "Wohnungen",
          res: "Restaurant",
          aboutus: "Über uns",
          contacts: "Kontakten",
          mainTitle: "Ein Ort, an dem Urlaub zu etwas Besonderem ",
          adj01: 'besonders',
          adj02: 'attraktiv',
          adj03: 'faszinierend',
          mainDesc: "Unser Hotel liegt 4 km von Varna. In Gehweite zum Meer, zur Strandpromenade, zu den Thermalquellen und zum Lidl-Laden. Öffentliche Verkehrsmittel das ganze Jahr über. Die Anlage bietet komfortable Unterkunft in verschiedenen Varianten, je nach den Wünschen und Bedürfnissen der Gäste - Doppelzimmer, Studios und Apartments.  Alle Zimmer sind elegant und praktisch eingerichtet mit großen und bequemen Betten, Schlafsofas, Schreibtisch, Flachbildfernseher, Klimaanlage, WiFi, Kleiderschrank, Wasserkocher, Telefon, Terrasse. Den Gästen stehen ein kostenloser Parkplatz, ein Restaurant, eine Lobby-Bar und kostenloses WiFi im gesamten Gebäude zur Verfügung. Das Hotel verfügt über 29 Standardzimmer, 2 Apartments mit zwei Schlafzimmern, 1 Apartment - Studio + Schlafzimmer, private Terrasse. Alle Zimmer sind mit einem zusätzlichen Einzelschlafsofa ausgestattet.",
          partners: 'Unsere Partner',
          forReservations: "Über die Buchung: ",
          family: 'Familienapartments mit Terrasse',
          apartmentsbb: 'Wohnungen mit 2 Schlafzimmern',
          apartmentsbbt: 'Appartements mit 2 Schlafzimmern und Terrasse',
          descriptionApartment01: '2 getrennte Betten oder 1 Doppelbett, ausziehbares Sofa',
          descriptionApartment03: '2 Zimmer mit einem Doppelbett und einem Einzelschlafsofa, Badezimmer',
          descriptionApartment04: '2 Zimmer mit einem Doppelbett und einem Einzelschlafsofa, Badezimmer mit Dusche',
          cabeltv: 'Fernseher',
          conditioner: 'Klimaanlage',
          terrace: 'Terrasse',
          balcony: 'Balkon',
          bathroom: 'Badezimmer',
          shower: 'Dusche',
          children: 'Kinder unter zwei Jahren übernachten',
          free: 'kostenlos',
          pets: 'Haustiere',
          pprice: '20 BGN./Tag',
          ourApartments: "Unsere Wohnungen",
          bookNowBtn: "Buchen Sie jetzt",
          contactsAddress:
            "st. 47., St. St. Konstantin und Elena, 9006 Bulgarien",
          contactsHeading: "Unsere Kontakte",
          advantages: 'Unsere Vorteile'
        },
      },
      ru: {
        translation: {
          apartments: "Апартаменты",
          res: "Ресторан",
          aboutus: "О нас",
          contacts: "Контакты",
          mainTitle: "Место, где отдых становится ",
          adj01: 'прекрасным',
          adj02: 'восхитительным',
          adj03: 'незабываемым',
          mainDesc:
            'Наш отель находится в 4 км от Варны. В пешеходной доступности море, набережная, термальные источники, магазин Lidl. Общественный транспорт круглый год. Комплекс предлагает комфортное размещение в различных вариантах, в зависимости от пожеланий и потребностей гостей - двухместные номера, студии и апартаменты. Все номера оборудованы элегантно и практично и располагают большими и удобными кроватями, раскладными диванами, письменным столом, телевизором с плоским экраном, кондиционером, WiFi, шкафом для одежды, чайником, телефоном, террасой. В распоряжении гостей бесплатная парковка, ресторан, лобби бар, бесплатный Wi-Fi во всем здании. Отель располагает 29 стандартными номерами, 2 апартаментами с двумя спальнями, 1 апартаменты – студия + спальня, своя терраса. Все номера оснащены дополнительным раскладным одноместным диваном.',
          partners: 'Наши партнеры',
          forReservations: "Бронирование: ",
          ourApartments: "Наши апартаменты",
          family: 'Семейный номер с террасой',
          apartmentsbb: 'Апартаменты с 2 спальнями',
          apartmentsbbt: 'Апартаменты с 2 спальнми и террасой',
          descriptionApartment01: '2 отдельные кровати или 1 двуспальная кровать, раскладной диван',
          descriptionApartment03: '2 комнаты с двуспальной кроватью и односпальным диваном-кроватью, ванная комната',
          descriptionApartment04: '2 комнаты с двуспальной кроватью и односпальным диваном-кроватью, ванная комната с душевой кабиной.',
          cabeltv: 'Телевидение',
          conditioner: 'Кондиционер',
          terrace: 'Терраса',
          balcony: 'Балкон',
          bathroom: 'Ванная комната',
          shower: 'Душ',
          children: 'Дети до двух лет размещаются',
          free: 'бесплатно',
          pets: 'Домашние животные',
          pprice: '20 лв./день',
          bookNowBtn: "Забронировать сейчас",
          contactsAddress:
            "ул. 47-ая, Св.Св. Константин и Елена, 9006 Болгария",
          contactsHeading: "Наши контакты",
          advantages: 'Наши преимущества'
        },
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
