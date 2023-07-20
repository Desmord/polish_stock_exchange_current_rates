import { StockInterface, IndexInterface } from "./Types";
import { GET_STOCK_URL, GET_WIG_URL } from "./URLs";

/**
 * 
 * @param stockName string
 * @returns { companyShortcut: string, mainValue: string, percentageChange: string, valueChange: string } object
 */
export const getStockValues = async (stockShortcut: string): Promise<StockInterface> => {
    const response = await fetch(`${GET_STOCK_URL}${stockShortcut}`)
    const jsonData = await response.json();

    return jsonData;
}

/**
 * 
 * @param wigName string
 * @returns  { mainValue: string, percentageChange: string , valueChange: string } object
 */
export const getWigValues = async (wigName: string): Promise<IndexInterface> => {
    const response = await fetch(`${GET_WIG_URL}${wigName}`)
    const jsonData = await response.json();

    return jsonData;
}