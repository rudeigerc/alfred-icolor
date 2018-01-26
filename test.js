import test from 'ava';
import alfyTest from 'alfy-test';

test('hex3 valid', async t => {
	const alfy = alfyTest();
	const result = await alfy('000');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 1.00)',
			subtitle: '#000',
			arg: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 1.00)'
		}
	]);
});

test('hex3 invalid', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFG');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});

test('hex4 valid', async t => {
	const alfy = alfyTest();
	const result = await alfy('FF00');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 0.00, alpha: 0.00)',
			subtitle: '#FF00',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 0.00, alpha: 0.00)'
		}
	]);
});

test('hex4 invalid', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFG');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});

test('hex6 valid', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFFFF');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)',
			subtitle: '#FFFFFF',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)'
		}
	]);
});

test('hex6 invalid', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFFFG');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});

test('hex8 valid', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFF00FF');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 0.00, alpha: 1.00)',
			subtitle: '#FFFF00FF',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 0.00, alpha: 1.00)'
		}
	]);
});

test('hex8 invalid', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFFFFFG');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});

test('length invalid', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFFF');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});
