import { init } from "i18next";
import eng from "../../public/locales/en/translation.json";
import esp from "../../public/locales/es/translation.json";

// Aquí se está llamando a la función init para inicializar i18next con los recursos de traducción.
// Dentro, se pasa un objeto que contiene los recursos de traducción para los idioma que soportará la aplicación. En este caso, inglés (en) y español (es).
// Para cada idioma, se pasa un objeto que contiene las traducciones para ese idioma. En este caso, las traducciones se pasan con  la clave "cards".
init({
  resources: {
    en: {
      translation: {
        cards: eng,
      },
    },
    es: {
      translation: {
        cards: esp,
      },
    },
  },
});
