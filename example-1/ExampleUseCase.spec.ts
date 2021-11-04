const ExampleUseCase = require('./ExampleUseCase');
const assert = require('assert');

describe('ExampleUseCase#exec', () => {
    it('正常に動作する事', async () => {
        const usecase = new ExampleUseCase()
        const actual = usecase.add(10, 20);
        assert.equal(actual, 30);
    });
});