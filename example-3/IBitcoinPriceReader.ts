export interface IBitcoinPriceReader {
    getBitcoinPrice(): Promise<number>
}