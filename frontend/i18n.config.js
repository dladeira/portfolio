import en from "./locales/en.json"
import pl from "./locales/pl.json"
import pt from "./locales/pt.json"
import la from "./locales/la.json"

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en,
        pl,
        pt,
        la,
    },
}))
