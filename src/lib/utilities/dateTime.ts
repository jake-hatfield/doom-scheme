// packages
import { DateTime } from 'luxon';

// lib
import { handlePluralization } from '@utils/string';

const defaultFormat = 'LLL dd, yyyy';

export const convertIsoToMillis = (isoTime: string) => {
	if (typeof isoTime !== 'string') return null;

	return DateTime.fromISO(isoTime).toMillis();
};

export const convertMillisToIso = (timestamp: number) => {
	if (typeof timestamp !== 'number' && typeof timestamp !== 'bigint')
		return null;

	return new Date(timestamp * 1000).toISOString();
};

export const formatDateTimeDifference = (
	primaryDate: DateTime,
	secondaryDate: DateTime = getCurrentDateTime()
) => {
	const difference = getDateTimeDifference(primaryDate, secondaryDate);

	if (!difference) return null;

	// evaluate only absolute values
	let { days, hours, minutes, seconds } = difference;

	let quantifier = 'left';
	let immediateQuantifer = 'Less than 1 minute left';

	if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
		quantifier = 'ago';
		immediateQuantifer = 'Just now';
	}

	days = Math.abs(days);
	hours = Math.abs(hours);
	minutes = Math.abs(minutes);

	if (days < 1 && hours < 1 && minutes <= 60) {
		if (minutes < 1) return immediateQuantifer;

		return `${handlePluralization(
			'minute',
			+minutes.toFixed(0),
			true
		)} ${quantifier}`;
	}

	if (days <= 2 && hours > 0)
		return `${handlePluralization(
			'hour',
			+hours.toFixed(0),
			true
		)} ${quantifier}`;

	return `${handlePluralization('day', +days.toFixed(0), true)} ${quantifier}`;
};

export const formatTimestamp = (timestamp: number, format = defaultFormat) => {
	if (typeof timestamp !== 'number') return null;

	const isoTime = convertMillisToIso(timestamp);

	if (!isoTime) return null;

	return DateTime.fromISO(isoTime).toFormat(format);
};

export const formatIsoToText = (isoTime: string, format = defaultFormat) => {
	if (typeof isoTime !== 'string') return null;

	return DateTime.fromISO(isoTime).toFormat(format);
};

export const getCurrentDateTime = () => DateTime.now();

export const getDateTimeDifference = (
	primaryDate: DateTime,
	secondaryDate: DateTime
) => {
	if (primaryDate instanceof DateTime && secondaryDate instanceof DateTime)
		return primaryDate.diff(secondaryDate, [
			'days',
			'hours',
			'minutes',
			'seconds',
		]);
	return null;
};

export const setWelcomeMessage = (firstName: string) => {
	let welcomeMessage = `Hello, ${firstName}`;

	const currentHour = getCurrentDateTime().hour;

	if (currentHour < 11) {
		welcomeMessage = `Good morning, ${firstName}`;
	} else if (currentHour < 18) {
		welcomeMessage = `Good afternoon, ${firstName}`;
	} else {
		welcomeMessage = `Good evening, ${firstName}`;
	}

	return welcomeMessage;
};
