function convertToRoman(num) {
 //M C L X V I
 let remainder = num;
 let romanArr = [];
 if (remainder >= 1000) {
 	let m = Math.floor(remainder / 1000)
 	remainder = remainder - m * 1000;
 	while (m > 0) {
 		romanArr.push("M");
 		m--
 	}
 }  
 if (remainder >= 900) {
 	remainder = remainder - 900;
 	romanArr.push("CM"); 	
 }
 if (remainder >= 500) {
 	let d = Math.floor(remainder / 500)
 	remainder = remainder - d * 500;
 	while (d > 0) {
 		romanArr.push("D");
 		d--
 	}  
 }
 if (remainder >= 400) {
 	remainder = remainder - 400;
 	romanArr.push("CD"); 	
 }  
 if (remainder >= 100) {
 	let c = Math.floor(remainder / 100)
 	remainder = remainder - c * 100;
 	while (c > 0) {
 		romanArr.push("C");
 		c--
 	}  
 }
 if (remainder >= 90) {
 	remainder = remainder - 90;
 	romanArr.push("XC"); 	
 } 
 if (remainder >= 50) {
 	let l = Math.floor(remainder / 50)
 	remainder = remainder - l * 50;
 	while (l > 0) {
 		romanArr.push("L");
 		l--
 	}  
 }
 if (remainder >= 40) {
 	remainder = remainder - 40;
 	romanArr.push("XL"); 	
 }
 if (remainder >= 10) {
 	let x = Math.floor(remainder / 10)
 	remainder = remainder - x * 10;
 	while (x > 0) {
 		romanArr.push("X");
 		x--
 	}  
 }
 if (remainder >= 9) {
 	remainder = remainder - 9;
 	romanArr.push("IX"); 	
 }
 if (remainder >= 5) {
 	let v = Math.floor(remainder / 5)
 	remainder = remainder - v * 5;
 	while (v > 0) {
 		romanArr.push("V");
 		v--
 	} 
 } 
 if (remainder >= 4) {
 	remainder = remainder - 4;
 	romanArr.push("IV"); 	
 }
 if (remainder >= 0) {
 	let i = remainder;
 	while (i > 0) {
 		romanArr.push("I");
 		i--
 	}  
 }
 return romanArr.join("")
}

console.log(convertToRoman(2));