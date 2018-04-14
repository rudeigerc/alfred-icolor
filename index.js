'use strict';
const alfy = require('alfy');
const config = require('./config');

const items = [];
const decimalPlace = config.decimalPlace;
const mode = config.mode;
const hexString = alfy.input;
const regex = /^[a-f0-9]{3,8}$/ig;

class Color {
	constructor(hexString) {
		this.hex = `#${hexString}`;
		this.rgba = Color.hexToRgba(hexString);
		this.hsb = this.rgba === undefined ? undefined : Color.rgbaToHsb(this.rgba);
		this.cmyk = this.rgba === undefined ? undefined : Color.rgbaToCmyk(this.rgba);
		this.isValid = this.rgba !== undefined;
	}

	static hexToRgba(hexString) {
		let divisor;
		const rgba = {
			red: 0.0,
			green: 0.0,
			blue: 0.0,
			alpha: 1.0
		};
		const hex = parseInt(hexString, 16);
		switch (hexString.length) {
			case 3: {
				divisor = 15.0;
				rgba.red = ((hex & 0xF00) >> 8) / divisor;
				rgba.green = ((hex & 0x0F0) >> 4) / divisor;
				rgba.blue = (hex & 0x00F) / divisor;
				rgba.alpha = 1.0;
				break;
			}
			case 4: {
				divisor = 15.0;
				if (mode === 'RGBA') {
					rgba.red = ((hex & 0xF000) >> 12) / divisor;
					rgba.green = ((hex & 0x0F00) >> 8) / divisor;
					rgba.blue = ((hex & 0x00F0) >> 4) / divisor;
					rgba.alpha = (hex & 0x000F) / divisor;
				} else if (mode === 'ARGB') {
					rgba.alpha = ((hex & 0xF000) >> 12) / divisor;
					rgba.red = ((hex & 0x0F00) >> 8) / divisor;
					rgba.green = ((hex & 0x00F0) >> 4) / divisor;
					rgba.blue = (hex & 0x000F) / divisor;
				}
				break;
			}
			case 6: {
				divisor = 255.0;
				rgba.red = ((hex & 0xFF0000) >> 16) / divisor;
				rgba.green = ((hex & 0x00FF00) >> 8) / divisor;
				rgba.blue = (hex & 0x0000FF) / divisor;
				rgba.alpha = 1.0;
				break;
			}
			case 8: {
				divisor = 255.0;
				if (mode === 'RGBA') {
					rgba.red = ((hex & 0xFF000000) >>> 24) / divisor;
					rgba.green = ((hex & 0x00FF0000) >> 16) / divisor;
					rgba.blue = ((hex & 0x0000FF00) >> 8) / divisor;
					rgba.alpha = (hex & 0x000000FF) / divisor;
				} else if (mode === 'ARGB') {
					rgba.alpha = ((hex & 0xFF000000) >>> 24) / divisor;
					rgba.red = ((hex & 0x00FF0000) >> 16) / divisor;
					rgba.green = ((hex & 0x0000FF00) >> 8) / divisor;
					rgba.blue = (hex & 0x000000FF) / divisor;
				}
				break;
			}
			default: {
				return undefined;
			}
		}
		return rgba;
	}

	static rgbaToHsb(rgba) {
		const hsb = {
			hue: 0,
			saturation: 0.0,
			brightness: 0.0
		};
		const maximum = Math.max(rgba.red, rgba.green, rgba.blue);
		const minimum = Math.min(rgba.red, rgba.green, rgba.blue);
		const chroma = maximum - minimum;
		if (chroma === 0) {
			hsb.hue = undefined;
		} else {
			let hue_;
			if (maximum === rgba.red) {
				hue_ = ((rgba.green - rgba.blue) / chroma) % 6;
			} else if (maximum === rgba.green) {
				hue_ = ((rgba.blue - rgba.red) / chroma) + 2;
			} else if (maximum === rgba.blue) {
				hue_ = ((rgba.red - rgba.green) / chroma) + 4;
			}
			hsb.hue = parseInt((hue_ * 60).toFixed(), 10);
			if (hsb.hue < 0) {
				hsb.hue += 360;
			}
		}
		hsb.brightness = maximum;
		hsb.saturation = maximum === 0 ? 0 : 1 - (minimum / maximum);
		return hsb;
	}

	static rgbaToCmyk(rgba) {
		const cmyk = {
			cyan: 0.0,
			magenta: 0.0,
			yellow: 0.0,
			black: 0.0
		};
		cmyk.black = 1 - Math.max(rgba.red, rgba.green, rgba.blue);
		if (cmyk.black !== 1) {
			cmyk.cyan = (1 - rgba.red - cmyk.black) / (1 - cmyk.black);
			cmyk.magenta = (1 - rgba.green - cmyk.black) / (1 - cmyk.black);
			cmyk.yellow = (1 - rgba.blue - cmyk.black) / (1 - cmyk.black);
		}
		return cmyk;
	}
}

if (hexString.match(regex)) {
	const color = new Color(hexString);
	if (color.isValid) {
		const result = `UIColor(red: ${color.rgba.red.toFixed(decimalPlace)}, green: ${color.rgba.green.toFixed(decimalPlace)}, blue: ${color.rgba.blue.toFixed(decimalPlace)}, alpha: ${color.rgba.alpha.toFixed(decimalPlace)})`;
		items.push({
			title: result,
			subtitle: color.hex,
			arg: result
		});
	}
}

if (items.length === 0) {
	items.push({
		title: 'Invalid argument',
		icon: {
			path: alfy.icon.error
		}
	});
}

alfy.output(items);
