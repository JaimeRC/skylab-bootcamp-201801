describe('isSymbol', function () {
    var symbol;
    beforeEach(function () {
        symbol = 'hello%';
    });
    function testIsSymbol() {
        expect(isSymbol(symbol)).toBeTruthy();
    }
    it(testIsSymbol.name, testIsSymbol);
});
