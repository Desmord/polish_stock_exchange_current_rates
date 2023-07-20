interface ItemInterface {
    mainValue: string,
    percentageChange: string,
    valueChange: string,
    error?: any,
}

export interface StockInterface extends ItemInterface {
    companyShortcut: string,
}

export interface IndexInterface extends ItemInterface {
    wigName: string,
}