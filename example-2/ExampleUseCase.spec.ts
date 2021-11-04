const ExampleUseCase = require('./ExampleUseCase');
const assert = require('assert');

describe('ExampleUseCase#exec', () => {
    it('正常に動作する事', async () => {
        const usecase = new ExampleUseCase()
        const actual = await usecase.getBitcoinPrice();

        // 毎回結果が変わるためテストができない
        assert.equal(actual, "Bitcoin Price: ?");
    });
});