function convertToRoman(num) {
	//declare variables: a number equal to the input, an emtpy array and an object with numerical and roman 
	//symbols
	let remainder = num;
	let romanStr = "";
	const romanNumKey = [
		{integer : 1000, roman: "M"}, {integer : 900, roman: "CM"}, {integer : 500, roman: "D"},
		{integer : 400, roman: "CD"}, {integer : 100, roman: "C"}, {integer : 90, roman: "XC"}, 
		{integer : 50, roman: "L"}, {integer : 40, roman: "XL"}, {integer : 10, roman: "X"},
		{integer : 9, roman: "IX"}, {integer : 5, roman: "V"}, {integer : 4, roman: "IV"},
		{integer : 1, roman: "I"}]

	//declare function to subtract a value from remainder and to push the corresponding roman symbol to the  
	// empty array for as long as remainder is bigger than or equal to the value 
	const numeralFunc = (val, str) => {
		while (remainder >= val) {
			remainder -= val;
			romanStr += str;
		}  
	}
	//loop over the array to form roman numeral, and return the array
	for (let i = 0; i < romanNumKey.length; i++) {
		numeralFunc(romanNumKey[i]["integer"], romanNumKey[i]["roman"])
	}
	return romanStr
}

console.log(convertToRoman(2019));