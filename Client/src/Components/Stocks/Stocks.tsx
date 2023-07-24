import { StockInterface } from '../../Utils/Types';

import styles from './Stocks.module.scss';

const Stocks = ({ stocks }: { stocks: StockInterface[] }) => {

    const isLoss = (value: string): boolean => !!value.match(/-/gim)

    const isProfit = (value: string): boolean => parseFloat(value.replace(`,`, `.`)) > 0 ? true : false;

    return (
        <div className={styles.container}>
            <div className={styles.stocks}>WIG 20 STOCKS</div>
            <div className={styles.stocksContainer}>

                <div>


                    {stocks.slice(0, Math.ceil(stocks.length / 2)).map((stockIndex: StockInterface, arrayIndex: number) => {

                        if (stockIndex.error) {
                            return (
                                <div className={styles.index} key={arrayIndex}>
                                    <span>Network error</span>
                                </div>
                            )
                        }

                        return (
                            <div className={styles.index} key={arrayIndex}>
                                <span>{stockIndex.companyShortcut}</span>
                                <span>{stockIndex.mainValue}</span>
                                <span
                                    className={`
                                ${isLoss(stockIndex.percentageChange) ? styles.loss : ``}
                                ${isProfit(stockIndex.percentageChange) ? styles.profit : ``}
                            `}>
                                    {stockIndex.percentageChange}%
                                </span>
                                <span
                                    className={`
                                ${isLoss(stockIndex.valueChange) ? styles.loss : ``}
                                ${isProfit(stockIndex.valueChange) ? styles.profit : ``}
                            `}>
                                    {stockIndex.valueChange}
                                </span>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {stocks.slice(Math.ceil(stocks.length / 2)).map((stockIndex: StockInterface, arrayIndex: number) => {

                        if (stockIndex.error) {
                            return (
                                <div className={styles.index} key={arrayIndex}>
                                    <span>Network error</span>
                                </div>
                            )
                        }

                        return (
                            <div className={styles.index} key={arrayIndex}>
                                <span>{stockIndex.companyShortcut}</span>
                                <span>{stockIndex.mainValue}</span>
                                <span
                                    className={`
                                ${isLoss(stockIndex.percentageChange) ? styles.loss : ``}
                                ${isProfit(stockIndex.percentageChange) ? styles.profit : ``}
                            `}>
                                    {stockIndex.percentageChange}%
                                </span>
                                <span
                                    className={`
                                ${isLoss(stockIndex.valueChange) ? styles.loss : ``}
                                ${isProfit(stockIndex.valueChange) ? styles.profit : ``}
                            `}>
                                    {stockIndex.valueChange}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Stocks;