function convertToRoman(num) {
	let remainder = num;
	let romanArr = [];
	const numeralFunc = (num, str) => {
		if (remainder >= num) {
			let i = Math.floor(remainder / num)
			remainder = remainder - i * num;
			while (i > 0) {
				romanArr.push(str);
				i--
			}
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
	return romanArr.join("")
}

console.log(convertToRoman(2019));