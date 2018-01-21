describe('Shuffle', function () {
    var arr;
    var arr1;

    beforeEach(function () {
        arr = [1, 2, 3, 4, 5, 6, 7];
        arr1 = [1, 2, 3, 4, 5, 6, 7];
    });
    function testShuffle() {
        expect(arr).not.toEqual(shuffle(arr1));
    }
    it(testShuffle.name, testShuffle);
});