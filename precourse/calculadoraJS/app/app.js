function calculate(){
	var n1 = parseInt(document.getElementById('n1').value)
	var n2 = parseInt(document.getElementById('n2').value)
	var sum = n1 + n2;
	var subs = n1 - n2;
	var mult = n1 * n2;
	var div = n1 / n2;
	document.getElementById('results').innerHTML = '<li>' + n1 + ' + ' + ' = ' + sum '</li>' + '<li>' + n1 + ' - ' + ' = ' + subs '</li>' + '<li>' + n1 + ' * ' + ' = ' + mult '</li>' + '<li>' + n1 + ' / ' + ' = ' + div '</li>'
}