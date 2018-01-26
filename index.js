'use strict';
const config = require('./config');
const alfy = require('alfy');

const items = [];
const decimalPlace = config.decimalPlace;
const hexString = alfy.input;
const regex = /^[a-f0-9]{3,8}$/ig;

function hexToColor(hexString) {
	const color = {
		red: 0,
		green: 0,
		blue: 0,
		alpha: 0,
	};
	let divisor;
	const hex = parseInt(hexString, 16);
	switch (hexString.length) {
		case 3: {
			divisor = 15.0;
			color.red = ((hex & 0xF00) >> 8) / divisor;
			color.green = ((hex & 0x0F0) >> 4) / divisor;
			color.blue = (hex & 0x00F) / divisor;
			color.alpha = 0;
			break;
		}
		case 4: {
			divisor = 15.0;
			color.red = ((hex & 0xF000) >> 12) / divisor;
			color.green = ((hex & 0x0F00) >> 8) / divisor;
			color.blue = ((hex & 0x00F0) >> 4) / divisor;
			color.alpha = (hex & 0x000F) / divisor;
			break;
		}
		case 6: {
			divisor = 255.0;
			color.red = ((hex & 0xFF0000) >> 16) / divisor;
			color.green = ((hex & 0x00FF00) >> 8) / divisor;
			color.blue = (hex & 0x0000FF) / divisor;
			color.alpha = 0
			break;
		}
		case 8: {
			divisor = 255.0;
			color.red = ((hex & 0xFF000000) >>> 24) / divisor;
			color.green = ((hex & 0x00FF0000) >> 16) / divisor;
			color.blue = ((hex & 0x0000FF00) >> 8) / divisor;
			color.alpha = (hex & 0x000000FF) / divisor;
			break;
		}
		default: {
			return null
			break;
		}
	}
	return color;
};

if (hexString.match(regex)) {
	const color = hexToColor(hexString);
	if (color) {
		const result = `UIColor(red: ${color.red.toFixed(decimalPlace)}, green: ${color.green.toFixed(decimalPlace)}, blue: ${color.blue.toFixed(decimalPlace)}, alpha: ${color.alpha.toFixed(decimalPlace)})`;
		items.push({
			title: result,
			subtitle: `#${hexString}`,
			arg: result
		});
	}
}

if (items.length === 0) {
	items.push({
		title: 'Invalid argument'
	});
}

alfy.output(items);
