import {IBitcoinPriceReader} from "./IBitcoinPriceReader";

const ExampleUseCase = require('./ExampleUseCase');
const assert = require('assert');
import {createMock} from 'ts-auto-mock';

describe('ExampleUseCase#exec', () => {
    it('正常に動作する事', async () => {
        // モック作成
        const bitcoinPriceReaderMock = createMock<IBitcoinPriceReader>();
        const getBitcoinPrice = bitcoinPriceReaderMock.getBitcoinPrice = jest.fn(async () => 999);

        // 処理実行
        const usecase = new ExampleUseCase(bitcoinPriceReaderMock)
        const actual = await usecase.getBitcoinPrice();

        // 確認
        assert.equal(actual, "Bitcoin Price: 999");
        expect(getBitcoinPrice.mock.calls.length).toBe(1);
        // expect(getBitcoinPrice.mock.calls[0][0]).toBe("Hello from ExampleService.");
    });
});