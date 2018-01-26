describe("Move element in an Array", function () {
	var position = 0;
	var index = 0;
	var array;
	var newArray;

	beforeEach(function () {
		array = new Array(10, 20, 30, 40, 50);
		index = 3;
		position = 2;
	});

	function moveElementArray() {
		newArray = Array.prototype.moveElement(array, index, position);
		expect(newArray).toEqual([10, 20, 40, 30, 50]);
	}
	it('Must show this array: ', moveElementArray);
});
