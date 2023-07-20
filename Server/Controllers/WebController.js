const axios = require(`axios`);
const {
    DATA_PAGE_URL,
    DATA_PAGE_URL_WIG,
    DATA_PAGE_URL_WIG20,
    DATA_PAGE_URL_WIG30,
    DATA_PAGE_URL_WIG40,
    DATA_PAGE_URL_WIG80,
    VALUE_REGEX_PATTERN,
    MAIN_VALUE_REGEX_PATTERN,
    MINOR_VALUE_REGEX_PATTERN,
} = require(`../Utils`);



/**
 * Returns object with wig values depending on wigName
 * @param {*} req 
 * @param {*} res 
 * @return {wigName, mainValue, percentageChange, valueChange } object
 */
const getWig20Values = async (req, res) => {
    const wigName = req.params.wigName;

    try {
        let rawPageCode = ``;
        let mainValue = ``;
        let percentageChange = ``;
        let valueChange = ``;

        switch (wigName) {
            case `wig20`:
                rawPageCode = await axios.get(DATA_PAGE_URL_WIG20);
                break;
            case `wig30`:
                rawPageCode = await axios.get(DATA_PAGE_URL_WIG30);
                break;
            case `wig40`:
                rawPageCode = await axios.get(DATA_PAGE_URL_WIG40);
                break;
            case `wig80`:
                rawPageCode = await axios.get(DATA_PAGE_URL_WIG80);
                break;
            default:
                rawPageCode = await axios.get(DATA_PAGE_URL_WIG);
                break;
        }


        if (!rawPageCode || !rawPageCode.data) res.status(400).json({ error: `Brak tekstu strony` })

        const mainValueRegexResult = rawPageCode.data.match(MAIN_VALUE_REGEX_PATTERN);
        const minorValuesRegexResult = rawPageCode.data.match(MINOR_VALUE_REGEX_PATTERN);

        if (mainValueRegexResult[0]) {
            mainValue = mainValueRegexResult[0].match(VALUE_REGEX_PATTERN).join(``);
        }

        if (minorValuesRegexResult[0] && minorValuesRegexResult[1]) {
            percentageChange = minorValuesRegexResult[0].match(VALUE_REGEX_PATTERN)
            valueChange = minorValuesRegexResult[1].match(VALUE_REGEX_PATTERN)
        }

        res.status(200).json({ wigName, mainValue, percentageChange, valueChange })

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error })
    }

}



/**
 * Return stock values
 * @param {*} req 
 * @param {*} res 
 * @return { companyShortcut, mainValue, percentageChange, valueChange } object
 */
const getCompanyStockValues = async (req, res) => {
    const companyShortcut = req.params.companyShortcut

    if (!companyShortcut) res.status(400).json({ error: `Brak nazwy Firmy.` })


    try {
        let mainValue = ``;
        let percentageChange = ``;
        let valueChange = ``;

        const rawPageCode = await axios.get(`${DATA_PAGE_URL}${companyShortcut}`)

        if (!rawPageCode || !rawPageCode.data) res.status(400).json({ error: `Brak tekstu strony` })

        const mainValueRegexResult = rawPageCode.data.match(MAIN_VALUE_REGEX_PATTERN);
        const minorValuesRegexResult = rawPageCode.data.match(MINOR_VALUE_REGEX_PATTERN);

        if (mainValueRegexResult[0]) {
            mainValue = mainValueRegexResult[0].match(VALUE_REGEX_PATTERN).join(``)
        }

        if (minorValuesRegexResult[0] && minorValuesRegexResult[1]) {
            percentageChange = minorValuesRegexResult[0].match(VALUE_REGEX_PATTERN)
            valueChange = minorValuesRegexResult[1].match(VALUE_REGEX_PATTERN)
        }

        res.status(200).json({ companyShortcut, mainValue, percentageChange, valueChange })


    } catch (error) {
        res.status(400).json({ error: error })
    }



}



module.exports = {
    getCompanyStockValues,
    getWig20Values,
}