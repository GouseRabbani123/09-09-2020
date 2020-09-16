var arr = ["gouse", "shahib", "refer", "tabat","carac"];
var palindromes = arr.filter((str) => {
	var regex = /[^A-Za-z0-9]/g;
	var modString = str.toLowerCase().replace(regex, '');
	return (modString == modString.split('').reverse().join(''))
});
console.log(palindromes);