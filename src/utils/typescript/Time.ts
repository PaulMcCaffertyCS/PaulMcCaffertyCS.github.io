class Time {
    hour: number;
    minute: number;
    second: number;
    meridiemIndicator: string;

    constructor(hour: number, minute: number, second: number, meridiemIndicator: string) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.meridiemIndicator = meridiemIndicator;
    }

    static getDigestibleCurrentTime(): Time {
        const now = new Date();
        return this.parseTimeString(now.toLocaleTimeString());
    }

    static parseTimeString(fullTimeStr: string): Time {
        const fullTimeStrSplit = fullTimeStr.split(" ");
        const timeStr = fullTimeStrSplit[0];
        const meridiem = fullTimeStrSplit[1];

        const timeStrSplit = timeStr.split(":");
        const h = timeStrSplit[0];
        const m = timeStrSplit[1];
        const s = timeStrSplit[2];

        return new Time(parseInt(h), parseInt(m), parseInt(s), meridiem);
    }

    isDay(): boolean {
        return this.meridiemIndicator === "AM";
    }

    isMorning(): boolean {
        return this.hour >= 4 && this.hour <= 11 && this.isDay();
    }

    isAfternoon(): boolean {
        return this.hour == 12 || this.hour <= 4 && !this.isDay();
    }

    isEvening(): boolean {
        return !this.isMorning() && !this.isAfternoon();
    }
}

export default Time;