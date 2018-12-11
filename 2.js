function convertToRoman(num) {
	let remainder = num;
	let romanStr = [];
	const numeralFunc = (num, str) => {
		while (remainder >= num) {
			remainder -= num;
			romanStr += str;
		}  
	}
	numeralFunc(1000, "M");
	numeralFunc(900, "CM");
	numeralFunc(500, "D");
	numeralFunc(400, "CD");
	numeralFunc(100, "C");
	numeralFunc(90, "XC");
	numeralFunc(50, "L");
	numeralFunc(40, "XL");
	numeralFunc(10, "X");
	numeralFunc(9, "IX");
	numeralFunc(5, "V");
	numeralFunc(4, "IV");
	numeralFunc(1, "I");
	return romanStr;
}

console.log(convertToRoman(6749));