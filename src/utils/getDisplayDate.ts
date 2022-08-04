export const getDisplayDate = (date: Date): string => {
    const month = date.toLocaleString("en-US", {month:"long"});
    const day = date.toLocaleDateString("en-US", {day:"2-digit"});
    const year = date.getFullYear();

    return `${day}-${month}-${year}`
}