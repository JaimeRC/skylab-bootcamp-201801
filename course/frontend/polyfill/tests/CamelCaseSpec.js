describe('camelCase', function () {
    var string;
    beforeEach(function () {
        string = 'HolaCaracola0mereceLa9Pena';
    });
    function testCamelCase() {
        expect(camelCase(string)).toBeDefined();
    }
    it(testCamelCase.name, testCamelCase);
});
