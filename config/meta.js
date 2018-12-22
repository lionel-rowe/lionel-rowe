const fs = require('fs');

// const availableLocales = [
//   {
//     code: 'en_US',
//     name: 'English (US)',
//     default: true
//   },
//   // {
//   //   code: 'zh_CN',
//   //   name: '简体中文'
//   // }
// ];

// const defaultLocale = availableLocales.find(el => el.default);

// const locales = {};

// availableLocales.forEach(locale => {
//   locales[locale.code] = JSON.parse(fs.readFileSync(`${fs.realpathSync(process.cwd())}/config/locales/${locale.code}.json`, 'utf8'));
// });

// const i14e = () => {

// }

// module.exports = {
//   i14e:
// }

// console.log(JSON.stringify(locales));

const enUS = JSON.parse(fs.readFileSync(`${fs.realpathSync(process.cwd())}/src/locales/en-US.json`, 'utf8'));

// const enUS = require(`${fs.realpathSync(process.cwd())}/src/locales/en-US.js`).translations;

const metadataKeys = [
  'short_name',
  'title',
  'description',
  'image',
  'twitter_account',
  'url'
];

metadataKeys.forEach(key => {
  process.env[`REACT_APP_${key.toUpperCase()}`] = enUS.meta[key];
});
