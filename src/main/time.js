// globals
'use strict';

const DIV_SECOND = 1000;
const DIV_MINUTE = 60 * DIV_SECOND;
const DIV_HOUR = 60 * DIV_MINUTE;
const DIV_WATCH = 6 * DIV_HOUR;
const DIV_DAY = 4 * DIV_WATCH;
const DIV_WEEK = 10 * DIV_DAY;
const DIV_MONTH = 3 * DIV_WEEK;
const DIV_SEASON = 3 * DIV_MONTH;
const DIV_YEAR = 12 * DIV_MONTH + 5;

export class Period {

	constructor (millis) {
		this.millis = millis;
	}

	get milliseconds() {
		return this.millis;
	}

	get seconds() {
		return this.millis / DIV_SECOND;
	}

	get minutes() {
		return this.millis / DIV_MINUTE;
	}

	get hours() {
		return this.millis / DIV_HOUR;
	}

	get watches() {
		return this.millis / DIV_WATCH;
	}

	get days() {
		return this.millis / DIV_DAY;
	}

	get weeks() {
		return this.millis / DIV_WEEK;
	}

	get months() {
		return this.millis / DIV_MONTH;
	}

	get seasons() {
		return this.millis / DIV_SEASON;
	}

	get years() {
		return this.millis / DIV_YEAR;
	}

}

