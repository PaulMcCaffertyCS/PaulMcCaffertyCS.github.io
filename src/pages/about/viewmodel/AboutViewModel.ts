import Time from "../../../utils/typescript/Time";

function getTimeOfDayGreeting(): string {
    const time = Time.getDigestibleCurrentTime();
    if (time.isMorning()) {
        return "Morning";
    } else if (time.isAfternoon()) {
        return "Afternoon";
    } else if (time.isEvening()) {
        return "Evening";
    } else {
        return "Indeterminable Timezone";
    }
}

export { getTimeOfDayGreeting };