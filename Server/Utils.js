const DATA_PAGE_URL = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=`
const DATA_PAGE_URL_WIG = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=WIG`;
const DATA_PAGE_URL_WIG20 = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=WIG20`;
const DATA_PAGE_URL_WIG30 = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=WIG30`;
const DATA_PAGE_URL_WIG40 = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=MWIG40`;
const DATA_PAGE_URL_WIG80 = `https://www.bankier.pl/inwestowanie/profile/quote.html?symbol=SWIG80`;

const VALUE_REGEX_PATTERN = new RegExp(`-*[0-9,]+`, `gim`)
const MAIN_VALUE_REGEX_PATTERN = new RegExp(`<div class="profilLast">.*<\/div>`, `gim`);
const MINOR_VALUE_REGEX_PATTERN = new RegExp(`<span class="value">.*<\/span>`, `gim`);

const WIG20_SHORCUTS = [
    { name: `Alior Bank`, shortcut: `ALIOR` },
    { name: `Allegro`, shortcut: `ALLEGRO` },
    { name: `Asseco Poland`, shortcut: `ASSECOPOL` },
    { name: `Bank Polska Kasa Opieki Sa`, shortcut: `PEKAO` },
    { name: `CD Projekt`, shortcut: `CDPROJEKT` },
    { name: `Cyfrowy Polsat`, shortcut: `CYFRPLSAT` },
    { name: `Dino Polska`, shortcut: `DINOPL` },
    { name: `Grupa Kenty`, shortcut: `KETY` },
    { name: `Jastrzębska Spólka Węglowa`, shortcut: `JSW` },
    { name: `KGHM Polska Miedź`, shortcut: `KGHM` },
    { name: `Kruk SA`, shortcut: `KRUK` },
    { name: `LPP SA`, shortcut: `LPP` },
    { name: `Orange Polska`, shortcut: `ORANGEPL` },
    { name: `Polska Grupa Energetyczna`, shortcut: `PGE` },
    { name: `Polski Koncern Naftowy ORLEN`, shortcut: `PKNORLEN` },
    { name: `Powszechna Kasa Oszczędności PKO`, shortcut: `PKOBP` },
    { name: `Powszechny Zakład Ubezpieczeń PZU`, shortcut: `PZU` },
    { name: `Pepco Group`, shortcut: `PEPCO` },
    { name: `Santander Bank`, shortcut: `SANPL` },
    { name: `mBank`, shortcut: `MBANK` },
]

module.exports = {
    VALUE_REGEX_PATTERN,
    MAIN_VALUE_REGEX_PATTERN,
    MINOR_VALUE_REGEX_PATTERN,
    WIG20_SHORCUTS,
    DATA_PAGE_URL,
    DATA_PAGE_URL_WIG,
    DATA_PAGE_URL_WIG20,
    DATA_PAGE_URL_WIG30,
    DATA_PAGE_URL_WIG40,
    DATA_PAGE_URL_WIG80
}