const translations = {
  en: {
    metaTitle: 'Lumi Beauty — Manicure, Pedicure, Hair Extensions',
    navServices: 'Services',
    navAbout: 'About',
    navContact: 'Contact',
    heroTitle: 'Manicure · Pedicure · Hair Extensions',
    heroSubtitle: 'Professional care for your hands, feet, and hair. Book your appointment today.',
    heroCta: 'Book now',
    servicesTitle: 'Our Services',
    manicureTitle: 'Manicure',
    manicureDesc: 'Classic and gel manicure, nail art, nail strengthening. We work with premium products for a long-lasting result.',
    pedicureTitle: 'Pedicure',
    pedicureDesc: 'Hardware and classic pedicure, foot care, callus removal. Your feet will look and feel perfect.',
    hairTitle: 'Hair Extensions',
    hairDesc: 'Afro hair extensions: length and volume without harming your hair. Extensions on braids, color matched to your hair with a seamless blend.',
    aboutTitle: 'About Us',
    aboutText: 'We are a beauty studio that values quality, hygiene, and your comfort. Our masters regularly train and use only proven materials. We create a relaxing atmosphere so that every visit feels like a small holiday.',
    contactTitle: 'Contact & Booking',
    contactIntro: 'Write to us or call to book an appointment. We are happy to advise you on services and prices.',
    contactHours: 'Mon–Fri 10:00–20:00, Sat 10:00–18:00',
    footerRights: 'All rights reserved.',
  },
  ru: {
    metaTitle: 'Lumi Beauty — Маникюр, Педикюр, Наращивание волос',
    navServices: 'Услуги',
    navAbout: 'О нас',
    navContact: 'Контакты',
    heroTitle: 'Маникюр · Педикюр · Наращивание волос',
    heroSubtitle: 'Профессиональный уход за руками, ногами и волосами. Запишитесь на приём уже сегодня.',
    heroCta: 'Записаться',
    servicesTitle: 'Наши услуги',
    manicureTitle: 'Маникюр',
    manicureDesc: 'Классический и гель-маникюр, дизайн ногтей, укрепление. Работаем премиальными материалами для стойкого результата.',
    pedicureTitle: 'Педикюр',
    pedicureDesc: 'Аппаратный и классический педикюр, уход за стопами, удаление мозолей. Ваши ноги будут выглядеть и чувствовать себя идеально.',
    hairTitle: 'Наращивание волос',
    hairDesc: 'Афро-наращивание волос: длина и густота без вреда для ваших волос. Наращивание на косички, цвет в тон ваших волос с идеальным переходом.',
    aboutTitle: 'О нас',
    aboutText: 'Мы — студия красоты, где важны качество, гигиена и ваш комфорт. Наши мастера регулярно обучаются и используют только проверенные материалы. Создаём расслабляющую атмосферу, чтобы каждый визит был как маленький праздник.',
    contactTitle: 'Контакты и запись',
    contactIntro: 'Напишите или позвоните нам, чтобы записаться. С радостью проконсультируем по услугам и ценам.',
    contactHours: 'Пн–Пт 10:00–20:00, Сб 10:00–18:00',
    footerRights: 'Все права защищены.',
  },
  et: {
    metaTitle: 'Lumi Beauty — Maniküür, Pediküür, Juuste pikendamine',
    navServices: 'Teenused',
    navAbout: 'Meist',
    navContact: 'Kontakt',
    heroTitle: 'Maniküür · Pediküür · Juuste pikendamine',
    heroSubtitle: 'Professionaalne hooldus käte, jalgade ja juuste jaoks. Broneeri aeg juba täna.',
    heroCta: 'Broneeri',
    servicesTitle: 'Meie teenused',
    manicureTitle: 'Maniküür',
    manicureDesc: 'Klassikaline ja geel-maniküür, küünekunst, küünede tugevdamine. Kasutame primaarseid tooteid pikaajalise tulemuse saavutamiseks.',
    pedicureTitle: 'Pediküür',
    pedicureDesc: 'Aparaat- ja klassikaline pediküür, jalgade hooldus, sääskade eemaldamine. Teie jalad näevad välja ja tunduvad ideaalselt.',
    hairTitle: 'Juuste pikendamine',
    hairDesc: 'Afro juuste pikendamine: pikkus ja tihedus ilma teie juuste kahjustamiseta. Pikendused patsidele, värv teie juuste tooniga ideaalse üleminekuga.',
    aboutTitle: 'Meist',
    aboutText: 'Oleme ilusalong, kus oluline on kvaliteet, hügieen ja teie mugavus. Meie meistrid koolitavad regulaarselt ja kasutavad ainult tõestatud materjale. Loome lõõgastava atmosfääri, et iga külastus tunduks nagu väike puhkus.',
    contactTitle: 'Kontakt ja broneering',
    contactIntro: 'Kirjutage või helistage meile broneerimiseks. Rõõmuga nõustame teenuste ja hindade osas.',
    contactHours: 'E–R 10:00–20:00, L 10:00–18:00',
    footerRights: 'Kõik õigused kaitstud.',
  },
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  const titleEl = document.querySelector('title');
  if (titleEl && translations[lang].metaTitle) {
    titleEl.textContent = translations[lang].metaTitle;
  }

  document.documentElement.lang = lang === 'et' ? 'et' : lang === 'ru' ? 'ru' : 'en';

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.getAttribute('data-lang'));
  });
});

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Dark mode toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});