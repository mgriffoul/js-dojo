function fct1() {
	return globalFunction();
}

var fct2 = function() {
	return globalFunction();
}

function globalFunction() {
	return "good";
}