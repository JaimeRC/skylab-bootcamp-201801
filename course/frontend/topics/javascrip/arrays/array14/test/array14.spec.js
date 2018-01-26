describe("Most Frequent Items method", function () {
	var text;
	var array;

	beforeEach(function () {
		array = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b');
	});

	function countOfItems() {
		text = array.mostFrenquentItem(array);
		expect(text).toEqual('1: 10');
	}
	it('Show most frequent item: ', countOfItems);
});