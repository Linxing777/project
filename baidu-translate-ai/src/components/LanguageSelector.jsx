const LANGUAGES = {
    "中文（简体）": "zho_Hans",
    "English": "eng_Latn",
    "French / Français": "fra_Latn",
    "Acehnese (Arabic)": "ace_Arab",
    "Acehnese (Latin)": "ace_Latn",
    "Afrikaans": "afr_Latn",
    "Akan": "aka_Latn",
    "Amharic": "amh_Ethi",
    "Armenian": "hye_Armn",
    "Assamese": "asm_Beng",
    "Asturian": "ast_Latn",
    "Awadhi": "awa_Deva",
    "Ayacucho Quechua": "quy_Latn",
    "Balinese": "ban_Latn",
    "Bambara": "bam_Latn",
    "Banjar (Arabic)": "bjn_Arab",
    "Banjar (Latin)": "bjn_Latn",
    "Bashkir": "bak_Cyrl",
    "Basque": "eus_Latn",
    "Belarusian": "bel_Cyrl",
    "Bemba": "bem_Latn",
    "Bengali": "ben_Beng",
    "Bhojpuri": "bho_Deva",
    "Bosnian": "bos_Latn",
    "Buginese": "bug_Latn",
    "Bulgarian": "bul_Cyrl",
    "Burmese": "mya_Mymr",
    "Catalan": "cat_Latn",
    "Cebuano": "ceb_Latn",
}

const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([key, value]) => (
    <option value={value} key={value}>{key}</option>
))

const LanguageSelector = ({ type, id, value, onChange }) => {
    return (
        <div className="language-selector">
            <label htmlFor={id}>{type}</label>
            <select
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {LANGUAGE_OPTIONS}
            </select>
        </div>
    )
}

export default LanguageSelector
