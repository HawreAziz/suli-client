import { getNextDay } from "../dataContainer";



export default (workTime: { start: string, end: string }) => {
    const endTime = workTime.end;
    const startTime = workTime.start;
    try {
        const toTime = endTime.split(" ");
        const currentDate = new Date();
        const to24Hour = parseInt(toTime[0].split(":")[0]) + (toTime[1].trim() === 'PM' ? 12 : 0);
        const toMinutes = parseInt(toTime[0].split(":")[1]);
        const toDate = new Date();
        toDate.setHours(to24Hour, toMinutes);
        const diff = toDate.valueOf() - currentDate.valueOf();
        const duration = Math.floor(diff / 1000 / 60 / 60)
        const diffInMinutes = toDate.getMinutes() - currentDate.getMinutes();
        if (duration < 0) {
            return `Closed, opens again ${getNextDay(currentDate)} ${startTime}`
        } else {
            if (duration === 0) {
                if (diffInMinutes > 0) {
                    return `Closes in ${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""}`;
                } else {
                    return `Closed, opens again ${getNextDay(currentDate)} - ${startTime}`
                }
            } else {
                return `Open until ${endTime}`
            }
        }
    } catch (error) {
        if (!endTime) {
            return `Open: ${startTime}`
        }
        return `Open: ${startTime} - ${endTime}`;
    }
}