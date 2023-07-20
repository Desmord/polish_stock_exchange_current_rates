const express = require(`express`);
const { getCompanyStockValues, getWig20Values, } = require(`../Controllers/WebController`);
const router = express.Router();


router.route(`/getCompanyStockValue/:companyShortcut`).get(getCompanyStockValues)
router.route(`/getWigValue/:wigName`).get(getWig20Values);


module.exports = router;