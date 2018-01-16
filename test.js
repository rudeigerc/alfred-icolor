import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('#FFFFFF');

	t.deepEqual(result, [
		{
			title: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)',
			subtitle: '#FFFFFF',
			arg: 'UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)'
		}
	]);
});
