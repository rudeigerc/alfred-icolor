import test from 'ava';
import alfyTest from 'alfy-test';

// hex3
test('hex3 min', async t => {
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

test('hex3 min+', async t => {
	const alfy = alfyTest();
	const result = await alfy('001');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 0.00, green: 0.00, blue: 0.07, alpha: 1.00)',
			subtitle: '#001',
			arg: 'UIColor(red: 0.00, green: 0.00, blue: 0.07, alpha: 1.00)'
		}
	]);
});

test('hex3 nom', async t => {
	const alfy = alfyTest();
	const result = await alfy('FD0');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 0.87, blue: 0.00, alpha: 1.00)',
			subtitle: '#FD0',
			arg: 'UIColor(red: 1.00, green: 0.87, blue: 0.00, alpha: 1.00)'
		}
	]);
});

test('hex3 max-', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFE');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 0.93, alpha: 1.00)',
			subtitle: '#FFE',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 0.93, alpha: 1.00)'
		}
	]);
});

test('hex3 max', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFF');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)',
			subtitle: '#FFF',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)'
		}
	]);
});

// hex4
test('hex4 min', async t => {
	const alfy = alfyTest();
	const result = await alfy('0000');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 0.00)',
			subtitle: '#0000',
			arg: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 0.00)'
		}
	]);
});

test('hex4 min+', async t => {
	const alfy = alfyTest();
	const result = await alfy('0001');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 0.07)',
			subtitle: '#0001',
			arg: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 0.07)'
		}
	]);
});

test('hex4 nom', async t => {
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

test('hex4 max-', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFE');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 0.93)',
			subtitle: '#FFFE',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 0.93)'
		}
	]);
});

test('hex4 max', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFF');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)',
			subtitle: '#FFFF',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)'
		}
	]);
});

// hex6
test('hex6 min', async t => {
	const alfy = alfyTest();
	const result = await alfy('000000');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 1.00)',
			subtitle: '#000000',
			arg: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 1.00)'
		}
	]);
});

test('hex6 min+', async t => {
	const alfy = alfyTest();
	const result = await alfy('000001');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 1.00)',
			subtitle: '#000001',
			arg: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 1.00)'
		}
	]);
});

test('hex6 nom', async t => {
	const alfy = alfyTest();
	const result = await alfy('FF0000');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 0.00, blue: 0.00, alpha: 1.00)',
			subtitle: '#FF0000',
			arg: 'UIColor(red: 1.00, green: 0.00, blue: 0.00, alpha: 1.00)'
		}
	]);
});

test('hex6 max-', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFFFE');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)',
			subtitle: '#FFFFFE',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)'
		}
	]);
});

test('hex6 max', async t => {
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

// hex8
test('hex8 min', async t => {
	const alfy = alfyTest();
	const result = await alfy('00000000');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 0.00)',
			subtitle: '#00000000',
			arg: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 0.00)'
		}
	]);
});

test('hex8 min+', async t => {
	const alfy = alfyTest();
	const result = await alfy('00000001');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 0.00)',
			subtitle: '#00000001',
			arg: 'UIColor(red: 0.00, green: 0.00, blue: 0.00, alpha: 0.00)'
		}
	]);
});

test('hex8 nom', async t => {
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

test('hex8 max-', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFFFFFE');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)',
			subtitle: '#FFFFFFFE',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)'
		}
	]);
});

test('hex8 max', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFFFFFFF');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)',
			subtitle: '#FFFFFFFF',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)'
		}
	]);
});

// invalid
test('invalid hex', async t => {
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

test('invalid length', async t => {
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

test('invalid float', async t => {
	const alfy = alfyTest();
	const result = await alfy('0.FFF');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});

test('invalid negative', async t => {
	const alfy = alfyTest();
	const result = await alfy('-FFF');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});

test('invalid space', async t => {
	const alfy = alfyTest();
	const result = await alfy('FF FFFF');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});

test('invalid expression', async t => {
	const alfy = alfyTest();
	const result = await alfy('FFF+000');

	t.deepEqual(result, [
		{
			title: 'Invalid argument',
			icon: {
				path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns'
			}
		}
	]);
});
