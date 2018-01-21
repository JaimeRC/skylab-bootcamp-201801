describe('isNumeric', function () {
    var num;
    beforeEach(function () {
        num = '123456fg';
    });
    function testIsNumeric() {
        expect(isNumeric(num)).toBeTruthy();
    }
    it(IsNumeric.name, IsNumeric);
});