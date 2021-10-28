import { createI18n } from "vue-i18n";

const br = require("@/locales/pt_br.json");
const en = require("@/locales/en.json");

const messages = { br, en };

export default createI18n({
    legacy: false,
    locale: "br",
    globalInjection: true,
    messages,
});
