'use strict';
const alfy = require('alfy');
const items = [];
const number = 2;

if (alfy.input.startsWith('#')) {
	const hex_str = alfy.input.substr(1);
	const regex = /^[a-f0-9]{3,8}$/ig;
	if (hex_str.match(regex)) {
		const hex = parseInt(hex_str, 16);
		switch (hex_str.length) {
			case 3:
			var divisor = 15.0;
			var red = ((hex & 0xF00) >> 8) / divisor;
			var green = ((hex & 0x0F0) >> 4) / divisor;
			var blue = (hex & 0x00F) / divisor;
			var result = `UIColor(red: ${red.toFixed(number)}, green: ${green.toFixed(number)}, blue: ${blue.toFixed(number)}, alpha: 1.00)`;
			break;

			case 4:
			var divisor = 15.0;
			var red = ((hex & 0xF000) >> 12) / divisor;
			var green = ((hex & 0x0F00) >> 8) / divisor;
			var blue = ((hex & 0x00F0) >> 4) / divisor;
			var alpha = (hex & 0x000F) / divisor;
			var result = `UIColor(red: ${red.toFixed(number)}, green: ${green.toFixed(number)}, blue: ${blue.toFixed(number)}, alpha: ${alpha.toFixed(number)})`;
			break;

			case 6:
			var divisor = 255.0;
			var red = ((hex & 0xFF0000) >> 16) / divisor;
			var green = ((hex & 0x00FF00) >> 8) / divisor;
			var blue = (hex & 0x0000FF) / divisor;
			var result = `UIColor(red: ${red.toFixed(number)}, green: ${green.toFixed(number)}, blue: ${blue.toFixed(number)}, alpha: 1.00)`;
			break;

			case 8:
			var divisor = 255.0;
			var red = ((hex & 0xFF000000) >> 24) / divisor;
			var green = ((hex & 0x00FF0000) >> 16) / divisor;
			var blue = ((hex & 0x0000FF00) >>  8) / divisor;
			var alpha = (hex & 0x000000FF) / divisor;
			var result = `UIColor(red: ${red.toFixed(number)}, green: ${green.toFixed(number)}, blue: ${blue.toFixed(number)}, alpha: ${alpha.toFixed(number)})`;
			break;
		}
		
		items.push({
			title: result,
			subtitle: alfy.input,
			arg: result
		});
	}
}

if (items.length == 0) {
	items.push({
		title: "Invalid argument"
	});
}

alfy.output(items);
