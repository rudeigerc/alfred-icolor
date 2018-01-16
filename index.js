'use strict';
const alfy = require('alfy');

const items = [];
const number = 2;

if (alfy.input.startsWith('#')) {
	const hexStr = alfy.input.substr(1);
	const regex = /^[a-f0-9]{3,8}$/ig;
	if (hexStr.match(regex)) {
		let divisor;
		let red;
		let green;
		let blue;
		let alpha;
		let result;
		const hex = parseInt(hexStr, 16);
		switch (hexStr.length) {
			case 3:
				divisor = 15.0;
				red = ((hex & 0xF00) >> 8) / divisor;
				green = ((hex & 0x0F0) >> 4) / divisor;
				blue = (hex & 0x00F) / divisor;
				result = `UIColor(red: ${red.toFixed(number)}, green: ${green.toFixed(number)}, blue: ${blue.toFixed(number)}, alpha: 1.00)`;
				break;

			case 4:
				divisor = 15.0;
				alpha = ((hex & 0xF000) >> 12) / divisor;
				red = ((hex & 0x0F00) >> 8) / divisor;
				green = ((hex & 0x00F0) >> 4) / divisor;
				blue = (hex & 0x000F) / divisor;
				result = `UIColor(red: ${red.toFixed(number)}, green: ${green.toFixed(number)}, blue: ${blue.toFixed(number)}, alpha: ${alpha.toFixed(number)})`;
				break;

			case 6:	// RGB
				divisor = 255.0;
				red = ((hex & 0xFF0000) >> 16) / divisor;
				green = ((hex & 0x00FF00) >> 8) / divisor;
				blue = (hex & 0x0000FF) / divisor;
				result = `UIColor(red: ${red.toFixed(number)}, green: ${green.toFixed(number)}, blue: ${blue.toFixed(number)}, alpha: 1.00)`;
				break;

			case 8:	// ARGB
				divisor = 255.0;
				alpha = ((hex & 0xFF000000) >> 24) / divisor;
				red = ((hex & 0x00FF0000) >> 16) / divisor;
				green = ((hex & 0x0000FF00) >> 8) / divisor;
				blue = (hex & 0x000000FF) / divisor;
				result = `UIColor(red: ${red.toFixed(number)}, green: ${green.toFixed(number)}, blue: ${blue.toFixed(number)}, alpha: ${alpha.toFixed(number)})`;
				break;

			default:
				break;
		}

		if (result) {
			items.push({
				title: result,
				subtitle: alfy.input,
				arg: result
			});
		}
	}
}

if (items.length === 0) {
	items.push({
		title: 'Invalid argument'
	});
}

alfy.output(items);
