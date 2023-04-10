// @ts-nocheck

// packages
import { Duration } from 'luxon';

// lib
import {
	convertIsoToMillis,
	convertMillisToIso,
	formatDateTimeDifference,
	formatIsoToText,
	formatTimestamp,
	getCurrentDateTime,
	getDateTimeDifference,
} from '@utils/dateTime';

// test runner consts
const currentTime = getCurrentDateTime();

test('convertIsoToMillis()', () => {
	expect(convertIsoToMillis(123456789)).toBeNull;

	expect(convertIsoToMillis('Test string')).toBeNaN;

	expect(convertIsoToMillis('2023-04-05T19:07:37.330Z')).toBe(1680721657330);
});

test('convertMillisToIso()', () => {
	expect(convertMillisToIso('Test string')).toBe(null);

	expect(convertMillisToIso(1680721805)).toBe('2023-04-05T19:10:05.000Z');
});

test('formatDateTimeDifference()', () => {
	expect(formatDateTimeDifference(1680721657330, 1680721805)).toBeNull;

	expect(
		formatDateTimeDifference(
			currentTime.plus({ days: 3 }),
			currentTime.minus({ days: 2 })
		)
	).toBe('5 days left');

	expect(
		formatDateTimeDifference(currentTime.plus({ hours: 3 }), currentTime)
	).toBe('3 hours left');

	expect(
		formatDateTimeDifference(currentTime.plus({ hours: 1 }), currentTime)
	).toBe('1 hour left');

	expect(
		formatDateTimeDifference(currentTime.plus({ minutes: 59 }), currentTime)
	).toBe('59 minutes left');

	expect(
		formatDateTimeDifference(currentTime.plus({ minutes: 1 }), currentTime)
	).toBe('1 minute left');

	expect(
		formatDateTimeDifference(currentTime.plus({ seconds: 1 }), currentTime)
	).toBe('Less than 1 minute left');

	expect(
		formatDateTimeDifference(currentTime.minus({ seconds: 2 }), currentTime)
	).toBe('Just now');

	expect(
		formatDateTimeDifference(currentTime.minus({ minutes: 1 }), currentTime)
	).toBe('1 minute ago');

	expect(
		formatDateTimeDifference(currentTime.minus({ minutes: 60 }), currentTime)
	).toBe('1 hour ago');

	expect(
		formatDateTimeDifference(currentTime.minus({ hours: 24 }), currentTime)
	).toBe('1 day ago');

	expect(
		formatDateTimeDifference(currentTime.minus({ days: 5 }), currentTime)
	).toBe('5 days ago');
});

test('formatIsoToText()', () => {
	expect(formatIsoToText(1680728749)).toBeNull;

	expect(formatIsoToText('2023-04-05T21:09:10.799Z')).toBe('Apr 05, 2023');

	expect(formatIsoToText('2023-04-05T21:09:10.799Z', 'yyyy, LLLL dd')).toBe(
		'2023, April 05'
	);
});

test('formatTimestamp()', () => {
	expect(formatTimestamp('Test string')).toBeNull;

	expect(formatTimestamp(1680728749)).toBe('Apr 05, 2023');

	expect(formatTimestamp(1680728749, 'yyyy, LLLL dd')).toBe('2023, April 05');
});

test('getDateTimeDifference()', () => {
	const differenceDate = getDateTimeDifference(
		currentTime.plus({ days: 3 }),
		currentTime
	);

	expect(
		getDateTimeDifference(
			convertIsoToMillis(1680721805),
			convertIsoToMillis(123456789)
		)
	).toBeNull;

	expect(getDateTimeDifference(null, null)).toBeNull;

	expect(differenceDate).not.toBeNull;
	expect(differenceDate).toBeInstanceOf(Duration);
	expect(differenceDate?.values.days).toBe(3);
	expect(differenceDate?.values.hours).toBe(0);
	expect(differenceDate?.values.minutes).toBe(0);
});
